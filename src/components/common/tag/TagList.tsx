import Tag from "./Tag";

type TagProps = {
  tags?: string[];
};

export default function TagList({ tags }: TagProps) {
  return <div>{tags?.map(tag => <Tag key={tag} tag={tag} />)}</div>;
}
