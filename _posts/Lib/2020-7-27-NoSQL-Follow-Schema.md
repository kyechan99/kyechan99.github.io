---
layout: post
title: Mongoose Following/Follower Schema에 대해서
date: 2020-7-27
categories: [Lib]
description: NoSQL-MongoDB에서 팔로우, 팔로윙 설계에 대해
tags: [NoSQL, MongoDB, Mongoose]
keywords: Mongoose, NoSQL, MongoDB
comments: false
haveImg: true
headerImg: 2020-7-27-nosql.jpg
---

근래 진행하던 프로젝트에서 팔로우기능을 구현할일이 생겼는데요.
SQL이였다면 팔로우-팔로윙 관계를 기록하는 테이블을 만들어 팔로우 관계를 JOIN을 통해 연결지었을 터이지만 
비관계형 NoSQL에서는 어떻게 설계해야 되는지 생각해봤습니다.
분명 MongoDB의 Mongoose에는 populate기능이 JOIN의 역할을 해주고 있습니다.
그렇다면 populate를 사용해서 팔로우 관계를 알아내는 스키마가 옳은지,
기존 SQL 처럼 팔로우 관계를 기록하는 컬렉션을 만드는게 옳은지 고민하다 이 글을 쓰게됐습니다.

> 이 글은 어떤 방법이나 방식을 제안하는 글이 아닌 연구용임을 알립니다.

## 여러 방법
일단 프로젝트에서는 유저-유저 팔로우 관계와 유저-게임 팔로우 관계를 필요로 합니다.
이 글에서는 분리하기 쉽게 유저-게임 관계의 방법에 대해 생각해보았습니다.

- 유저에서 팔로우한 게임 ObjectID를 담는 방법
- 게임에서 팔로우한 유저 ObjectID를 담는 방법
- **유저와 게임에게 팔로우한 각각의 ObjectID를 서로 담는 방법**
- **유저와 게임사이 팔로우 관계를 기록하는 컬렉션에 각각의 ObjectID를 담는 방법**



## 유저와 게임에게 팔로우한 각각의 ObjectID를 서로 담는 방법

유저-게임사이의 팔로우관계를 각자의 스키마에서 담아 관리한다고 할때 둘의 스키마는 아래와 유사하게 설계될겁니다.

![1](/assets/img/2020-7-27-Follow/1.jpg)

> 위 이미지는 참고용 이미지로, User.games와 Game.users는 서로의 ObjectId가 저장될 배열입니다.
<br/>

### 유저-게임 스키마 설계
**유저 스키마**
```js
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  games: [{
      game: {
        type: ObjectId,
        ref: 'Game'
      }
  }]
});
```
games 배열은 game이라는 ObjectId, 즉 유저가 팔로우한 게임들의 `_id`가 해당 배열에 저장합니다.

**게임 스키마**
```js
const gameSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  followers: [{
      user: {
        type: ObjectId,
        ref: 'User'
      }
  }]
});
```
마찬가지로 followers 배열은 user라는 ObjectId, 즉 게임을 팔로우한 유저들의 `_id`가 해당 배열에 저장합니다.

<br/>

### 유저-게임 관계 넣기
유저와 게임에 각각 데이터가 입력되었다고 했을때 팔로우|팔로우취소는 아래와 비슷하게 설계되겠죠

**팔로우 하기**
```js
router.patch('/follow', function (req, res, next) {
  let userID = req.body.userID;
  let gameID = req.body.gameID;
  User.findByIdAndUpdate( userID,
		{ $push: { 'games': { game: gameID } } },
		{ safe: true, upsert: true, new : true })
  .then((result) => {
       return Game.findByIdAndUpdate( gameID,
		  { $push: { 'users': { user: userID } } },
		  { safe: true, upsert: true, new : true });
  })
  .then((result) => { res.status(200).json(result); })
  .catch((err) => { next(err); });
})
```

위 코드는 **팔로우하는 유저의 ObjectId**와 그 대상인 **게임의 ObjectId**를 알고 있다는 가정하에 작성된 코드입니다.
프로젝트 내에서 항상 `_id` 값을 가지고 있거나 혹은, 다른 특정 값을 이용해 `_id`값을 찾아야 됩니다.

게임 팔로우 이력을 유저만 가지고 있겠다라고 하면 첫번째 `then`부분은 필요가 없습니다.
물론 한쪽만 이력을 가지고 있는것도 팔로우 기능 구현에는 문제가 없습니다만 이는 게임을 팔로우한 유저 정보를 불러오지 않겠다에만 해당하는 이유입니다.

예로, 유저가 팔로우한 게임 목록을 불러오기 위해서는 해당 유저의 데이터만 find하면 되지만,
추가로 게임을 팔로우한 총 유저 수 또는 목록등을 필요로 할때, 모든 유저들의 `games` 데이터를 뒤져 해당게임과 일치하는 게임을 살펴봐야 할 것입니다.
이는 분명 성능적인 부분에서 뒤떨어지는 방법입니다. 유저가 많을수록, 각 유저가 팔로우한 게임들이 많을수록 찾기 힘들어지겠죠

다시 돌아와서 첫번째 `then`은 게임 컬렉션에도 팔로우한 유저 데이터를 넣는 부분입니다.
이렇게되면 게임을 팔로우한 유저 데이터들도 유저와 마찬가지로 쉽게 불러올 수 있습니다.

**팔로우 해제**
```js
router.patch('/unfollow', function (req, res, next) {
  let userID = req.body.userID;
  let gameID = req.body.gameID;
  User.findByIdAndUpdate( userID,
    	{ $pull: { 'games': { game: gameID } } },
    	{ safe: true, upsert: true, new : true })
  .then((result) => {
     return Game.findByIdAndUpdate( gameID,
      	{ $pull: { 'users': { user: userID } } },
      	{ safe: true, upsert: true, new : true });
  })
  .then((result) => { res.status(200).json(result); })
  .catch((err) => { next(err); });
})
```
팔로우하기와 큰 차이 없이 `$push`에서 `$pull`로 변경해주면 배열 추가에서 삭제로 이어집니다.

이렇게 유저와 게임에게 서로의 데이터를 저장하는 방식으로 서로의 관계를 쉽게 가져올 수 있습니다.

**유저 정보 가져오기**
```js
router.get('/', function (req, res, next) {
  User.find().populate({ path: 'games.game', model: 'Game', select: '_id name' })
  .then((result) => { res.status(200).json(result); })
  .catch((err) => { next(err); });
});
```
유저의 게임 팔로우 기록까지 `populate`를 사용해 가져왔다.
반대로 게임을 팔로우한 유저기록도 위 처럼 사용하면 된다.

**결과**
```json
[
  {
    "_id": "5f0ac498ad4bb01c5cd16094",
    "name": "홍길동",
    "games": [
      {
        "_id": "5f0ac4c5ff1a882f287403a1",
        "game": {
          "_id": "5f0abc60ac451a281402289d",
          "name": "오버워치"
        }
      },
      {
        "_id": "5f0ac7205fe42f0698687f04",
        "game": {
          "_id": "5f0abc6dac451a281402289e",
          "name": "리그오브레전드"
        }
      }
    ],
    "__v": 0
  }
]
```

결과적으로 각가의 관계를 모두 기록하고 불러올 수 있게 됐습니다.

![4](/assets/img/2020-7-27-Follow/4.jpg)
아무런 팔로우 관계도 없을때 입니다. User 와 Game에 각각 스키마에 기반한 두개의 임시 데이터를 넣은 상황인데요.

![5](/assets/img/2020-7-27-Follow/5.jpg)
팔로우 관계 넣었을때, 즉 User와 Game내에 각각의 ObjectID를 저장하는 배열 크기가 1 증가 했을때 43Byte가 증가했습니다.

![6](/assets/img/2020-7-27-Follow/6.jpg)
다시한번 팔로우 관계를 추가로 넣었을때도 43Byte가 증가합니다. (이후에도 계속해서 데이터를 추가해 보아도 43Byte)

결과적으로 팔로우시 User와 Game에 `_id` 값을 배열에 각각 추가할때는 86Byte 정도 추가된다고 볼수있겠네요.

단순히 ObjectID 값을 넣었을때의 상황일때는 이렇습니다만 팔로우한 날짜, 해제 날짜 등의 데이터를 넣었을때는 상황에 따라 다르겠습니다.


## 유저와 게임사이 팔로우 관계를 기록하는 컬렉션에 각각의 ObjectID를 담는 방법

![2](/assets/img/2020-7-27-Follow/2.jpg)

이번에는 기존 SQL 처럼 관계를 기록하는 새 컬렉션을 만드는 방법입니다.

FollowRelationship 컬렉션에 User와 Game의 ObjectID를 저장합니다.

**팔로우 하기**
```js
router.post('/follow', function (req, res, next) {
  const follow = new Follow ({
    user: req.body.userID,
    game: req.body.gameID
  });
  follow.save()
  .then((result) => { res.status(201).json(result); })
  .catch((err) => { next(err); });
});
```
이번에도 역시 User와 Game의 `ObjectID`를 알고 있다는 전제하로 작성됐습니다.

**팔로우 해제**
```js
router.delete('/follow', function (req, res, next) {
  const user = req.body.userID;
  const game = req.body.gameID;
  Follow.findOne({ user: user, game: game }, '_id')
    .then((follow) => {
      return Follow.findByIdAndDelete(follow._id);
    })
    .then((result) => { res.status(201).json(result); })
    .catch((err) => { next(err); });
});
```

User와 Game의 ObjectID가 모두 맞는 Follow 컬렉션 안에 있는 데이터 `_id`를 가져오고
`findByIdAndDelete`를 통해 해당 `_id`에 맞는 데이터를 삭제합니다.

저는 단순하게 `POST`와 `DELETE`를 사용했지만 상황에 따라서 `PUT`과 `PATCH` 도 사용될거 같습니다.


**팔로우 정보 가져오기**
```js
router.get('/follow', function (req, res, next) {
  Follow.find()
  .populate({ path: 'user', model: 'User', select: '_id name' })
  .populate({ path: 'game', model: 'Game', select: '_id name' })
    .then((result) => { res.status(200).json(result); })
    .catch((err) => { next(err); });
});
```

팔로우 정보를 가져오는것은 쉽지만 유저의 팔로우 정보를 가져오는건 조금 번거롭습니다.

**유저들의 팔로우 량 확인**
```js
router.get('/', function (req, res, next) {
  let result;
  User.find()
    .then((users) => {
		// 유저 정보들을 result 변수에 저장
        result = users;
		// 팔로우 량을 저장할 배열
        let followCountArray = [];
		// 유저 정보들을 모두 돌아가며 _id 값을 이용해 count 검색
        users.forEach(function(user) {
          followCountArray.push(Follow.count({ user: user._id }));
        })
        return Promise.all(followCountArray);
    })
    .then((followCountArray) => {
      for (let i = 0; i < result.length; i++) {
	  	// 각각 followers 라는 key를 생성해서 팔로우 량을 대입
        let tempResultElement = result[i].toObject();
        tempResultElement.followers = followCountArray[i];
        result[i] = tempResultElement;
      }
      res.status(200).json(result);
    })
    .catch((err) => { next(err); });
});
```

이 코드 방식이 **유저와 게임에게 팔로우한 각각의 ObjectID를 서로 담는 방법** 과 **유저와 게임사이 팔로우 관계를 기록하는 컬렉션에 각각의 ObjectID를 담는 방법** 의 가장 큰 차이점이라고 생각됩니다.

![9](/assets/img/2020-7-27-Follow/9.jpg)

서로 데이터를 담는 방법일때 단순히 `ObjectID`가 담긴 배열 크기만 호출 하면 되겠지만

컬렉션을 따로 둘 경우에는 위와 같이 `User`와 `Follow` 두 번의 검색이 필요합니다.



![7](/assets/img/2020-7-27-Follow/7.jpg)
![8](/assets/img/2020-7-27-Follow/8.jpg)

배열에 추가하는 방식보다 적은 67Byte가 나왔습니다. 

사실 데이터 크기를 측정하는건 조금 의미가 없을지도 모르겠습니다. 어떤 데이터를 저장할지도 항상 다르고 환경마다 다를 수 있있으니..


## 끝으로..

데이터 용량 면에서는 컬렉션을 새로 만드는 쪽이 가벼웠지만 그 차이가 매우 미미했습니다.

무엇보다 데이터 용량보단 데이터를 불러 오는 속도가 더욱 중요하겠다만 이는 측정하지 못했던 것이.. 데이터를 계속 늘려 봐도 1ms도 안걸리는 시간대 인데다 
자주 호출 할 수록 더 빨리 불러와 지는 등의 변폭이 심해서 이는 차후해 방법을 알아낸 후에 실험해 봐야 할 것 같습니다.

결과적으로 _'NoSQL에서 SQL 방식을 사용하는건 역시 불편함이 있다'_ 인것 같습니다.
확실히 코드량도 늘어나 코드 복잡도가 증가하고 단순히 팔로워 수를 측정하는 데에 있어도 유연성이 떨어집니다.

잘못된 부분이 있다면 언제든 지적 주시고 가르침을 주시면 감사하겠습니다.