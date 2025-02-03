import Breadcrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "./_/CreatePostForm";

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
      <CreatePostForm />
    </div>
  );
}

export default Page;
