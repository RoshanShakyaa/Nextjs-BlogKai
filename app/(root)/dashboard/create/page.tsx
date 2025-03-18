"use client";

import SubmitButton from "@/components/general/SubmitButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { handleSubmission } from "@/lib/actions";
import React from "react";

const CreatePost = () => {
  return (
    <div>
      <Card className="max-w-lg mx-auto mt-10">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post to share with the world
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input required name="title" type="text" placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>

              <Textarea name="content" required placeholder="Content..." />
            </div>
            <div className="flex flex-col gap-2">
              <Label>ImageURL</Label>
              <Input name="url" type="text" required placeholder="ImageURL" />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePost;
