"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      y: -8,
      scale: 1.01,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const blogPosts = [
    {
      id: 1,
      title:
        "The Future of Agricultural Investment in Ghana: Trends and Opportunities",
      excerpt:
        "Explore the emerging trends in Ghana's agricultural sector and discover why smart investors are turning their attention to sustainable farming initiatives.",
      author: "Dr. Emmanuel Boateng",
      date: "December 15, 2024",
      category: "Agriculture",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Student Housing: A Growing Investment Opportunity in Accra",
      excerpt:
        "With Ghana's university enrollment increasing by 40% over the past decade, student accommodation presents a lucrative investment opportunity.",
      author: "Nana Ama Osei",
      date: "December 10, 2024",
      category: "Real Estate",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "Sustainable Poultry Farming: Technology Meets Tradition",
      excerpt:
        "How modern technology is revolutionizing traditional poultry farming methods in Ghana, creating more efficient and profitable operations.",
      author: "Samuel Adjei",
      date: "December 8, 2024",
      category: "Poultry",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "Market Analysis: Ghana's Economic Growth and Investment Climate",
      excerpt:
        "A comprehensive analysis of Ghana's current economic indicators and what they mean for potential investors in the agricultural and real estate sectors.",
      author: "Akosua Mensah",
      date: "December 5, 2024",
      category: "Investment",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "Building Partnerships: Working with Local Communities",
      excerpt:
        "Our approach to building sustainable partnerships with local communities and farmers to create mutually beneficial investment opportunities.",
      author: "Kwame Nkrumah Asante",
      date: "December 1, 2024",
      category: "Community",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Digital Innovation in Agriculture: Smart Farming Solutions",
      excerpt:
        "How digital technologies like IoT sensors, drones, and data analytics are transforming agricultural productivity in Ghana.",
      author: "Dr. Emmanuel Boateng",
      date: "November 28, 2024",
      category: "Technology",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop",
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Agriculture",
    "Real Estate",
    "Poultry",
    "Investment",
    "Community",
    "Technology",
  ];

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
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <Card className="overflow-hidden border-0 shadow-2xl group">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                      }}
                    />
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          variants={imageVariants}
                          initial="rest"
                          whileHover="hover"
                        />
                      </div>
                      <CardContent className="p-12 flex flex-col justify-center relative">
                        <motion.div
                          className="w-fit mb-4 px-3 py-1 rounded-full text-sm font-medium"
                          style={{
                            backgroundColor: getCategoryColor(post.category).bg,
                            color: getCategoryColor(post.category).text,
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {post.category}
                        </motion.div>
                        <h3
                          className="font-serif text-3xl font-bold mb-4 leading-tight"
                          style={{ color: "hsl(140, 8%, 15%)" }}
                        >
                          {post.title}
                        </h3>
                        <p
                          className="text-lg leading-relaxed mb-6"
                          style={{ color: "hsl(140, 5%, 45%)" }}
                        >
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm">
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
                              <span style={{ color: "hsl(140, 5%, 45%)" }}>
                                {post.date}
                              </span>
                            </div>
                            <span style={{ color: "hsl(140, 5%, 45%)" }}>
                              {post.readTime}
                            </span>
                          </div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              className="group/btn shadow-lg"
                              style={{
                                backgroundColor: "hsl(140, 60%, 20%)",
                                color: "hsl(0, 0%, 98%)",
                                border: "none",
                              }}
                            >
                              Read More
                              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Button>
                          </motion.div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

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
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  variants={cardVariants}
                  whileHover="hover"
                  onMouseEnter={() => setHoveredPost(index)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group h-full bg-white">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                      }}
                    />

                    <div className="aspect-[4/3] overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                        variants={imageVariants}
                        initial="rest"
                        animate={hoveredPost === index ? "hover" : "rest"}
                      />
                    </div>

                    <CardContent className="p-6 relative">
                      <motion.div
                        className="w-fit mb-3 px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: getCategoryColor(post.category).bg,
                          color: getCategoryColor(post.category).text,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {post.category}
                      </motion.div>

                      <h3
                        className="font-serif text-xl font-bold mb-3 leading-tight line-clamp-2"
                        style={{ color: "hsl(140, 8%, 15%)" }}
                      >
                        {post.title}
                      </h3>

                      <p
                        className="leading-relaxed mb-4 line-clamp-3"
                        style={{ color: "hsl(140, 5%, 45%)" }}
                      >
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm mb-4">
                        <div className="flex items-center space-x-2">
                          <User
                            className="w-4 h-4"
                            style={{ color: "hsl(140, 5%, 45%)" }}
                          />
                          <span style={{ color: "hsl(140, 5%, 45%)" }}>
                            {post.author}
                          </span>
                        </div>
                        <span style={{ color: "hsl(140, 5%, 45%)" }}>
                          {post.readTime}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-2 text-sm">
                          <Calendar
                            className="w-4 h-4"
                            style={{ color: "hsl(140, 5%, 45%)" }}
                          />
                          <span style={{ color: "hsl(140, 5%, 45%)" }}>
                            {post.date}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group/btn p-0 h-auto font-medium text-sm"
                            style={{ color: "hsl(140, 60%, 20%)" }}
                          >
                            Read More
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
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

      {/* Newsletter Signup */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <Card className="border-0 shadow-2xl overflow-hidden relative">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%) 0%, hsl(140, 60%, 20%) 50%, hsl(140, 70%, 15%) 100%)",
                }}
              />
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45, 85%, 65%) 2px, transparent 2px), 
                                   radial-gradient(circle at 75% 75%, hsl(25, 60%, 55%) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px, 30px 30px",
                  }}
                />
              </div>

              <CardContent className="p-16 text-center relative z-10">
                <motion.h2
                  className="font-serif text-4xl md:text-5xl font-bold mb-6"
                  style={{ color: "hsl(0, 0%, 98%)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Stay Informed
                </motion.h2>

                <motion.p
                  className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
                  style={{ color: "hsla(0, 0%, 98%, 0.9)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Subscribe to our newsletter and never miss important updates
                  about investment opportunities, market insights, and company
                  news.
                </motion.p>

                <motion.div
                  className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 border-0 shadow-lg"
                    style={{
                      backgroundColor: "hsla(0, 0%, 98%, 0.15)",
                      color: "hsl(0, 0%, 98%)",
                      borderColor: "hsla(0, 0%, 98%, 0.3)",
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="px-8 h-12 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{
                        backgroundColor: "hsl(45, 85%, 65%)",
                        color: "hsl(140, 8%, 15%)",
                        border: "none",
                      }}
                    >
                      Subscribe
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
