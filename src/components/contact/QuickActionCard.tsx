"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { iconVariants, cardVariants } from "@/app/data/motion-variants";

interface QuickActionCardProps {
  title: string;
  description: string;
  action: string;
  icon: LucideIcon;
  gradient: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const QuickActionCard = ({
  title,
  description,
  action,
  icon: Icon,
  gradient,
  isHovered,
  onHover,
  onLeave,
}: QuickActionCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Card
        style={{ willChange: "transform" }}
        className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group text-center h-full bg-white"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
          style={{ background: gradient }}
        />
        <CardContent className="p-8 relative">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{
              background: gradient,
              color: "hsl(0, 0%, 98%)",
            }}
            variants={iconVariants}
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
          >
            <Icon size={32} />
          </motion.div>
          <h3
            className="font-serif text-xl font-bold mb-3"
            style={{ color: "hsl(140, 8%, 15%)" }}
          >
            {title}
          </h3>
          <p
            className="leading-relaxed mb-6"
            style={{ color: "hsl(140, 5%, 45%)" }}
          >
            {description}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              className="w-full shadow-lg"
              style={{
                backgroundColor: "hsl(140, 60%, 20%)",
                color: "hsl(0, 0%, 98%)",
                border: "none",
              }}
            >
              {action}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
