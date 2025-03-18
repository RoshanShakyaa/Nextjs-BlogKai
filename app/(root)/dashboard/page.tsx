import { prisma } from "@/app/utils/db";
import BlogCard from "@/components/general/BlogCard";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import BlogPostsGrid from "./many";

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

const Dashboard = () => {
  return (
    <div className="py-6">
      <div className="flex items-center mb-8 justify-between">
        <h1 className="text-3xl  font-semibold">Your Blog Posts</h1>
        <Link href="/dashboard/create">
          <Button>Create Post</Button>
        </Link>
      </div>

      <Suspense fallback={BlogPostsGrid()}>
        <BlogPosts />
      </Suspense>
    </div>
  );
};

async function BlogPosts() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user.id);

  if (!user) {
    return redirect("/api/auth/register");
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <BlogCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Dashboard;
