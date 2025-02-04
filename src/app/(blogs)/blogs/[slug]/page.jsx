import { getPostBySlug } from "@/services/postService";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPosts from "../_components/RelatedPosts";
import PostComments from "../_components/comment/PostComments";

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const { posts } = await getPosts();
//   const slugs = posts.map((post) => ({ slug: post.slug }));
//   return slugs;
// }

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  return {
    title: post ? `پست ${post.title}` : "پستی یافت نشد",
  };
}

async function SinglePost({ params }) {
  //   await new Promise((res) => setTimeout(() => res(), 1000));

  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto pb-10">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative block aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
          fill
          src={post.coverImageUrl}
          alt={post.title}
        />
      </div>
      {post.related.length > 0 && <RelatedPosts posts={post.related} />}
      <PostComments post={post} />
    </div>
  );
}

export default SinglePost;
