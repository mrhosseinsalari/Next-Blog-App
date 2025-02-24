import { getPostBySlug } from "@/services/postService";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPosts from "../_components/RelatedPosts";
import PostComments from "../_components/comment/PostComments";
import PostMeta from "../_components/PostMeta";

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

  const { title, coverImageUrl, readingTime, author, briefText, text } = post;

  return (
    <div className="text-secondary-600 min-h-screen py-12">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        {/* عنوان پست */}
        <h1 className="text-secondary-700 text-2xl sm:text-3xl font-bold mb-8 leading-tight">
          {title}
        </h1>

        {/* تصویر کاور */}
        <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg mb-5">
          <Image
            className="object-cover object-center hover:scale-105 transition-all duration-300 ease-out"
            fill
            src={coverImageUrl}
            alt={title}
          />
        </div>

        {/* بخش نویسنده و زمان مطالعه */}
        <PostMeta readingTime={readingTime} author={author} />

        {/* متن مختصر و متن کامل پست */}
        <div className="prose prose-lg sm:prose-xl max-w-none mb-12">
          <p className="font-bold text-secondary-600">{briefText}</p>
          <p className="text-base sm:text-lg text-secondary-600 leading-7 sm:leading-9">
            {text}
          </p>
        </div>

        {/* پست‌های مرتبط */}
        {post.related.length > 0 && <RelatedPosts posts={post.related} />}

        {/* بخش نظرات */}
        <PostComments post={post} />
      </div>
    </div>
  );
}

export default SinglePost;
