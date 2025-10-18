"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { QuickActionCard } from "./QuickActionCard";
import { containerVariants } from "@/app/data/motion-variants";
import { quickActions } from "@/app/data/contact";

export const QuickActionsSection = () => {
  const [hoveredAction, setHoveredAction] = useState<number | null>(null);

  return (
    <section
      className="relative py-24"
      style={{
        background:
          "linear-gradient(135deg, hsl(140, 10%, 96%) 0%, hsl(0, 0%, 100%) 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {quickActions.map((action, index) => (
            <QuickActionCard
              key={action.title}
              {...action}
              isHovered={hoveredAction === index}
              onHover={() => setHoveredAction(index)}
              onLeave={() => setHoveredAction(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
