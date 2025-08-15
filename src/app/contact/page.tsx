import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
  Calendar,
  Users,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: ["123 Liberation Road", "Accra, Greater Accra Region", "Ghana"],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+233 XX XXX XXXX (Main)",
        "+233 XX XXX XXXX (Agriculture)",
        "+233 XX XXX XXXX (Real Estate)",
      ],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@ghanainvestment.com",
        "agriculture@ghanainvestment.com",
        "realestate@ghanainvestment.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const officeLocations = [
    {
      name: "Accra Head Office",
      address: "123 Liberation Road, Accra",
      phone: "+233 XX XXX XXXX",
      type: "Main Office",
    },
    {
      name: "Kumasi Branch",
      address: "45 Manhyia Palace Road, Kumasi",
      phone: "+233 XX XXX XXXX",
      type: "Regional Office",
    },
    {
      name: "Tamale Office",
      address: "78 Bolgatanga Road, Tamale",
      phone: "+233 XX XXX XXXX",
      type: "Agricultural Hub",
    },
  ];

  const quickActions = [
    {
      icon: MessageSquare,
      title: "General Inquiry",
      description: "Get answers to your questions about our services",
      action: "Send Message",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation with our investment team",
      action: "Book Now",
    },
    {
      icon: Users,
      title: "Partnership Inquiry",
      description: "Explore partnership opportunities with us",
      action: "Learn More",
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Get In
              <span className="text-gradient-primary"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to explore investment opportunities or have questions about
              our services? We&apos;re here to help you take the next step
              toward sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {quickActions.map((action) => (
              <Card
                key={action.title}
                className="border-0 shadow-soft hover-lift text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {action.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {action.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    {action.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What's this about?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-hover hover:to-accent border-0"
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Reach out to us through any of these channels. We&apos;re
                  committed to providing prompt and helpful responses to all
                  inquiries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="border-0 shadow-soft">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, index) => (
                              <p
                                key={index}
                                className="text-muted-foreground text-sm"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="border-0 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { icon: Facebook, label: "Facebook" },
                      { icon: Twitter, label: "Twitter" },
                      { icon: Instagram, label: "Instagram" },
                      { icon: Linkedin, label: "LinkedIn" },
                    ].map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="icon"
                        className="hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      >
                        <social.icon className="w-5 h-5" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Our
              <span className="text-gradient-primary"> Locations</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find us across Ghana with offices strategically located to serve
              our clients and communities nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office) => (
              <Card
                key={office.name}
                className="border-0 shadow-soft hover-lift"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">
                    {office.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{office.type}</p>
                  <p className="text-muted-foreground mb-2">{office.address}</p>
                  <p className="text-muted-foreground mb-6">{office.phone}</p>
                  <Button variant="outline" size="sm">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <Card className="border-0 shadow-soft overflow-hidden">
            <div className="aspect-[21/9] bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold mb-2">
                  Interactive Map
                </h3>
                <p className="text-muted-foreground">
                  Google Maps integration would be displayed here
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
