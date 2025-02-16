import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getAllUsersApi } from "@/services/authService";
import UserRow from "./UserRow";

async function UsersTable() {
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);

  const { users } = await getAllUsersApi(options);
  if (!users.length) return <Empty resourceName="کاربری" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>آواتار</th>
        <th>نام</th>
        <th>ایمیل</th>
        <th>تاریخ عضویت</th>
      </Table.Header>
      <Table.Body>
        {users.map((user, index) => {
          return <UserRow key={user._id} user={user} index={index} />;
        })}
      </Table.Body>
    </Table>
  );
}

export default UsersTable;
