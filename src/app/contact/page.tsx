"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  iconVariants,
  containerVariants,
  itemVariants,
  cardVariants,
} from "../data/motion-variants";
import { quickActions, contactInfo, officeLocations } from "../data/contact";
import Map from "@/components/Map";

const Contact = () => {
  const [hoveredAction, setHoveredAction] = useState<number | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
  const [hoveredInfo, setHoveredInfo] = useState<number | null>(null);

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
              our services? We&apos;re here to help you take the next step
              toward sustainable growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
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
              <motion.div
                key={action.title}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredAction(index)}
                onMouseLeave={() => setHoveredAction(null)}
              >
                <Card
                  style={{ willChange: "transform" }}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group text-center h-full bg-white"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: action.gradient }}
                  />
                  <CardContent className="p-8 relative">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: action.gradient,
                        color: "hsl(0, 0%, 98%)",
                      }}
                      variants={iconVariants}
                      initial="rest"
                      animate={hoveredAction === index ? "hover" : "rest"}
                    >
                      <action.icon size={32} />
                    </motion.div>
                    <h3
                      className="font-serif text-xl font-bold mb-3"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      {action.title}
                    </h3>
                    <p
                      className="leading-relaxed mb-6"
                      style={{ color: "hsl(140, 5%, 45%)" }}
                    >
                      {action.description}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        className="w-full shadow-lg"
                        style={{
                          backgroundColor: "hsl(140, 60%, 20%)",
                          color: "hsl(0, 0%, 98%)",
                          border: "none",
                        }}
                      >
                        {action.action}
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section
        className="relative py-24"
        style={{ backgroundColor: "hsl(140, 10%, 96%)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Contact Form */}
            <motion.div variants={cardVariants}>
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle
                    className="font-serif text-3xl font-bold"
                    style={{ color: "hsl(140, 8%, 15%)" }}
                  >
                    Send Us a Message
                  </CardTitle>
                  <p style={{ color: "hsl(140, 5%, 45%)" }}>
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        style={{ color: "hsl(140, 8%, 15%)" }}
                      >
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="border-0 shadow-sm"
                        style={{
                          backgroundColor: "hsl(140, 10%, 98%)",
                          color: "hsl(140, 8%, 15%)",
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        style={{ color: "hsl(140, 8%, 15%)" }}
                      >
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="border-0 shadow-sm"
                        style={{
                          backgroundColor: "hsl(140, 10%, 98%)",
                          color: "hsl(140, 8%, 15%)",
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border-0 shadow-sm"
                      style={{
                        backgroundColor: "hsl(140, 10%, 98%)",
                        color: "hsl(140, 8%, 15%)",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="border-0 shadow-sm"
                      style={{
                        backgroundColor: "hsl(140, 10%, 98%)",
                        color: "hsl(140, 8%, 15%)",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-0 shadow-sm"
                      style={{
                        backgroundColor: "hsl(140, 10%, 98%)",
                        color: "hsl(140, 8%, 15%)",
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="border-0 shadow-sm"
                      style={{
                        backgroundColor: "hsl(140, 10%, 98%)",
                        color: "hsl(140, 8%, 15%)",
                      }}
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      className="w-full text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      style={{
                        background:
                          "linear-gradient(135deg, hsl(140, 60%, 20%) 0%, hsl(25, 60%, 55%) 100%)",
                        color: "hsl(0, 0%, 98%)",
                        border: "none",
                      }}
                    >
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <div>
                <h2
                  className="font-serif text-4xl font-bold mb-6"
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
                  className="text-lg leading-relaxed"
                  style={{ color: "hsl(140, 5%, 45%)" }}
                >
                  Reach out to us through any of these channels. We&apos;re
                  committed to providing prompt and helpful responses to all
                  inquiries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={cardVariants}
                    whileHover="hover"
                    onMouseEnter={() => setHoveredInfo(index)}
                    onMouseLeave={() => setHoveredInfo(null)}
                  >
                    <Card
                      style={{ willChange: "transform" }}
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group bg-white"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                        style={{ background: info.gradient }}
                      />
                      <CardContent className="p-6 relative">
                        <div className="flex items-start space-x-4">
                          <motion.div
                            className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{
                              background: info.gradient,
                              color: "hsl(0, 0%, 98%)",
                            }}
                            variants={iconVariants}
                            initial="rest"
                            animate={hoveredInfo === index ? "hover" : "rest"}
                          >
                            <info.icon size={24} />
                          </motion.div>
                          <div>
                            <h3
                              className="font-semibold mb-2"
                              style={{ color: "hsl(140, 8%, 15%)" }}
                            >
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p
                                  key={detailIndex}
                                  className="text-sm"
                                  style={{ color: "hsl(140, 5%, 45%)" }}
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Office Locations */}
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
              Find us across Ghana with offices strategically located to serve
              our clients and communities nationwide.
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
              <motion.div
                key={office.name}
                variants={cardVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredLocation(index)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <Card
                  style={{ willChange: "transform" }}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group text-center h-full bg-white"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: office.gradient }}
                  />
                  <CardContent className="p-8 relative">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{
                        background: office.gradient,
                        color: "hsl(0, 0%, 98%)",
                      }}
                      variants={iconVariants}
                      initial="rest"
                      animate={hoveredLocation === index ? "hover" : "rest"}
                    >
                      <MapPin size={32} />
                    </motion.div>
                    <h3
                      className="font-serif text-xl font-bold mb-2"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      {office.name}
                    </h3>
                    <p
                      className="font-medium mb-4"
                      style={{ color: "hsl(142, 76%, 36%)" }}
                    >
                      {office.type}
                    </p>
                    <p className="mb-2" style={{ color: "hsl(140, 5%, 45%)" }}>
                      {office.address}
                    </p>
                    <p className="mb-6" style={{ color: "hsl(140, 5%, 45%)" }}>
                      {office.phone}
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <Map />
    </div>
  );
};

export default Contact;
