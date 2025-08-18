// src/components/blog/BlogGrid.tsx
"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { containerVariants, itemVariants } from "@/app/data/motion-variants";
import { IBlogPost } from "./BlogDetail";

interface BlogGridProps {
  posts: IBlogPost[];
}

const BlogGrid = ({ posts }: BlogGridProps) => {
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const regularPosts = posts.filter((post) => !post.featured);

  return (
    <section
      className="relative py-24"
      style={{ backgroundColor: "hsl(140, 10%, 96%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "hsl(140, 8%, 15%)" }}
            variants={itemVariants}
          >
            Latest{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Articles
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {regularPosts.map((post, index) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogCard
                post={post}
                index={index}
                hoveredPost={hoveredPost}
                onMouseEnter={() => setHoveredPost(index)}
                onMouseLeave={() => setHoveredPost(null)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              size="lg"
              className="px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                backgroundColor: "hsl(140, 60%, 20%)",
                color: "hsl(0, 0%, 98%)",
                border: "none",
              }}
            >
              Load More Articles
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;
