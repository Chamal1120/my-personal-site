//"use client"

//import { useParams } from "next/navigation";
// import { useState, useEffect } from "react";
//import { TRPCProvider } from "~/providers/trpc-provider";
//import { trpc } from "~/utils/trpc";
//import Markdown from "react-markdown";
//import remarkGfm from 'remark-gfm';
//import Image from "next/image";

//interface BlogPost {
//    id: number;
//    title: string;
//    content?: string | null;
//    imageUrl?: string | null;
//    tags?: string[] | null;
//}

export default function BlogPostPage() {
   // const  { id } = useParams();
   // // const [post, setPost] = useState<BlogPost| null>(null);
   // useEffect(() => {
   //     const cached = sessionStorage.getItem("currentPost");
   //     if (cached) {
   //         const parsed: BlogPost = JSON.parse(cached);
   //         if (parsed.id === Number(id)) setPost(parsed);
   //     }
   // }, [id]);

    // Fallback fetch if directly visited
   //  const {
   //    data: blogPostd,
   //    isLoading: blogPostLoading,
   //    error: blogPostError,
   //  } = trpc.blog.byId.useQuery(
   //      { id: Number(id) },
   //      { enabled: post === null }
   //  );

    // useEffect(() => {
    //     if (blogPostd && post === null) {
    //         setPost(blogPostd);
    //         sessionStorage.setItem("currentPost", JSON.stringify(blogPostd));
    //     }
    // }, [blogPostd, post]);

    // if (!post) return <p> Loading post...</p>

    return (
    //    <TRPCProvider>
    //        <div className="max-w-3xl mx-auto p-4">
    //         <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
    //         {post.tags && (
    //             <p className="mb-4">
    //                 {post.tags.map((t) => `#${t} `)}
    //             </p>
    //         )}
    //         {post.imageUrl && (
    //             <Image src={post.imageUrl} alt={post.title} className="mb-4" />
    //         )}
    //         <div>
    //         <Markdown remarkPlugins={[remarkGfm]}>
    //             {post.content}
    //         </Markdown>
    //         </div>
    //        </div>
    //    </TRPCProvider>
    <></>
    );
} 
