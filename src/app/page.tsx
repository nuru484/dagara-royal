"use client";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";

const Index = () => {
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(
    null
  );
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(
    null
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const numberVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const quoteVariants: Variants = {
    rest: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const testimonials = [
    {
      name: "Dr. Kwame Asante",
      position: "Agricultural Economist",
      company: "University of Ghana",
      content:
        "Dagara Royal Company has transformed agricultural investments in our region. Their modern farming techniques and sustainable practices have increased yields by 40%.",
      rating: 5,
    },
    {
      name: "Sarah Mensah",
      position: "Real Estate Developer",
      company: "Accra Properties Ltd",
      content:
        "Their student housing projects are exemplary. Quality construction, strategic locations, and excellent management make them a reliable investment partner.",
      rating: 5,
    },
    {
      name: "John Osei",
      position: "Poultry Farm Owner",
      company: "Golden Farms",
      content:
        "Working with Dagara Royal on our poultry expansion was seamless. Their expertise in modern farming systems helped us double our production capacity.",
      rating: 5,
    },
  ];

  const achievements = [
    {
      number: "15+",
      label: "Years of Excellence",
      color: "hsl(140, 60%, 20%)",
    },
    { number: "₵50M+", label: "Total Investments", color: "hsl(45, 85%, 65%)" },
    {
      number: "200+",
      label: "Successful Projects",
      color: "hsl(25, 60%, 55%)",
    },
    { number: "5000+", label: "Jobs Created", color: "hsl(142, 76%, 36%)" },
  ];

  const features = [
    "Agricultural Innovation",
    "Sustainable Practices",
    "Community Development",
    "Strategic Partnerships",
  ];

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

      {/* Services Preview */}
      <Services />

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
              What Our{" "}
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
                  className="font-serif text-4xl md:text-6xl font-bold mb-6"
                  style={{ color: "hsl(0, 0%, 98%)" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Ready to Grow with Ghana&apos;s Future?
                </motion.h2>

                <motion.p
                  className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
                  style={{ color: "hsla(0, 0%, 98%, 0.9)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Join us in creating sustainable wealth through strategic
                  investments in Ghana&apos;s most promising sectors.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-6 justify-center"
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
                      Explore Opportunities
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
                      className="px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                      style={{
                        borderColor: "hsla(0, 0%, 98%, 0.3)",
                        color: "hsl(0, 0%, 98%)",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = "hsla(0, 0%, 98%, 0.1)";
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
                      Schedule Consultation
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

export default Index;
