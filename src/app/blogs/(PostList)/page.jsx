import { Suspense } from "react";
import PostList from "../_components/PostList";
import Spinner from "@/ui/Spinner";

//? how to revalidate :

//* 1. time based

export const revalidate = 3600; // for all request on this route
// after 15s => re-build =>
// 1. pass time interval +
// 2. new incoming request to rebuild this page
// updated data will be shown to the next user !! => ISR => incremental static re-generation

// { next: { revalidate: 3600 } } => for one request

// export const revalidate = 0; => opt out => dynamic !!!

async function BlogPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <PostList />
    </Suspense>
  );
}

export default BlogPage;
