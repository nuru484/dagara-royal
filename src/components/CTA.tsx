// src/components/CTA.tsx
"use client";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { itemVariants } from "@/app/data/motion-variants";

const CTA = () => {
  return (
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
            investments in agriculture, real estate, and sustainable business
            ventures that create lasting value for communities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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
  );
};

export default CTA;
