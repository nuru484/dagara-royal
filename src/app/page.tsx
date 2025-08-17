"use client";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  numberVariants,
  quoteVariants,
  containerVariants,
  itemVariants,
  cardVariants,
} from "./data/motion-variants";
import { testimonials } from "./data/testimonials";
import { achievements } from "./data/achievements";
import { services } from "./data/services";
import CTA from "@/components/CTA";

const features = [
  "Agricultural Innovation",
  "Sustainable Practices",
  "Community Development",
  "Strategic Partnerships",
];

const Index = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(
    null
  );
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  );
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceHoverStart = (index: number) => {
    setHoveredService(index);
  };

  const handleServiceHoverEnd = () => {
    setHoveredService(null);
  };

  // Show only first 3 services
  const featuredServices = services.slice(0, 3);

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

      <Hero />

      {/* Company Overview */}
      <section
        className="relative py-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(140, 10%, 98%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45, 85%, 65%) 0%, hsl(25, 60%, 55%) 100%)",
                  color: "hsl(140, 8%, 15%)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles size={16} />
                <span className="font-medium text-sm">
                  Excellence Since 2009
                </span>
              </motion.div>

              <motion.h2
                className="font-serif text-4xl md:text-6xl font-bold leading-tight"
                style={{ color: "hsl(140, 8%, 15%)" }}
                variants={itemVariants}
              >
                Building Ghana&apos;s{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Economic Future
                </span>
              </motion.h2>

              <motion.p
                className="text-xl leading-relaxed"
                style={{ color: "hsl(140, 5%, 45%)" }}
                variants={itemVariants}
              >
                For over 15 years, Dagara Royal Company has been at the
                forefront of strategic investments across agriculture, real
                estate, and emerging sectors. We combine local expertise with
                international best practices to deliver sustainable growth and
                prosperity.
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={itemVariants}
              >
                {features.map((item, index) => (
                  <motion.div
                    key={item + index}
                    className="flex items-center space-x-3 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        backgroundColor: "hsl(142, 76%, 36%)",
                        color: "hsl(0, 0%, 98%)",
                      }}
                    >
                      <CheckCircle size={14} />
                    </div>
                    <span
                      className="font-medium transition-colors duration-200"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(140, 60%, 20%) 0%, hsl(25, 60%, 55%) 100%)",
                      color: "hsl(0, 0%, 98%)",
                      border: "none",
                    }}
                  >
                    Learn Our Story
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - Achievements Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={itemVariants}
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  variants={cardVariants}
                  whileHover="hover"
                  onHoverStart={() => setHoveredAchievement(index)}
                  onHoverEnd={() => setHoveredAchievement(null)}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                      style={{ background: achievement.color }}
                    />
                    <CardContent className="p-8 relative">
                      <motion.div
                        className="text-4xl md:text-5xl font-bold font-serif mb-3"
                        style={{ color: achievement.color }}
                        variants={numberVariants}
                        initial="rest"
                        animate={
                          hoveredAchievement === index ? "hover" : "rest"
                        }
                      >
                        {achievement.number}
                      </motion.div>
                      <div
                        className="font-medium text-base"
                        style={{ color: "hsl(140, 5%, 45%)" }}
                      >
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section
        className="relative py-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(140, 10%, 96%) 0%, hsl(0, 0%, 100%) 100%)",
        }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, hsl(45, 85%, 65%) 1.5px, transparent 1.5px), 
                             radial-gradient(circle at 80% 70%, hsl(25, 60%, 55%) 1px, transparent 1px)`,
              backgroundSize: "80px 80px, 60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-4xl mx-auto mb-20"
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
                <span className="font-medium text-sm">
                  Our Investment Sectors
                </span>
              </div>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Diversified Investment{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Opportunities
              </span>
            </motion.h2>

            <motion.p
              className="text-xl leading-relaxed"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              We operate across multiple high-growth sectors in Ghana, providing
              diversified investment opportunities that drive sustainable
              economic development and create lasting value for our partners.
            </motion.p>
          </motion.div>

          {/* Featured Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                hoveredService={hoveredService}
                onHoverStart={handleServiceHoverStart}
                onHoverEnd={handleServiceHoverEnd}
              />
            ))}
          </motion.div>

          {/* See All Services Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%) 0%, hsl(25, 60%, 55%) 100%)",
                  color: "hsl(0, 0%, 98%)",
                  border: "none",
                }}
              >
                See All Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="relative py-24"
        style={{ backgroundColor: "hsl(140, 10%, 96%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-16"
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
                <Star size={16} />
                <span className="font-medium text-sm">Client Testimonials</span>
              </div>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              What Our
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Partners Say
              </span>
            </motion.h2>

            <motion.p
              className="text-xl"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              Hear from the people who have experienced our commitment to
              excellence firsthand.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredTestimonial(index)}
                onHoverEnd={() => setHoveredTestimonial(null)}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                    }}
                  />
                  <CardContent className="p-8 relative h-full flex flex-col">
                    <motion.div
                      className="w-12 h-12 rounded-full mb-6 flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(45, 85%, 65%) 0%, hsl(25, 60%, 55%) 100%)",
                        color: "hsl(140, 8%, 15%)",
                      }}
                      variants={quoteVariants}
                      initial="rest"
                      animate={hoveredTestimonial === index ? "hover" : "rest"}
                    >
                      <Quote size={20} />
                    </motion.div>

                    <p
                      className="leading-relaxed mb-6 flex-grow"
                      style={{ color: "hsl(140, 5%, 45%)" }}
                    >
                      {testimonial.content}
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                          >
                            <Star
                              className="w-5 h-5"
                              style={{
                                fill: "hsl(45, 85%, 65%)",
                                color: "hsl(45, 85%, 65%)",
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>

                      <div>
                        <div
                          className="font-semibold text-lg"
                          style={{ color: "hsl(140, 8%, 15%)" }}
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-sm"
                          style={{ color: "hsl(140, 5%, 45%)" }}
                        >
                          {testimonial.position}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
          >
            <CTA />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
