import { getPostById } from "@/services/postService";
import Breadcrumbs from "@/ui/BreadCrumbs";
import { notFound } from "next/navigation";
import CreatePostForm from "../../create/_/CreatePostForm";

async function EditPage({ params: { postId } }) {
  const { post } = await getPostById(postId);
  if (!post) notFound();

  const breadcrumbs = [
    {
      label: "پست ها",
      href: "/profile/posts",
    },
    {
      label: "ویرایش پست",
      href: `/profile/posts/${postId}/edit`,
      active: true,
    },
  ];

  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}

export default EditPage;
