"use client";

// import { useState } from "react";
// import { trpc } from "~/utils/trpc";
import SignInButton from "~/components/SignInButton";
import SignOutButton from "~/components/SignOutButton";

export default function AdminPageContent() {
  // const [title, setTitle] = useState<string>("");
  // const [content, setContent] = useState<string>("");
  // const [tags, setTags] = useState<string>("");
  // const [imageUrl, setImageUrl] = useState<string>("");
  // const createBlog = trpc.blog.create.useMutation();

  // const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     createBlog.mutate({
  //         title,
  //         content,
  //         imageUrl,
  //         tags: tags.split(",").map(tag => tag.trim()).filter(Boolean),
  //     })
  // }

  return (
    <>
      <p>Admin Page</p>
      <SignInButton />
      <SignOutButton />
      <div>
        {/* 
            <form className="flex flex-col justify-center text-black gap-2 p-2">
                <input
                    className="font-bold p-2"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    className="p-2"
                    type="text"
                    placeholder="ImgeUrl"
                    value={imageUrl}
                    onChange={e => setImageUrl(e.target.value)}
                />
                <textarea
                    className="p-2"
                    placeholder="Blog Body"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <input
                    className="p-2"
                    type="text"
                    placeholder="Tags (comma seperated)"
                    onChange={e => setTags(e.target.value)}
                />
                <button
                    className="text-white cursor-pointer p-4"
                    type="submit"
                >
                    Publish
                </button>
            </form>
            */}
      </div>
    </>
  );
}
