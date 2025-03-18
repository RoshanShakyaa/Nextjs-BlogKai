import BlogCard from "@/components/general/BlogCard";
import { prisma } from "../utils/db";
import { Suspense } from "react";
import BlogPostsGrid from "./dashboard/many";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      createdAt: true,
      updatedAt: true,
      authorId: true,
    },
  });
  return data;
}

export default function Home() {
  return (
    <div className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>

      <Suspense fallback={BlogPostsGrid()}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}

async function BlogPosts() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogCard key={item.id} data={item} />
      ))}
    </div>
  );
}
