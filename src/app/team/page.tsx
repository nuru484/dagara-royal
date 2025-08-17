"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Mail,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  FileUser,
  Search,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  containerVariants,
  itemVariants,
  cardVariants,
  iconVariants,
  imageVariants,
} from "../data/motion-variants";
import { teamMembers, departments } from "../data/team";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [hoveredDepartment, setHoveredDepartment] = useState<number | null>(
    null
  );

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
                <Users size={16} />
                <span className="font-medium text-sm">Our Expert Team</span>
              </div>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Meet Our{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Expert Team
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              Our diverse team of professionals brings together decades of
              experience in agriculture, finance, real estate, and business
              development to drive sustainable growth across Ghana&apos;s
              investment landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Overview */}
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
                <Sparkles size={16} />
                <span className="font-medium text-sm">Our Departments</span>
              </div>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Team{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Overview
              </span>
            </motion.h2>

            <motion.p
              className="text-xl"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              Structured teams working across key departments to deliver
              excellence in every aspect of our business.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredDepartment(index)}
                onHoverEnd={() => setHoveredDepartment(null)}
              >
                <Card
                  style={{ willChange: "transform" }}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group text-center h-full"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                    style={{ background: dept.gradient }}
                  />
                  <CardContent className="p-8 relative">
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        background: dept.gradient,
                        color: "hsl(0, 0%, 98%)",
                      }}
                      variants={iconVariants}
                      initial="rest"
                      animate={hoveredDepartment === index ? "hover" : "rest"}
                    >
                      <dept.icon size={24} />
                    </motion.div>
                    <h3
                      className="font-serif text-lg font-bold mb-2"
                      style={{ color: "hsl(140, 8%, 15%)" }}
                    >
                      {dept.name}
                    </h3>
                    <p
                      className="text-sm mb-4 leading-relaxed"
                      style={{ color: "hsl(140, 5%, 45%)" }}
                    >
                      {dept.description}
                    </p>
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: dept.color }}
                    >
                      {dept.count}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "hsl(140, 5%, 45%)" }}
                    >
                      Team Members
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
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
                <span className="font-medium text-sm">Leadership Team</span>
              </div>
            </motion.div>

            <motion.h2
              className="font-serif text-4xl md:text-6xl font-bold mb-6"
              style={{ color: "hsl(140, 8%, 15%)" }}
              variants={itemVariants}
            >
              Leadership{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hsl(140, 60%, 20%), hsl(25, 60%, 55%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Team
              </span>
            </motion.h2>

            <motion.p
              className="text-xl"
              style={{ color: "hsl(140, 5%, 45%)" }}
              variants={itemVariants}
            >
              Meet the experienced professionals who guide our strategic vision
              and drive our company&apos;s success.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredMember(index)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <Card
                  style={{ willChange: "transform" }}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full bg-white"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500"
                    style={{ backgroundColor: member.color }}
                  />

                  <div className="aspect-square overflow-hidden relative">
                    <motion.div
                      variants={imageVariants}
                      initial="rest"
                      animate={hoveredMember === index ? "hover" : "rest"}
                      className="w-full h-full"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <CardContent className="p-8 relative">
                    <div className="mb-6">
                      <h3
                        className="font-serif text-xl font-bold mb-1"
                        style={{ color: "hsl(140, 8%, 15%)" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="font-medium mb-2"
                        style={{ color: member.color }}
                      >
                        {member.position}
                      </p>
                      <p
                        className="text-sm mb-4"
                        style={{ color: "hsl(140, 5%, 45%)" }}
                      >
                        {member.department}
                      </p>
                    </div>

                    <p
                      className="leading-relaxed mb-6 text-sm"
                      style={{ color: "hsl(140, 5%, 45%)" }}
                    >
                      {member.bio}
                    </p>

                    <div className="mb-6">
                      <h4
                        className="font-semibold mb-2 text-sm"
                        style={{ color: "hsl(140, 8%, 15%)" }}
                      >
                        Education
                      </h4>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "hsl(140, 5%, 45%)" }}
                      >
                        {member.education}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4
                        className="font-semibold mb-2 text-sm"
                        style={{ color: "hsl(140, 8%, 15%)" }}
                      >
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 text-xs rounded-full font-medium"
                            style={{
                              backgroundColor: `${member.color}20`,
                              color: member.color,
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3 pt-4 border-t border-gray-100">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 transition-all duration-200"
                          style={{ borderColor: `${member.color}50` }}
                        >
                          <Linkedin size={14} />
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 transition-all duration-200"
                          style={{ borderColor: `${member.color}50` }}
                        >
                          <Mail size={14} />
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team */}
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
                  Join Our Growing Team
                </motion.h2>

                <motion.p
                  className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
                  style={{ color: "hsla(0, 0%, 98%, 0.9)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  We&apos;re always looking for talented individuals who share
                  our passion for sustainable investment and economic
                  development in Ghana.
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
                      <Search className="mr-2" size={20} />
                      View Open Positions
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
                      <FileUser className="mr-2" size={20} />
                      Submit Resume
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

export default Team;
