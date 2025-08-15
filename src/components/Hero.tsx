import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Hero = () => {
  const stats = [
    { icon: TrendingUp, label: "Years of Growth", value: "15+" },
    { icon: Users, label: "Successful Projects", value: "200+" },
    { icon: Award, label: "Sectors Covered", value: "5+" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-agriculture.jpg"
          alt="Ghana Agricultural Investment"
          className="w-full h-full object-cover"
          width={80}
          height={80}
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Diverse Investments in
            <span className="block text-gradient-gold">
              Ghana&apos;s Future
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Leading agricultural, poultry, and real estate investments across
            Ghana. Building sustainable prosperity through diversified growth
            strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary-hover px-8 py-4 text-lg font-semibold"
            >
              Explore Opportunities
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              Learn About Us
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="glass border-white/20 hover-lift"
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-secondary" />
                  <div className="text-3xl font-bold font-heading mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/80">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
