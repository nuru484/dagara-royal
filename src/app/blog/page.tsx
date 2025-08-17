"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Sparkles, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { containerVariants, itemVariants } from "../data/motion-variants";
import { blogPosts, categories } from "../data/blog";
import BlogCard from "@/components/BlogCard";
import CTA from "@/components/CTA";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter(
    (post) => selectedCategory === "All" || post.category === selectedCategory
  );

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45, 85%, 65%) 2px, transparent 2px), 
                           radial-gradient(circle at 75% 75%, hsl(25, 60%, 55%) 1px, transparent 1px)`,
            backgroundSize: "60px 60px, 40px 40px",
          }}
        />
      </div>

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(140, 10%, 98%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45, 85%, 65%) 0%, hsl(25, 60%, 55%) 100%)",
                  color: "hsl(140, 8%, 15%)",
                }}
              >
                <BookOpen size={16} />
                <span className="font-medium text-sm">
                  Insights & Knowledge
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Insights &{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                News
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              Stay updated with the latest trends, insights, and developments in
              Ghana&apos;s investment landscape, agriculture, and real estate
              sectors.
            </motion.p>

            {/* Search and Filter */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              <div className="relative flex-1">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: "hsl(140, 5%, 45%)" }}
                />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12 border-0 shadow-lg"
                  style={{
                    backgroundColor: "hsl(0, 0%, 98%)",
                    color: "hsl(140, 8%, 15%)",
                  }}
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="px-6 h-12 shadow-lg"
                  style={{
                    backgroundColor: "hsl(140, 60%, 20%)",
                    color: "hsl(0, 0%, 98%)",
                    border: "none",
                  }}
                >
                  <Filter className="w-5 h-5 mr-2" />
                  Filter
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section
        className="relative py-8"
        style={{ backgroundColor: "hsl(140, 10%, 96%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {categories.map((category) => (
              <motion.div
                key={category}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "shadow-lg"
                      : "shadow-sm hover:shadow-md"
                  }`}
                  style={{
                    backgroundColor:
                      selectedCategory === category
                        ? "hsl(140, 60%, 20%)"
                        : "hsl(0, 0%, 98%)",
                    color:
                      selectedCategory === category
                        ? "hsl(0, 0%, 98%)"
                        : "hsl(140, 8%, 15%)",
                    border:
                      selectedCategory === category
                        ? "none"
                        : "1px solid hsl(140, 10%, 85%)",
                  }}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
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
              <BlogCard post={featuredPost} isFeatured={true} />
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
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
              <BlogCard
                key={post.id}
                post={post}
                index={index}
                hoveredPost={hoveredPost}
                onMouseEnter={() => setHoveredPost(index)}
                onMouseLeave={() => setHoveredPost(null)}
              />
            ))}
          </motion.div>

          {/* Load More */}
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

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <CTA />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
