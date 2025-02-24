import truncateText from "@/utils/truncateText";
import Author from "./Author";
import CoverImage from "./CoverImage";

function RelatedPosts({ posts }) {
  return (
    <div className="mb-12">
      <h2 className="text-xl sm:text-2xl font-bold text-secondary-700 mb-6">
        پست‌های مرتبط
      </h2>
      <div className="grid gap-6 grid-cols-6">
        {posts.map((post) => (
          <div key={post._id} className="col-span-3 lg:col-span-2">
            <CoverImage {...post} />
            <div
              className="flex flex-col gap-y-3 items-center 
              sm:flex-row sm:justify-between"
            >
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
