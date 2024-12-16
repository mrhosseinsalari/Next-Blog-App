import Table from "@/ui/Table";

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{category.title}</td>
    </Table.Row>
  );
}

export default PostRow;
