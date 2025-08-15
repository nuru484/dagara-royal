import Hero from "@/components/Hero";
import Services from "@/components/Services";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowRight, CheckCircle } from "lucide-react";

const Index = () => {
  const testimonials = [
    {
      name: "Dr. Kwame Asante",
      position: "Agricultural Economist",
      company: "University of Ghana",
      content:
        "Ghana Investment Company has transformed agricultural investments in our region. Their modern farming techniques and sustainable practices have increased yields by 40%.",
      rating: 5,
    },
    {
      name: "Sarah Mensah",
      position: "Real Estate Developer",
      company: "Accra Properties Ltd",
      content:
        "Their student housing projects are exemplary. Quality construction, strategic locations, and excellent management make them a reliable investment partner.",
      rating: 5,
    },
    {
      name: "John Osei",
      position: "Poultry Farm Owner",
      company: "Golden Farms",
      content:
        "Working with GIC on our poultry expansion was seamless. Their expertise in modern farming systems helped us double our production capacity.",
      rating: 5,
    },
  ];

  const achievements = [
    { number: "15+", label: "Years of Excellence" },
    { number: "₵50M+", label: "Total Investments" },
    { number: "200+", label: "Successful Projects" },
    { number: "5000+", label: "Jobs Created" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Building Ghana&apos;s
                <span className="text-gradient-primary"> Economic Future</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, Ghana Investment Company has been at the
                forefront of strategic investments across agriculture, real
                estate, and emerging sectors. We combine local expertise with
                international best practices to deliver sustainable growth and
                prosperity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Agricultural Innovation",
                  "Sustainable Practices",
                  "Community Development",
                  "Strategic Partnerships",
                ].map((item) => (
                  <div key={item} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent border-0"
              >
                Learn Our Story
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.label}
                  className="text-center hover-lift border-0 shadow-soft"
                >
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold font-heading text-gradient-primary mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <Services />

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              What Our
              <span className="text-gradient-primary"> Partners Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from the people who have experienced our commitment to
              excellence firsthand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift border-0 shadow-soft">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-primary mb-4" />
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-secondary text-secondary"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
            <CardContent className="p-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Ready to Grow with Ghana&apos;s Future?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                Join us in creating sustainable wealth through strategic
                investments in Ghana&apos;s most promising sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 py-4 text-lg"
                >
                  Explore Opportunities
                  <ArrowRight className="ml-2" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
                >
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
