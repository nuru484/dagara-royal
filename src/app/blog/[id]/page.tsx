import { blogPosts } from "@/app/data/blog";
import BlogDetail from "@/components/BlogDetail";
import { notFound } from "next/navigation";

// Update the props interface to handle async params
interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    notFound();
  }

  return <BlogDetail post={post} />;
};

export default BlogDetailPage;
