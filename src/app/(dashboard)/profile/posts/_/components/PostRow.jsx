import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import toLocalDateShort from "@/utils/dateFormatter";
import truncateText from "@/utils/truncateText";

const typeStyle = {
  free: {
    label: "رایگان",
    className: "badge--success",
  },
  premium: {
    label: "پولی",
    className: "badge--secondary",
  },
};

function PostRow({ post, index }) {
  const { title, category, author, createdAt, type } = post;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td>actions</td>
    </Table.Row>
  );
}

export default PostRow;
