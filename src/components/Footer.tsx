// src/components/Footer.tsx
"use client";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import { itemVariants, containerVariants } from "@/app/data/motion-variants";
import { socialIcons, quickLinks, services } from "@/app/data/Footer";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(140, 60%, 20%) 0%, hsl(140, 60%, 20%) 50%, hsl(140, 70%, 15%) 100%)",
        color: "hsl(0, 0%, 98%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(45, 85%, 65%) 2px, transparent 2px), 
                           radial-gradient(circle at 75% 75%, hsl(25, 60%, 55%) 1px, transparent 1px)`,
            backgroundSize: "50px 50px, 30px 30px",
          }}
        ></div>
      </div>

      <div className="relative z-10">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="flex items-center space-x-3 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, hsl(45, 85%, 65%) 0%, hsl(25, 60%, 55%) 100%)",
                  }}
                >
                  <span
                    className="font-bold text-lg font-serif"
                    style={{ color: "hsl(140, 8%, 15%)" }}
                  >
                    DR
                  </span>
                </div>
                <div className="flex flex-col">
                  <span
                    className="font-serif text-xl font-bold leading-tight"
                    style={{ color: "hsl(0, 0%, 98%)" }}
                  >
                    Dagara Royal
                  </span>
                  <span
                    className="font-sans text-sm -mt-1"
                    style={{ color: "hsla(0, 0%, 98%, 0.8)" }}
                  >
                    Company LTD
                  </span>
                </div>
              </div>

              <p
                style={{ color: "hsla(0, 0%, 98%, 0.9)" }}
                className="leading-relaxed"
              >
                Leading diversified investment company in Ghana, specializing in
                agriculture, poultry farming, student real estate, and
                sustainable growth investments.
              </p>

              <div className="flex space-x-3">
                {socialIcons.map((social) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="transition-all duration-300 rounded-lg"
                      style={{
                        borderColor: "hsla(0, 0%, 98%, 0.3)",
                        color: "hsl(0, 0%, 98%)",
                        backgroundColor: "transparent",
                      }}
                      onMouseEnter={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = "hsl(45, 85%, 65%)";
                        target.style.borderColor = "hsl(45, 85%, 65%)";
                        target.style.color = "hsl(140, 8%, 15%)";
                      }}
                      onMouseLeave={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = "transparent";
                        target.style.borderColor = "hsla(0, 0%, 98%, 0.3)";
                        target.style.color = "hsl(0, 0%, 98%)";
                      }}
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3
                className="font-serif text-xl font-semibold"
                style={{ color: "hsl(45, 85%, 65%)" }}
              >
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((item) => (
                  <motion.li
                    key={item.href}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <Link
                      href={item.href}
                      className="transition-colors duration-200 flex items-center group"
                      style={{ color: "hsla(0, 0%, 98%, 0.8)" }}
                      onMouseEnter={(
                        e: React.MouseEvent<HTMLAnchorElement>
                      ) => {
                        const target = e.currentTarget;
                        target.style.color = "hsl(45, 85%, 65%)";
                      }}
                      onMouseLeave={(
                        e: React.MouseEvent<HTMLAnchorElement>
                      ) => {
                        const target = e.currentTarget;
                        target.style.color = "hsla(0, 0%, 98%, 0.8)";
                      }}
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      />
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3
                className="font-serif text-xl font-semibold"
                style={{ color: "hsl(45, 85%, 65%)" }}
              >
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <motion.li
                    key={service.label}
                    className="flex items-center space-x-3 transition-colors duration-200 group cursor-pointer"
                    style={{ color: "hsla(0, 0%, 98%, 0.8)" }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    onMouseEnter={(e: React.MouseEvent<HTMLLIElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "hsl(0, 0%, 98%)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<HTMLLIElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "hsla(0, 0%, 98%, 0.8)";
                    }}
                  >
                    <service.icon
                      size={16}
                      className="transition-colors duration-200"
                      style={{ color: "hsl(25, 60%, 55%)" }}
                      onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) => {
                        const target = e.currentTarget;
                        target.style.color = "hsl(45, 85%, 65%)";
                      }}
                      onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) => {
                        const target = e.currentTarget;
                        target.style.color = "hsl(25, 60%, 55%)";
                      }}
                    />
                    <span>{service.label}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <h3
                className="font-serif text-xl font-semibold"
                style={{ color: "hsl(45, 85%, 65%)" }}
              >
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <MapPin
                    size={18}
                    className="mt-0.5 transition-colors duration-200"
                    style={{ color: "hsl(25, 60%, 55%)" }}
                    onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "hsl(45, 85%, 65%)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "hsl(25, 60%, 55%)";
                    }}
                  />
                  <span style={{ color: "hsla(0, 0%, 98%, 0.9)" }}>
                    Accra, Greater Accra Region, Ghana
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Phone
                    size={18}
                    className="transition-colors duration-200"
                    style={{ color: "hsl(25, 60%, 55%)" }}
                    onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "hsl(45, 85%, 65%)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "hsl(25, 60%, 55%)";
                    }}
                  />
                  <span style={{ color: "hsla(0, 0%, 98%, 0.9)" }}>
                    +233 XX XXX XXXX
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Mail
                    size={18}
                    className="transition-colors duration-200"
                    style={{ color: "hsl(25, 60%, 55%)" }}
                    onMouseEnter={(e: React.MouseEvent<SVGSVGElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "hsl(45, 85%, 65%)";
                    }}
                    onMouseLeave={(e: React.MouseEvent<SVGSVGElement>) => {
                      const target = e.currentTarget;
                      target.style.color = "hsl(25, 60%, 55%)";
                    }}
                  />
                  <span style={{ color: "hsla(0, 0%, 98%, 0.9)" }}>
                    info@dagararoyal.com
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <h4
                  className="font-medium mb-4"
                  style={{ color: "hsl(45, 85%, 65%)" }}
                >
                  Stay Updated
                </h4>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="rounded-lg"
                    style={{
                      backgroundColor: "hsla(0, 0%, 98%, 0.1)",
                      borderColor: "hsla(0, 0%, 98%, 0.3)",
                      color: "hsl(0, 0%, 98%)",
                    }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                      const target = e.currentTarget;
                      target.style.borderColor = "hsl(45, 85%, 65%)";
                      target.style.boxShadow =
                        "0 0 0 2px hsla(45, 85%, 65%, 0.2)";
                    }}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      const target = e.currentTarget;
                      target.style.borderColor = "hsla(0, 0%, 98%, 0.3)";
                      target.style.boxShadow = "none";
                    }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="w-full font-medium rounded-lg"
                      size="sm"
                      style={{
                        backgroundColor: "hsl(45, 85%, 65%)",
                        color: "hsl(140, 8%, 15%)",
                      }}
                      onMouseEnter={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = "hsl(45, 85%, 55%)";
                      }}
                      onMouseLeave={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        const target = e.currentTarget;
                        target.style.backgroundColor = "hsl(45, 85%, 65%)";
                      }}
                    >
                      Subscribe to Newsletter
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-16 pt-8"
            style={{ borderTop: "1px solid hsla(0, 0%, 98%, 0.2)" }}
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm" style={{ color: "hsla(0, 0%, 98%, 0.8)" }}>
                © 2025 Dagara Royal Company LTD. All rights reserved.
              </p>
              <div className="flex space-x-8 text-sm">
                <Link
                  href="/privacy"
                  className="transition-colors duration-200"
                  style={{ color: "hsla(0, 0%, 98%, 0.8)" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget;
                    target.style.color = "hsl(45, 85%, 65%)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget;
                    target.style.color = "hsla(0, 0%, 98%, 0.8)";
                  }}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="transition-colors duration-200"
                  style={{ color: "hsla(0, 0%, 98%, 0.8)" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget;
                    target.style.color = "hsl(45, 85%, 65%)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget;
                    target.style.color = "hsla(0, 0%, 98%, 0.8)";
                  }}
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="transition-colors duration-200"
                  style={{ color: "hsla(0, 0%, 98%, 0.8)" }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget;
                    target.style.color = "hsl(45, 85%, 65%)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    const target = e.currentTarget;
                    target.style.color = "hsla(0, 0%, 98%, 0.8)";
                  }}
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
