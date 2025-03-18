import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

const BlogCard = ({ data }: IappProps) => {
  return (
    <div className="group relative rounded-lg shadow-md border border-gray-200 bg-white overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="group-hover:scale-105 object-cover transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {data.title}
          </h3>
          <p className="text-sm mb-4 text-muted-foreground line-clamp-2">
            {data.content}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="size-8 rounded-full overflow-hidden relative">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-muted-foreground">{data.authorName}</p>
            </div>
            <time className="text-muted-foreground text-sm">
              {formatDate(data.createdAt.getTime())}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
