// src/components/blog/BlogCard.tsx
"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { cardVariants, imageVariants } from "@/app/data/motion-variants";
import { IBlogPost } from "./BlogDetail";

interface IBlogCardProps {
  post: IBlogPost;
  index?: number;
  hoveredPost?: number | null;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  isFeatured?: boolean;
}

const BlogCard = ({
  post,
  index,
  hoveredPost,
  onMouseEnter,
  onMouseLeave,
  isFeatured = false,
}: IBlogCardProps) => {
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

  const handleCardClick = () => {
    router.push(`/blog/${post.slug}`);
  };

  if (isFeatured) {
    return (
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        onClick={handleCardClick}
        className="cursor-pointer"
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
    );
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleCardClick}
      className="cursor-pointer"
    >
      <Card
        className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-500 overflow-hidden group h-full bg-white"
        style={{ willChange: "transform" }}
      >
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
              <span style={{ color: "hsl(140, 5%, 45%)" }}>{post.author}</span>
            </div>
            <span style={{ color: "hsl(140, 5%, 45%)" }}>{post.readTime}</span>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2 text-sm">
              <Calendar
                className="w-4 h-4"
                style={{ color: "hsl(140, 5%, 45%)" }}
              />
              <span style={{ color: "hsl(140, 5%, 45%)" }}>{post.date}</span>
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
  );
};

export default BlogCard;
