"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useState } from "react";
import { OfficeLocationCard } from "./OfficeLocationCard";
import { containerVariants, itemVariants } from "@/app/data/motion-variants";
import { officeLocations } from "@/app/data/contact";

export const OfficeLocationsSection = () => {
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);

  return (
    <section
      className="relative py-24"
      style={{
        background:
          "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(140, 10%, 98%) 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
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
              <MapPin size={16} />
              <span className="font-medium text-sm">Our Offices</span>
            </div>
          </motion.div>

          <motion.h2
            className="font-serif text-4xl md:text-6xl font-bold mb-6"
            style={{ color: "hsl(140, 8%, 15%)" }}
            variants={itemVariants}
          >
            Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Locations
            </span>
          </motion.h2>

          <motion.p
            className="text-xl"
            style={{ color: "hsl(140, 5%, 45%)" }}
            variants={itemVariants}
          >
            Find us across Ghana with offices strategically located to serve our
            clients and communities nationwide.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {officeLocations.map((office, index) => (
            <OfficeLocationCard
              key={office.name}
              {...office}
              isHovered={hoveredLocation === index}
              onHover={() => setHoveredLocation(index)}
              onLeave={() => setHoveredLocation(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
