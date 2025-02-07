import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import toLocalDateShort from "@/utils/dateFormatter";
import truncateText from "@/utils/truncateText";
import { UpdateComment, DeleteComment } from "./Buttons";

const statusStyle = [
  {
    label: "رد شده",
    className: "badge--danger",
  },
  {
    label: "در انتظار تایید",
    className: "badge--secondary",
  },
  {
    label: "تایید شده",
    className: "badge--success",
  },
];

function CommentRow({ comment, index }) {
  const {
    _id,
    content: { text },
    user,
    createdAt,
    status,
  } = comment;

  return (
    <Table.Row>
      <td>{toPersianDigits(index)}</td>
      <td>{truncateText(text, 30)}</td>
      <td>{user.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3">
          <UpdateComment id={_id} />
          <DeleteComment id={_id} />
        </div>
      </td>
    </Table.Row>
  );
}

export default CommentRow;
