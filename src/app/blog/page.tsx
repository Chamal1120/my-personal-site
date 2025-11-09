"use client";

import BlogPageContent from "./BlogPageContent";
import { TRPCProvider } from "~/providers/trpc-provider";

export default function BlogPage() {
  return (
    <TRPCProvider>
      <BlogPageContent />
    </TRPCProvider>
  );
}

