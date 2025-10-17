"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { containerVariants, itemVariants } from "@/app/data/motion-variants";

export const ContactHero = () => {
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
              <Sparkles size={16} />
              <span className="font-medium text-sm">Contact Us</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight"
            style={{ color: "hsl(140, 8%, 15%)" }}
            variants={itemVariants}
          >
            Get In{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: "hsl(140, 5%, 45%)" }}
            variants={itemVariants}
          >
            Ready to explore investment opportunities or have questions about
            our services? We&apos;re here to help you take the next step toward
            sustainable growth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
