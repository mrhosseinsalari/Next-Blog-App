import PostList from "app/blogs/_components/PostList";

async function Category({ params }) {
  const { categorySlug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`
  );
  const { data } = await res.json();
  const { posts } = data || {};

  if (!posts.length)
    return (
      <p className="text-lg text-secondary-600">
        پستی در این دسته بندی پیدا نشد
      </p>
    );

  return <PostList posts={posts} />;
}

export default Category;
