// src/components/blog/BlogCategories.tsx
"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { categories } from "@/app/data/blog";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const BlogCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
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
  );
};

export default BlogCategories;
