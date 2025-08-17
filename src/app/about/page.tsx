"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  containerVariants,
  itemVariants,
  cardVariants,
  iconVariants,
} from "../data/motion-variants";
import { aboutUsValues } from "../data/aboutUs";

const About = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

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
                <Sparkles size={16} />
                <span className="font-medium text-sm">Our Company Story</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              About{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Story
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              From humble beginnings to becoming Ghana&apos;s premier
              diversified investment company, our journey has been driven by a
              commitment to excellence, innovation, and sustainable growth for
              all stakeholders.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="relative py-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(140, 10%, 96%) 0%, hsl(0, 0%, 100%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(140, 60%, 20%) 100%)",
                  }}
                />
                <CardContent className="p-12 relative">
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(140, 60%, 20%) 100%)",
                      color: "hsl(0, 0%, 98%)",
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Target size={32} />
                  </motion.div>
                  <h2
                    className="font-serif text-3xl font-bold mb-4"
                    style={{ color: "hsl(140, 8%, 15%)" }}
                  >
                    Our Mission
                  </h2>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "hsl(140, 5%, 45%)" }}
                  >
                    To create sustainable wealth and prosperity through
                    strategic investments in Ghana&apos;s agricultural, real
                    estate, and emerging sectors while fostering community
                    development and environmental stewardship.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants} whileHover="hover">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(25, 60%, 55%) 0%, hsl(20, 70%, 45%) 100%)",
                  }}
                />
                <CardContent className="p-12 relative">
                  <motion.div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(25, 60%, 55%) 0%, hsl(20, 70%, 45%) 100%)",
                      color: "hsl(0, 0%, 98%)",
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Eye size={32} />
                  </motion.div>
                  <h2
                    className="font-serif text-3xl font-bold mb-4"
                    style={{ color: "hsl(140, 8%, 15%)" }}
                  >
                    Our Vision
                  </h2>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "hsl(140, 5%, 45%)" }}
                  >
                    To be West Africa&apos;s leading diversified investment
                    company, recognized for innovation, sustainability, and
                    positive impact on communities while delivering exceptional
                    returns to our investors.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core aboutUsValues */}
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
            <motion.div variants={itemVariants}>
              <div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45, 85%, 65%) 0%, hsl(25, 60%, 55%) 100%)",
                  color: "hsl(140, 8%, 15%)",
                }}
              >
                <Heart size={16} />
                <span className="font-medium text-sm">Core aboutUsValues</span>
              </div>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Our Core{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                aboutUsValues
              </span>
            </motion.h2>

            <motion.p
              className="text-xl"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              The principles that guide our decisions and shape our company
              culture.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {aboutUsValues.map((value, index) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredValue(index)}
                onHoverEnd={() => setHoveredValue(null)}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group text-center h-full">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: value.gradient }}
                  />
                  <CardContent className="p-8 relative h-full flex flex-col justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: value.gradient,
                        color: "hsl(0, 0%, 98%)",
                      }}
                      variants={iconVariants}
                      initial="rest"
                      animate={hoveredValue === index ? "hover" : "rest"}
                    >
                      <value.icon size={24} />
                    </motion.div>
                    <h3
                      className="font-serif text-xl font-bold mb-4"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: "hsl(140, 5%, 45%)" }}
                    >
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership CTA */}
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
                  Meet Our Leadership Team
                </motion.h2>

                <motion.p
                  className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
                  style={{ color: "hsla(0, 0%, 98%, 0.9)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Experienced professionals with deep expertise in agriculture,
                  finance, real estate, and business development, committed to
                  driving our vision forward.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{
                        backgroundColor: "hsl(45, 85%, 65%)",
                        color: "hsl(140, 8%, 15%)",
                      }}
                    >
                      View Team Members
                      <ArrowRight className="ml-2" size={20} />
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

export default About;
