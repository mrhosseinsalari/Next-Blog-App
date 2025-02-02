import Breadcrumbs from "@/ui/BreadCrumbs";

function Page() {
  const breadcrumbs = [
    {
      label: "پست ها",
      href: "/profile/posts",
    },
    {
      label: "ایجاد پست",
      href: "/profile/posts/create",
      active: true,
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
}

export default Page;
