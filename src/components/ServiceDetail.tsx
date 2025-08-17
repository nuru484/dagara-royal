"use client";
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

interface ServiceDetailProps {
  service: {
    id: string;
    image: string;
    title: string;
    description: string;
    content: string;
    features: string[];
    gradient: string;
    accentColor: string;
  };
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleContactClick = () => {
    // Navigate to contact page or open contact modal
    router.push("/contact");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: service.gradient }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Back Button */}
        <motion.div
          className="absolute top-8 left-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button
            variant="secondary"
            onClick={handleBackClick}
            className="bg-white/90 hover:bg-white text-gray-800 shadow-lg"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Services
          </Button>
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-8 left-8 right-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              {service.title}
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="shadow-lg border-0 overflow-hidden">
                <div className="h-2" style={{ background: service.gradient }} />
                <CardContent className="p-8">
                  <div className="prose prose-gray max-w-none">
                    <ReactMarkdown
                      components={{
                        h2: ({ children }) => (
                          <h2
                            className="text-2xl font-serif font-bold mt-8 mb-4"
                            style={{ color: service.accentColor }}
                          >
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3
                            className="text-xl font-semibold mt-6 mb-3"
                            style={{ color: "hsl(140, 8%, 15%)" }}
                          >
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p className="mb-4 text-gray-700 leading-relaxed">
                            {children}
                          </p>
                        ),
                        strong: ({ children }) => (
                          <strong
                            className="font-semibold"
                            style={{ color: service.accentColor }}
                          >
                            {children}
                          </strong>
                        ),
                      }}
                    >
                      {service.content}
                    </ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="shadow-lg border-0 overflow-hidden">
                <div className="h-2" style={{ background: service.gradient }} />
                <CardHeader>
                  <CardTitle
                    className="text-xl font-serif"
                    style={{ color: "hsl(140, 8%, 15%)" }}
                  >
                    Key Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: service.accentColor,
                          color: "white",
                        }}
                      >
                        <CheckCircle size={12} />
                      </div>
                      <span
                        className="font-medium text-sm"
                        style={{ color: "hsl(140, 8%, 15%)" }}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="shadow-lg border-0 overflow-hidden">
                <div className="h-2" style={{ background: service.gradient }} />
                <CardHeader>
                  <CardTitle
                    className="text-xl font-serif"
                    style={{ color: "hsl(140, 8%, 15%)" }}
                  >
                    Get Started Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">
                    Ready to explore this investment opportunity? Contact our
                    team for personalized guidance.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Phone size={16} style={{ color: service.accentColor }} />
                      <span>+233 123 456 789</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Mail size={16} style={{ color: service.accentColor }} />
                      <span>info@example.com</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <MapPin
                        size={16}
                        style={{ color: service.accentColor }}
                      />
                      <span>Accra, Ghana</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleContactClick}
                    className="w-full mt-4"
                    style={{
                      backgroundColor: service.accentColor,
                      color: "white",
                    }}
                  >
                    Contact Our Team
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card
                className="shadow-lg border-0 overflow-hidden relative"
                style={{ background: service.gradient }}
              >
                <CardContent className="p-6 text-white">
                  <h3 className="font-serif text-lg font-bold mb-2">
                    Investment Opportunity
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    Join our growing community of successful investors in
                    Ghana&apos;s thriving economy.
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-white text-gray-800 hover:bg-gray-100"
                    onClick={handleContactClick}
                  >
                    Schedule Consultation
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
