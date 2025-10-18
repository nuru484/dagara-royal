"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { iconVariants, cardVariants } from "@/app/data/motion-variants";

interface ContactInfoCardProps {
  title: string;
  details: string[];
  icon: LucideIcon;
  gradient: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const ContactInfoCard = ({
  title,
  details,
  icon: Icon,
  gradient,
  isHovered,
  onHover,
  onLeave,
}: ContactInfoCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Card
        style={{ willChange: "transform" }}
        className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white"
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
          style={{ background: gradient }}
        />
        <CardContent className="p-6 relative">
          <div className="flex items-start space-x-4">
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{
                background: gradient,
                color: "hsl(0, 0%, 98%)",
              }}
              variants={iconVariants}
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
            >
              <Icon size={24} />
            </motion.div>
            <div>
              <h3
                className="font-semibold mb-2"
                style={{ color: "hsl(140, 8%, 15%)" }}
              >
                {title}
              </h3>
              <div className="space-y-1">
                {details.map((detail, detailIndex) => (
                  <p
                    key={detailIndex}
                    className="text-sm"
                    style={{ color: "hsl(140, 5%, 45%)" }}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
