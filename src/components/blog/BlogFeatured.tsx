// src/components/blog/BlogFeatured.tsx
"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BlogCard from "./BlogCard";
import { containerVariants, itemVariants } from "@/app/data/motion-variants";
import { IBlogPost } from "./BlogDetail";

interface BlogFeaturedProps {
  posts: IBlogPost[];
}

const BlogFeatured = ({ posts }: BlogFeaturedProps) => {
  const featuredPost = posts.find((post) => post.featured);

  if (!featuredPost) return null;

  return (
    <section
      className="relative py-24"
      style={{
        background:
          "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(140, 10%, 98%) 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6"
              style={{
                background:
                  "linear-gradient(135deg, hsl(45, 85%, 65%) 0%, hsl(25, 60%, 55%) 100%)",
                color: "hsl(140, 8%, 15%)",
              }}
            >
              <Sparkles size={16} />
              <span className="font-medium text-sm">Featured Article</span>
            </div>
          </motion.div>

          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-8"
            style={{ color: "hsl(140, 8%, 15%)" }}
            variants={itemVariants}
          >
            Editor&apos;s Pick
          </motion.h2>

          <motion.div variants={itemVariants}>
            <BlogCard post={featuredPost} isFeatured={true} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogFeatured;
