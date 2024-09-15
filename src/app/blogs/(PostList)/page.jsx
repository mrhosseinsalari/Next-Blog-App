import { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/ui/Spinner";

// export const revalidate = 3600;

async function BlogPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <PostList />
    </Suspense>
  );
}

export default BlogPage;
