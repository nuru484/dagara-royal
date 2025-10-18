"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { iconVariants, cardVariants } from "@/app/data/motion-variants";

interface OfficeLocationCardProps {
  name: string;
  type: string;
  address: string;
  phone: string;
  gradient: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export const OfficeLocationCard = ({
  name,
  type,
  address,
  phone,
  gradient,
  isHovered,
  onHover,
  onLeave,
}: OfficeLocationCardProps) => {
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
            <MapPin size={32} />
          </motion.div>
          <h3
            className="font-serif text-xl font-bold mb-2"
            style={{ color: "hsl(140, 8%, 15%)" }}
          >
            {name}
          </h3>
          <p
            className="font-medium mb-4"
            style={{ color: "hsl(142, 76%, 36%)" }}
          >
            {type}
          </p>
          <p className="mb-2" style={{ color: "hsl(140, 5%, 45%)" }}>
            {address}
          </p>
          <p className="mb-6" style={{ color: "hsl(140, 5%, 45%)" }}>
            {phone}
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="sm"
              className="shadow-lg"
              style={{
                backgroundColor: "hsl(140, 60%, 20%)",
                color: "hsl(0, 0%, 98%)",
                border: "none",
              }}
            >
              Get Directions
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
