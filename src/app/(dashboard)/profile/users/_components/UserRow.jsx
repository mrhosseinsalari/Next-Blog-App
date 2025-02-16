import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import toLocalDateShort from "@/utils/dateFormatter";
import Avatar from "@/ui/Avatar";

function UserRow({ user, index }) {
  const { name, email, avatarUrl, createdAt } = user;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>
        <Avatar src={avatarUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{toLocalDateShort(createdAt)}</td>
    </Table.Row>
  );
}

export default UserRow;
