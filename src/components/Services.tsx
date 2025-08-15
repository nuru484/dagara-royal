import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { useState, useRef } from "react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
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
      scale: 1.01,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=240&fit=crop&crop=center",
      title: "Agricultural Investments",
      description:
        "Large-scale farming operations including maize, corn, millet, soya beans, and groundnuts using sustainable farming practices for maximum yield and environmental stewardship.",
      features: [
        "Crop Diversification Programs",
        "Modern Precision Equipment",
        "Sustainable Practices",
        "Direct Market Access",
      ],
      gradient:
        "linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(140, 60%, 20%) 100%)",
      accentColor: "hsl(142, 76%, 36%)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=400&h=240&fit=crop&crop=center",
      title: "Poultry Farming",
      description:
        "Commercial poultry operations focused on egg production and broiler farming with state-of-the-art facilities and efficient management systems.",
      features: [
        "Climate-Controlled Facilities",
        "Advanced Health Management",
        "Optimized Feed Systems",
        "Comprehensive Distribution",
      ],
      gradient:
        "linear-gradient(135deg, hsl(25, 60%, 55%) 0%, hsl(20, 70%, 45%) 100%)",
      accentColor: "hsl(25, 60%, 55%)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=240&fit=crop&crop=center",
      title: "Real Estate Development",
      description:
        "Strategic property investments and development projects focusing on student accommodation, commercial properties, and residential developments.",
      features: [
        "Premium Student Housing",
        "Commercial Complexes",
        "Full Property Management",
        "Prime Strategic Locations",
      ],
      gradient:
        "linear-gradient(135deg, hsl(210, 70%, 50%) 0%, hsl(220, 60%, 45%) 100%)",
      accentColor: "hsl(210, 70%, 50%)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=240&fit=crop&crop=center",
      title: "Educational Infrastructure",
      description:
        "Development of world-class educational facilities and student housing near major universities and educational institutions across Ghana.",
      features: [
        "Modern Hostel Construction",
        "Educational Facility Development",
        "Comprehensive Student Services",
        "Strategic Campus Partnerships",
      ],
      gradient:
        "linear-gradient(135deg, hsl(280, 70%, 50%) 0%, hsl(270, 60%, 45%) 100%)",
      accentColor: "hsl(280, 70%, 50%)",
    },
    {
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=240&fit=crop&crop=center",
      title: "Investment Consulting",
      description:
        "Strategic investment advisory services helping individuals and organizations build diversified portfolios and achieve sustainable growth.",
      features: [
        "Comprehensive Portfolio Analysis",
        "Strategic Risk Assessment",
        "Market Intelligence Research",
        "Customized Investment Strategy",
      ],
      gradient:
        "linear-gradient(135deg, hsl(240, 70%, 50%) 0%, hsl(250, 60%, 45%) 100%)",
      accentColor: "hsl(240, 70%, 50%)",
    },
  ];

  const handleHoverStart = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredService(index);
  };

  const handleHoverEnd = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredService(null);
    }, 100);
  };

  return (
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
            diversified investment opportunities that drive sustainable economic
            development and create lasting value for our partners.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover="hover"
              onMouseEnter={() => handleHoverStart(index)}
              onMouseLeave={handleHoverEnd}
            >
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full bg-white">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500"
                  style={{ background: service.gradient }}
                />

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    initial="rest"
                    animate={hoveredService === index ? "hover" : "rest"}
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: service.gradient }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <CardHeader className="pb-4 pt-6 relative">
                  <CardTitle
                    className="font-serif text-xl font-bold mb-3 leading-tight"
                    style={{ color: "hsl(140, 8%, 15%)" }}
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6 relative pb-8">
                  <p
                    className="leading-relaxed text-sm"
                    style={{ color: "hsl(140, 5%, 45%)" }}
                  >
                    {service.description}
                  </p>

                  <div className="space-y-2.5">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-3 group/feature cursor-pointer"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: featureIndex * 0.1,
                          duration: 0.4,
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200"
                          style={{
                            backgroundColor: service.accentColor,
                            color: "hsl(0, 0%, 98%)",
                          }}
                        >
                          <CheckCircle size={10} />
                        </div>
                        <span
                          className="font-medium text-sm transition-colors duration-200"
                          style={{ color: "hsl(140, 8%, 15%)" }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="pt-4 border-t border-gray-100"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-medium text-sm transition-all duration-200 group/btn"
                      style={{ color: service.accentColor }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <Card className="border-0 shadow-2xl overflow-hidden relative">
            {/* Decorative Border Line */}
            <div className="absolute inset-0 p-1">
              <div
                className="absolute top-0 left-1/4 w-1/2 h-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, hsl(45, 85%, 65%) 50%, transparent 100%)",
                }}
              />
              <div
                className="absolute bottom-0 left-1/3 w-1/3 h-0.5 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, hsl(25, 60%, 55%) 50%, transparent 100%)",
                }}
              />
            </div>

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
                  backgroundSize: "60px 60px, 40px 40px",
                }}
              />
            </div>

            <CardContent className="p-16 text-center relative z-10">
              <motion.h3
                className="font-serif text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "hsl(0, 0%, 98%)" }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Ready to Invest in Ghana&apos;s Growth?
              </motion.h3>

              <motion.p
                className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
                style={{ color: "hsla(0, 0%, 98%, 0.9)" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Join us in building a prosperous future through strategic
                investments in agriculture, real estate, and sustainable
                business ventures that create lasting value for communities.
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
                    className="px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    style={{
                      backgroundColor: "hsl(45, 85%, 65%)",
                      color: "hsl(140, 8%, 15%)",
                    }}
                  >
                    Start Investing
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
                    className="px-10 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                    style={{
                      borderColor: "hsla(0, 0%, 98%, 0.3)",
                      color: "hsl(0, 0%, 98%)",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                      const target = e.currentTarget;
                      target.style.backgroundColor = "hsla(0, 0%, 98%, 0.1)";
                      target.style.borderColor = "hsl(0, 0%, 98%)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
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
  );
};

export default Services;
