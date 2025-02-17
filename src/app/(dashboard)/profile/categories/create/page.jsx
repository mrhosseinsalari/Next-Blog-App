import Breadcrumbs from "@/ui/BreadCrumbs";
import CreateCategoryForm from "./_/CreateCategoryForm";

function Page() {
  const breadcrumbs = [
    {
      label: "دسته بندی ها",
      href: "/profile/categories",
    },
    {
      label: "ایجاد دسته بندی",
      href: "create",
      active: true,
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <CreateCategoryForm />
    </div>
  );
}

export default Page;
