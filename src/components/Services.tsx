import {
  Wheat,
  Bird,
  Building2,
  GraduationCap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Wheat,
      title: "Agricultural Investments",
      description:
        "Large-scale farming operations including maize, corn, millet, soya beans, and groundnuts. Sustainable farming practices for maximum yield.",
      features: [
        "Crop Diversification",
        "Modern Farming Equipment",
        "Sustainable Practices",
        "Market Access",
      ],
      color: "from-green-600 to-green-400",
    },
    {
      icon: Bird,
      title: "Poultry Farming",
      description:
        "Commercial poultry operations focused on egg production and broiler farming with modern facilities and efficient management systems.",
      features: [
        "Modern Facilities",
        "Health Management",
        "Feed Optimization",
        "Distribution Network",
      ],
      color: "from-orange-600 to-orange-400",
    },
    {
      icon: Building2,
      title: "Real Estate Development",
      description:
        "Strategic property investments and development projects focusing on student accommodation and commercial properties.",
      features: [
        "Student Housing",
        "Commercial Properties",
        "Property Management",
        "Strategic Locations",
      ],
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: GraduationCap,
      title: "Educational Infrastructure",
      description:
        "Development of educational facilities and student housing near major universities and educational institutions.",
      features: [
        "Hostel Construction",
        "Educational Facilities",
        "Student Services",
        "Campus Development",
      ],
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: TrendingUp,
      title: "Investment Consulting",
      description:
        "Strategic investment advisory services helping individuals and organizations diversify their investment portfolios.",
      features: [
        "Portfolio Analysis",
        "Risk Assessment",
        "Market Research",
        "Investment Strategy",
      ],
      color: "from-indigo-600 to-indigo-400",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Our Investment
            <span className="text-gradient-primary"> Sectors</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We operate across multiple high-growth sectors in Ghana, providing
            diversified investment opportunities that drive sustainable economic
            development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={(service.title, index)}
              className="group hover-lift border-0 shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="font-heading text-xl mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto font-medium text-primary hover:text-primary-hover"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
            <CardContent className="p-12">
              <h3 className="font-heading text-3xl font-bold mb-4">
                Ready to Invest in Ghana&apos;s Growth?
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Join us in building a prosperous future through strategic
                investments in agriculture, real estate, and sustainable
                business ventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-4">
                  Start Investing
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
