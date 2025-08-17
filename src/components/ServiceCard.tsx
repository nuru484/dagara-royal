// src/components/ServiceCard.tsx
"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { cardVariants, imageVariants } from "@/app/data/motion-variants";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  service: {
    id: string;
    image: string;
    title: string;
    description: string;
    features: string[];
    gradient: string;
    accentColor: string;
  };
  index: number;
  hoveredService: number | null;
  onHoverStart: (index: number) => void;
  onHoverEnd: () => void;
}

const ServiceCard = ({
  service,
  index,
  hoveredService,
  onHoverStart,
  onHoverEnd,
}: ServiceCardProps) => {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push(`/services/${service.id}`);
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onMouseEnter={() => onHoverStart(index)}
      onMouseLeave={onHoverEnd}
    >
      <Card
        className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-500 overflow-hidden group h-full bg-white"
        style={{ willChange: "transform" }}
      >
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
              onClick={handleLearnMore}
              className="p-0 h-auto font-medium text-sm transition-all duration-200 group/btn cursor-pointer hover:cursor-pointer"
              style={{ color: service.accentColor }}
            >
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
