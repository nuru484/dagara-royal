import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Globe, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for the highest standards in all our investments and partnerships.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Transparent, honest, and ethical business practices guide every decision we make.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building strong relationships and supporting local communities across Ghana.",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description:
        "Long-term thinking that benefits both investors and the environment.",
    },
  ];

  const milestones = [
    {
      year: "2009",
      title: "Company Founded",
      description:
        "Started with a vision to transform agricultural investment in Ghana.",
    },
    {
      year: "2012",
      title: "First Major Farm",
      description:
        "Acquired 500 hectares of farmland for large-scale crop production.",
    },
    {
      year: "2015",
      title: "Poultry Expansion",
      description:
        "Launched modern poultry farming operations with international standards.",
    },
    {
      year: "2018",
      title: "Real Estate Entry",
      description: "Began student housing projects near major universities.",
    },
    {
      year: "2021",
      title: "Digital Innovation",
      description:
        "Implemented smart farming technologies and digital investment platforms.",
    },
    {
      year: "2024",
      title: "Regional Leadership",
      description:
        "Recognized as Ghana's leading diversified investment company.",
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              About
              <span className="text-gradient-primary"> Our Story</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From humble beginnings to becoming Ghana&apos;s premier
              diversified investment company, our journey has been driven by a
              commitment to excellence, innovation, and sustainable growth for
              all stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-soft hover-lift">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To create sustainable wealth and prosperity through strategic
                  investments in Ghana&apos;s agricultural, real estate, and
                  emerging sectors while fostering community development and
                  environmental stewardship.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover-lift">
              <CardContent className="p-12">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-heading text-3xl font-bold mb-4">
                  Our Vision
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be West Africa&apos;s leading diversified investment
                  company, recognized for innovation, sustainability, and
                  positive impact on communities while delivering exceptional
                  returns to our investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Core
              <span className="text-gradient-primary"> Values</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide our decisions and shape our company
              culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                className="border-0 shadow-soft hover-lift text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our Growth
              <span className="text-gradient-primary"> Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Key milestones that have shaped our company&apos;s evolution and
              success.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={(milestone.year, index)}
                  className="flex flex-col md:flex-row items-start gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <Card className="flex-1 border-0 shadow-soft hover-lift">
                    <CardContent className="p-8">
                      <h3 className="font-heading text-2xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Intro */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
            <CardContent className="p-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Experienced professionals with deep expertise in agriculture,
                finance, real estate, and business development, committed to
                driving our vision forward.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg"
              >
                View Team Members
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
