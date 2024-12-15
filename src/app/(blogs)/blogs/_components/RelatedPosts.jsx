import truncateText from "@/utils/truncateText";
import Author from "./Author";
import CoverImage from "./CoverImage";

function RelatedPosts({ posts }) {
  return (
    <div className="mb-8">
      <p className="text-xl mb-4">پست های مرتبط</p>
      <div className="grid gap-6 grid-cols-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <CoverImage {...post} />
            <div className="flex items-center justify-between">
              <p>{truncateText(post.title, 20)}</p>
              <Author {...post.author} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedPosts;
