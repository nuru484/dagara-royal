import Services from "@/components/Services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Target,
} from "lucide-react";

const ServicesPage = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Proven Returns",
      description:
        "Consistent growth with average annual returns of 12-15% across our investment portfolio.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Experienced professionals with decades of combined experience in their respective fields.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Multiple awards for innovation, sustainability, and excellence in investment management.",
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description:
        "Targeted investments in high-growth sectors with strong fundamentals and market demand.",
    },
  ];

  const investmentProcess = [
    {
      step: "01",
      title: "Market Analysis",
      description:
        "Comprehensive research and analysis of market opportunities and trends.",
    },
    {
      step: "02",
      title: "Due Diligence",
      description:
        "Thorough evaluation of potential investments, risks, and growth prospects.",
    },
    {
      step: "03",
      title: "Strategic Planning",
      description:
        "Development of detailed investment strategies and implementation plans.",
    },
    {
      step: "04",
      title: "Execution & Management",
      description:
        "Professional project management and ongoing performance monitoring.",
    },
    {
      step: "05",
      title: "Value Creation",
      description:
        "Active management to maximize returns and create sustainable value.",
    },
    {
      step: "06",
      title: "Exit Strategy",
      description:
        "Strategic exit planning to optimize returns for all stakeholders.",
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Our Investment
              <span className="text-gradient-primary"> Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive investment solutions across agriculture, real
              estate, and emerging sectors designed to create sustainable wealth
              and drive economic growth in Ghana.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <Services />

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Why Partner
              <span className="text-gradient-primary"> With Us</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our track record, expertise, and commitment to excellence set us
              apart in the investment landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="border-0 shadow-soft hover-lift text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Investment
              <span className="text-gradient-primary"> Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A systematic approach to identifying, evaluating, and managing
              investment opportunities for optimal returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investmentProcess.map((process, index) => (
              <Card
                key={(process.step, index)}
                className="border-0 shadow-soft hover-lift"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {process.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold">
                      {process.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Investment
                <span className="text-gradient-primary"> Criteria</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We focus on opportunities that align with our strategic vision
                and meet our rigorous investment standards for sustainable
                growth.
              </p>
              <div className="space-y-4">
                {[
                  "Strong market fundamentals and growth potential",
                  "Sustainable business models with positive impact",
                  "Experienced management teams and local partnerships",
                  "Clear path to profitability and value creation",
                  "Alignment with Ghana's economic development goals",
                  "Environmental and social responsibility standards",
                ].map((criteria) => (
                  <div key={criteria} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{criteria}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground border-0">
              <CardContent className="p-12">
                <h3 className="font-heading text-3xl font-bold mb-6">
                  Ready to Explore Opportunities?
                </h3>
                <p className="text-primary-foreground/90 text-lg mb-8">
                  Contact us to discuss how our investment services can help you
                  achieve your financial goals and contribute to Ghana&apos;s
                  growth.
                </p>
                <div className="space-y-4">
                  <Button size="lg" variant="secondary" className="w-full">
                    Schedule Consultation
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
