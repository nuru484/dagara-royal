"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";

export interface IBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured: boolean;
  content?: Document;
}

interface BlogDetailProps {
  post: IBlogPost;
}

const BlogDetail = ({ post }: BlogDetailProps) => {
  const router = useRouter();

  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      Agriculture: { bg: "hsl(142, 76%, 36%)", text: "hsl(0, 0%, 98%)" },
      "Real Estate": { bg: "hsl(210, 70%, 50%)", text: "hsl(0, 0%, 98%)" },
      Poultry: { bg: "hsl(25, 60%, 55%)", text: "hsl(0, 0%, 98%)" },
      Investment: { bg: "hsl(280, 70%, 50%)", text: "hsl(0, 0%, 98%)" },
      Community: { bg: "hsl(340, 70%, 50%)", text: "hsl(0, 0%, 98%)" },
      Technology: { bg: "hsl(240, 70%, 50%)", text: "hsl(0, 0%, 98%)" },
    };
    return (
      colors[category] || { bg: "hsl(140, 5%, 45%)", text: "hsl(0, 0%, 98%)" }
    );
  };

  const handleBack = () => {
    router.push("/blog");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Header Section */}
      <section
        className="relative pt-32 pb-16"
        style={{
          background:
            "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(140, 10%, 98%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <motion.div
              className="mb-8"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={handleBack}
                variant="ghost"
                className="group/btn p-0 h-auto font-medium"
                style={{ color: "hsl(140, 60%, 20%)" }}
              >
                <ArrowLeft className="mr-2 w-4 h-4 group-hover/btn:-translate-x-1 transition-transform duration-200" />
                Back to Blog
              </Button>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              className="w-fit mb-6 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: getCategoryColor(post.category).bg,
                color: getCategoryColor(post.category).text,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {post.category}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "hsl(140, 8%, 15%)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {post.title}
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <User
                  className="w-4 h-4"
                  style={{ color: "hsl(140, 5%, 45%)" }}
                />
                <span style={{ color: "hsl(140, 5%, 45%)" }}>
                  {post.author}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar
                  className="w-4 h-4"
                  style={{ color: "hsl(140, 5%, 45%)" }}
                />
                <span style={{ color: "hsl(140, 5%, 45%)" }}>{post.date}</span>
              </div>
              <span style={{ color: "hsl(140, 5%, 45%)" }}>
                {post.readTime}
              </span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleShare}
                  variant="ghost"
                  size="sm"
                  className="p-2 h-auto"
                  style={{ color: "hsl(140, 60%, 20%)" }}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              className="aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                width={800}
                height={450}
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section
        className="relative py-16"
        style={{
          background:
            "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(140, 10%, 98%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {post.content ? (
                    documentToReactComponents(post.content, {
                      renderNode: {
                        [BLOCKS.HEADING_1]: (node, children) => (
                          <h1
                            className="font-serif text-3xl md:text-4xl font-bold mb-6 mt-8 first:mt-0"
                            style={{ color: "hsl(140, 8%, 15%)" }}
                          >
                            {children}
                          </h1>
                        ),
                        [BLOCKS.HEADING_2]: (node, children) => (
                          <h2
                            className="font-serif text-2xl md:text-3xl font-bold mb-4 mt-8"
                            style={{ color: "hsl(140, 8%, 15%)" }}
                          >
                            {children}
                          </h2>
                        ),
                        [BLOCKS.HEADING_3]: (node, children) => (
                          <h3
                            className="font-serif text-xl md:text-2xl font-bold mb-3 mt-6"
                            style={{ color: "hsl(140, 8%, 15%)" }}
                          >
                            {children}
                          </h3>
                        ),
                        [BLOCKS.PARAGRAPH]: (node, children) => (
                          <p
                            className="text-lg leading-relaxed mb-6"
                            style={{ color: "hsl(140, 5%, 35%)" }}
                          >
                            {children}
                          </p>
                        ),
                        [BLOCKS.UL_LIST]: (node, children) => (
                          <ul
                            className="list-disc pl-6 mb-6 space-y-2"
                            style={{ color: "hsl(140, 5%, 35%)" }}
                          >
                            {children}
                          </ul>
                        ),
                        [BLOCKS.LIST_ITEM]: (node, children) => (
                          <li className="text-lg leading-relaxed">
                            {children}
                          </li>
                        ),
                        [INLINES.HYPERLINK]: (node, children) => (
                          <a
                            href={node.data.uri}
                            className="text-blue-600 underline"
                          >
                            {children}
                          </a>
                        ),
                      },
                    })
                  ) : (
                    <p>Content not available.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
