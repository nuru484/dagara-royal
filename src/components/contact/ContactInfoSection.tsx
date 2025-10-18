"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactInfoCard } from "./ContactInfoCard";
import { containerVariants, itemVariants } from "@/app/data/motion-variants";
import { contactInfo } from "@/app/data/contact";

export const ContactInfoSection = () => {
  const [hoveredInfo, setHoveredInfo] = useState<number | null>(null);

  return (
    <section
      className="relative py-24"
      style={{ backgroundColor: "hsl(140, 10%, 96%)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-12" variants={itemVariants}>
            <h2
              className="font-serif text-4xl md:text-5xl font-bold mb-6"
              style={{ color: "hsl(140, 8%, 15%)" }}
            >
              Contact{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Information
              </span>
            </h2>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "hsl(140, 5%, 45%)" }}
            >
              Reach out to us through any of these channels. We&apos;re
              committed to providing prompt and helpful responses to all
              inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <ContactInfoCard
                key={info.title}
                {...info}
                isHovered={hoveredInfo === index}
                onHover={() => setHoveredInfo(index)}
                onLeave={() => setHoveredInfo(null)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
