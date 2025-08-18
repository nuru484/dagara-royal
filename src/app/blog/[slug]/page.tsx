// src/app/blog/[slug]/page.tsx
import BlogDetail from "@/components/blog/BlogDetail";
import { notFound } from "next/navigation";
import { getBlogPosts } from "../page";

// Update the props interface to handle async params
interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = await params;
  const posts = await getBlogPosts();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
};

export default BlogDetailPage;
