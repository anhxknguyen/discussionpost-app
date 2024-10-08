"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const DiscussionSchema = z.object({
  title: z.string().min(1, "Post title cannot be empty."),
  content: z.string().min(1, "Post content cannot be empty."),
});

type DiscussionFormFields = z.infer<typeof DiscussionSchema>;

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DiscussionFormFields>({
    resolver: zodResolver(DiscussionSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<DiscussionFormFields> = async (data) => {
    try {
      const response = await fetch("/api/discussions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("Discussion post created successfully!");
        router.push("/discussions");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col gap-2 py-6">
      <h1 className="text-2xl font-bold">Start A New Discussion</h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="py-2 px-4 w-1/4 border border-zinc-700 rounded-md"
          {...register("title")}
          type="text"
          placeholder="Title of your discussion post"
        />
        {errors.title && (
          <div className="text-red-500">{errors.title.message}</div>
        )}
        <textarea
          className="py-2 px-4 w-1/2 h-64 border border-zinc-700 rounded-md"
          {...register("content")}
          placeholder="Content of your discussion post"
        />
        {errors.content && (
          <div className="text-red-500">{errors.content.message}</div>
        )}
        <button
          className="border w-64 py-2 px-4 bg-black hover:bg-zinc-700 text-white"
          disabled={isSubmitting}
          type="submit"
        >
          Create Discussion Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
