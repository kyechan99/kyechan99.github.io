/**
 * 외부 주소인지 확인
 * @param url 확인할 주소
 * @returns 외부 주소 여부
 */
export const isExternalLink = (url: string) => {
  return url.startsWith("http") || url.startsWith("//");
};

/**
 * head 이미지 주소 가져오기
 * @param file 이미지 파일 이름
 * @returns 
 */
export const headerImgPath = (file?: string) => {
  if (!file) file = `default.png`;
  return `/img/head-img/${file}`;
};

