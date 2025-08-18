// src/components/blog/BlogHero.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const BlogHero = () => {
  return (
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
              <span className="font-medium text-sm">Insights & Knowledge</span>
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
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
  );
};

export default BlogHero;
