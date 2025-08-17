// src/components/Hero.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { heroImages } from "@/app/data/hero";
import {
  textVariants,
  containerVariants,
  buttonVariants,
} from "@/app/data/motion-variants";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.5,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.8,
              },
            }}
          >
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              className="w-full h-full object-cover"
              fill
              priority
              quality={90}
              style={{
                filter: "brightness(0.4) contrast(1.1) saturate(0.9)",
              }}
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsla(140, 60%, 20%, 0.7) 0%, hsla(140, 60%, 20%, 0.5) 50%, hsla(140, 70%, 15%, 0.8) 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, hsla(25, 60%, 55%, 0.35) 0%, transparent 40%, transparent 60%, hsla(25, 60%, 55%, 0.35) 100%)",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 20%, hsla(140, 60%, 10%, 0.3) 70%)",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, hsla(0, 0%, 0%, 0.4) 30%, hsla(0, 0%, 0%, 0.4) 70%, transparent 100%)",
          }}
        ></div>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ color: "hsl(0, 0%, 98%)" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-5xl mx-auto space-y-8">
          <motion.div variants={textVariants}>
            <div
              className="inline-flex items-center px-4 py-2 backdrop-blur-sm border rounded-full text-sm font-medium mb-6"
              style={{
                backgroundColor: "hsla(0, 0%, 100%, 0.15)",
                borderColor: "hsla(0, 0%, 100%, 0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full mr-2 animate-pulse"
                style={{ backgroundColor: "hsl(45, 85%, 65%)" }}
              ></span>
              {heroImages[currentImageIndex].title}
            </div>
          </motion.div>

          <motion.div variants={textVariants}>
            <h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              style={{
                textShadow:
                  "2px 4px 12px hsla(0, 0%, 0%, 0.7), 0 2px 4px hsla(0, 0%, 0%, 0.5)",
              }}
            >
              Empowering Ghana Through
              <span
                className="block mt-2"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45, 85%, 65%) 0%, hsl(45, 85%, 55%) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                  filter: "drop-shadow(2px 4px 8px hsla(0, 0%, 0%, 0.5))",
                }}
              >
                Diverse Investments
              </span>
            </h1>
          </motion.div>

          <motion.div variants={textVariants}>
            <p
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
              style={{
                color: "hsla(0, 0%, 98%, 0.95)",
                textShadow: "1px 2px 8px hsla(0, 0%, 0%, 0.6)",
              }}
            >
              Leading agricultural innovation, poultry excellence, and strategic
              real estate development across Ghana.
              <span
                className="block mt-2 text-lg md:text-xl"
                style={{
                  color: "hsla(0, 0%, 98%, 0.85)",
                  textShadow: "1px 2px 8px hsla(0, 0%, 0%, 0.6)",
                }}
              >
                Building sustainable prosperity through diversified growth
                strategies.
              </span>
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-12"
            variants={containerVariants}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                size="lg"
                className="font-semibold px-10 py-4 text-lg shadow-xl transition-all duration-300 rounded-xl"
                style={{
                  backgroundColor: "hsl(45, 85%, 65%)",
                  color: "hsl(140, 8%, 15%)",
                  boxShadow: "0 10px 30px hsla(45, 85%, 65%, 0.3)",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = "hsl(45, 85%, 55%)";
                  target.style.boxShadow =
                    "0 15px 40px hsla(45, 85%, 65%, 0.4)";
                  target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = "hsl(45, 85%, 65%)";
                  target.style.boxShadow =
                    "0 10px 30px hsla(45, 85%, 65%, 0.3)";
                  target.style.transform = "translateY(0px)";
                }}
              >
                Explore Opportunities
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </motion.div>

            <motion.div variants={buttonVariants} whileHover="hover">
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                style={{
                  borderWidth: "2px",
                  borderColor: "hsla(0, 0%, 100%, 0.4)",
                  backgroundColor: "hsla(0, 0%, 100%, 0.1)",
                  backdropFilter: "blur(12px)",
                  color: "hsl(0, 0%, 98%)",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = "hsla(0, 0%, 100%, 0.2)";
                  target.style.borderColor = "hsla(0, 0%, 100%, 0.6)";
                  target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.target as HTMLElement;
                  target.style.backgroundColor = "hsla(0, 0%, 100%, 0.1)";
                  target.style.borderColor = "hsla(0, 0%, 100%, 0.4)";
                  target.style.transform = "translateY(0px)";
                }}
              >
                Learn About Us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-3 pt-16"
            variants={textVariants}
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    index === currentImageIndex
                      ? "hsl(45, 85%, 65%)"
                      : "hsla(0, 0%, 100%, 0.3)",
                  boxShadow:
                    index === currentImageIndex
                      ? "0 0 12px hsla(45, 85%, 65%, 0.5)"
                      : "none",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.target as HTMLElement;
                  if (index !== currentImageIndex) {
                    target.style.backgroundColor = "hsla(0, 0%, 100%, 0.5)";
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  const target = e.target as HTMLElement;
                  if (index !== currentImageIndex) {
                    target.style.backgroundColor = "hsla(0, 0%, 100%, 0.3)";
                  }
                }}
                aria-label={`View ${heroImages[index].title}`}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 rounded-full flex justify-center cursor-pointer transition-colors"
          style={{
            borderColor: "hsla(0, 0%, 100%, 0.6)",
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            const target = e.target as HTMLElement;
            target.style.borderColor = "hsla(0, 0%, 100%, 0.8)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            const target = e.target as HTMLElement;
            target.style.borderColor = "hsla(0, 0%, 100%, 0.6)";
          }}
        >
          <div
            className="w-1 h-3 rounded-full mt-2"
            style={{ backgroundColor: "hsla(0, 0%, 100%, 0.7)" }}
          ></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
