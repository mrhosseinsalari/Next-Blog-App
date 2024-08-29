import { Suspense } from "react";
import Loading from "./loading";
import PostList from "./_components/PostList";

async function BlogPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PostList />
    </Suspense>
  );
}

export default BlogPage;
