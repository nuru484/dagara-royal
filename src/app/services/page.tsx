// src/app/services/page.tsx
"use client";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Award,
  Target,
  Sparkles,
  Download,
  Calendar,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  containerVariants,
  itemVariants,
  cardVariants,
  iconVariants,
  stepVariants,
} from "../data/motion-variants";
import {
  benefits,
  investmentProcess,
  investmentCriteria,
} from "../data/services";
import { services } from "../data/services";

const ServicesPage = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const handleServiceHoverStart = (index: number) => {
    setHoveredService(index);
  };

  const handleServiceHoverEnd = () => {
    setHoveredService(null);
  };

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
                <span className="font-medium text-sm">Investment Services</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Our Investment{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Services
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              Comprehensive investment solutions across agriculture, real
              estate, and emerging sectors designed to create sustainable wealth
              and drive economic growth in Ghana.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* All Services Section */}
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
                  Complete Service Portfolio
                </span>
              </div>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              All Investment{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Services
              </span>
            </motion.h2>

            <motion.p
              className="text-xl leading-relaxed"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              Explore our complete range of investment opportunities designed to
              maximize returns while contributing to sustainable development
              across Ghana.
            </motion.p>
          </motion.div>

          {/* All Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((service, index) => (
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
        </div>
      </section>

      {/* Why Choose Us */}
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
                <Award size={16} />
                <span className="font-medium text-sm">Why Choose Us</span>
              </div>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Why Partner{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                With Us
              </span>
            </motion.h2>

            <motion.p
              className="text-xl"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              Our track record, expertise, and commitment to excellence set us
              apart in the investment landscape.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredBenefit(index)}
                onHoverEnd={() => setHoveredBenefit(null)}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group text-center h-full">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: benefit.gradient }}
                  />
                  <CardContent className="p-8 relative h-full flex flex-col justify-center">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: benefit.gradient,
                        color: "hsl(0, 0%, 98%)",
                      }}
                      variants={iconVariants}
                      initial="rest"
                      animate={hoveredBenefit === index ? "hover" : "rest"}
                    >
                      <benefit.icon size={24} />
                    </motion.div>
                    <h3
                      className="font-serif text-xl font-bold mb-4"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ color: "hsl(140, 5%, 45%)" }}
                    >
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Process */}
      <section
        className="relative py-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(140, 10%, 96%) 0%, hsl(0, 0%, 100%) 100%)",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
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
                <Target size={16} />
                <span className="font-medium text-sm">Investment Process</span>
              </div>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Our Investment{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Process
              </span>
            </motion.h2>

            <motion.p
              className="text-xl"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              A systematic approach to identifying, evaluating, and managing
              investment opportunities for optimal returns.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {investmentProcess.map((process, index) => (
              <motion.div
                key={process.step}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredProcess(index)}
                onHoverEnd={() => setHoveredProcess(null)}
              >
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full">
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ backgroundColor: process.color }}
                  />
                  <CardContent className="p-8 relative">
                    <div className="flex items-center mb-6">
                      <motion.div
                        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                        style={{
                          backgroundColor: process.color,
                          color: "hsl(0, 0%, 98%)",
                        }}
                        variants={stepVariants}
                        initial="rest"
                        animate={hoveredProcess === index ? "hover" : "rest"}
                      >
                        <span className="text-white font-bold text-sm">
                          {process.step}
                        </span>
                      </motion.div>
                      <h3
                        className="font-serif text-xl font-bold"
                        style={{ color: "hsl(140, 8%, 15%)" }}
                      >
                        {process.title}
                      </h3>
                    </div>
                    <p
                      className="leading-relaxed"
                      style={{ color: "hsl(140, 5%, 45%)" }}
                    >
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section
        className="relative py-24"
        style={{ backgroundColor: "hsl(140, 10%, 96%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
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
                <CheckCircle size={16} />
                <span className="font-medium text-sm">Investment Criteria</span>
              </motion.div>

              <motion.h2
                className="font-serif text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "hsl(140, 8%, 15%)" }}
                variants={itemVariants}
              >
                Investment{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Criteria
                </span>
              </motion.h2>

              <motion.p
                className="text-xl leading-relaxed"
                style={{ color: "hsl(140, 5%, 45%)" }}
                variants={itemVariants}
              >
                We focus on opportunities that align with our strategic vision
                and meet our rigorous investment standards for sustainable
                growth.
              </motion.p>

              <motion.div className="space-y-4" variants={itemVariants}>
                {investmentCriteria.map((criteria, index) => (
                  <motion.div
                    key={criteria}
                    className="flex items-start space-x-3 group cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: "hsl(142, 76%, 36%)",
                        color: "hsl(0, 0%, 98%)",
                      }}
                    >
                      <CheckCircle size={14} />
                    </div>
                    <span
                      className="text-lg transition-colors duration-200"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      {criteria}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
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

                <CardContent className="p-12 relative z-10">
                  <motion.h3
                    className="font-serif text-3xl font-bold mb-6"
                    style={{ color: "hsl(0, 0%, 98%)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Ready to Explore Opportunities?
                  </motion.h3>

                  <motion.p
                    className="text-lg mb-8 leading-relaxed"
                    style={{ color: "hsla(0, 0%, 98%, 0.9)" }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Contact us to discuss how our investment services can help
                    you achieve your financial goals and contribute to
                    Ghana&apos;s growth.
                  </motion.p>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        size="lg"
                        className="w-full px-6 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        style={{
                          backgroundColor: "hsl(45, 85%, 65%)",
                          color: "hsl(140, 8%, 15%)",
                        }}
                      >
                        <Calendar className="mr-2" size={20} />
                        Schedule Consultation
                        <ArrowRight className="ml-2" size={20} />
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full px-6 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                        style={{
                          borderColor: "hsla(0, 0%, 98%, 0.3)",
                          color: "hsl(0, 0%, 98%)",
                          backgroundColor: "transparent",
                        }}
                        onMouseEnter={(
                          e: React.MouseEvent<HTMLButtonElement>
                        ) => {
                          const target = e.currentTarget;
                          target.style.backgroundColor =
                            "hsla(0, 0%, 98%, 0.1)";
                          target.style.borderColor = "hsl(0, 0%, 98%)";
                        }}
                        onMouseLeave={(
                          e: React.MouseEvent<HTMLButtonElement>
                        ) => {
                          const target = e.currentTarget;
                          target.style.backgroundColor = "transparent";
                          target.style.borderColor = "hsla(0, 0%, 98%, 0.3)";
                        }}
                      >
                        <Download className="mr-2" size={20} />
                        Download Brochure
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
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

export default ServicesPage;
