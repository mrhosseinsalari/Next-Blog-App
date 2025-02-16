import Table from "@/ui/Table";
import { toPersianDigits } from "@/utils/numberFormatter";
import toLocalDateShort from "@/utils/dateFormatter";
import truncateText from "@/utils/truncateText";

function CategoryRow({ category, index }) {
  const { title, englishTitle, description, createdAt } = category;

  return (
    <Table.Row>
      <td>{toPersianDigits(index + 1)}</td>
      <td>{title}</td>
      <td>{englishTitle}</td>
      <td>{truncateText(description, 30)}</td>
      <td>{toLocalDateShort(createdAt)}</td>
    </Table.Row>
  );
}

export default CategoryRow;
