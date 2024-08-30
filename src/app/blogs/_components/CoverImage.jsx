import Image from "next/image";
import Link from "next/link";
// import Avatar from "../../../../public/images/avatar.png";

function CoverImage({ coverImageUrl, title, slug }) {
  return (
    <div className="relative block aspect-video overflow-hidden rounded-md mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          className="object-cover object-center hover:scale-110 
          transition-all duration-300 ease-out"
          src={coverImageUrl}
          alt={title}
          fill
          quality={80}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
