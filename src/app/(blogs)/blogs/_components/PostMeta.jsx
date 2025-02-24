import Avatar from "@/ui/Avatar";
import { ClockIcon } from "@heroicons/react/24/outline";

function PostMeta({ readingTime, author }) {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex items-center gap-x-1">
        <Avatar
          src={author.avatarUrl}
          alt={author.name}
          width={30}
          height={30}
        />
        <span className="text-sm sm:text-base text-secondary-500">
          {author.name}
        </span>
      </div>
      <div className="flex items-center text-sm sm:text-base text-secondary-500">
        <ClockIcon className="w-4 h-4 sm:w-5 sm:h-5 stroke-secondary-500 ml-1" />
        <span className="ml-1">خواندن :</span>
        <span className="ml-1 font-medium">{readingTime}</span>
        <span>دقیقه</span>
      </div>
    </div>
  );
}

export default PostMeta;
