import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Mail,
  Users,
  Award,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const Team = () => {
  const teamMembers = [
    {
      name: "Kwame Nkrumah Asante",
      position: "Chief Executive Officer",
      department: "Executive Leadership",
      bio: "With over 20 years of experience in agricultural finance and investment management, Kwame leads our strategic vision for sustainable growth across Ghana's emerging markets.",
      education: "MBA Finance, University of Ghana Business School",
      expertise: [
        "Strategic Planning",
        "Agricultural Investment",
        "Market Development",
      ],
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Akosua Mensah",
      position: "Chief Financial Officer",
      department: "Finance & Operations",
      bio: "Akosua brings 15 years of financial expertise from leading investment firms, specializing in portfolio management and risk assessment for agricultural investments.",
      education: "CFA, MSc Accounting & Finance, KNUST",
      expertise: [
        "Portfolio Management",
        "Financial Analysis",
        "Risk Management",
      ],
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b187?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Dr. Emmanuel Boateng",
      position: "Head of Agricultural Development",
      department: "Operations",
      bio: "Dr. Boateng is an agricultural scientist with extensive experience in sustainable farming practices and crop optimization across West African markets.",
      education: "PhD Agricultural Science, University of Cape Coast",
      expertise: [
        "Sustainable Farming",
        "Crop Science",
        "Technology Integration",
      ],
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Nana Ama Osei",
      position: "Real Estate Development Director",
      department: "Real Estate",
      bio: "Nana leads our real estate portfolio with focus on student housing and commercial properties, bringing 12 years of property development experience.",
      education: "MSc Real Estate Development, University of Reading",
      expertise: [
        "Property Development",
        "Project Management",
        "Market Analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Samuel Adjei",
      position: "Head of Business Development",
      department: "Strategy",
      bio: "Samuel focuses on identifying new investment opportunities and building strategic partnerships to expand our market presence across Ghana.",
      education: "MBA Strategic Management, GIMPA",
      expertise: [
        "Business Development",
        "Partnership Strategy",
        "Market Expansion",
      ],
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Grace Addo",
      position: "Head of Human Resources",
      department: "People & Culture",
      bio: "Grace leads our people strategy, ensuring we attract and retain top talent while building a culture of excellence and innovation.",
      education: "MSc Human Resource Management, University of Ghana",
      expertise: [
        "Talent Management",
        "Organizational Development",
        "Employee Relations",
      ],
      image:
        "https://images.unsplash.com/photo-1559941452-6d5b0a4a3e7f?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const departments = [
    {
      icon: Users,
      name: "Executive Leadership",
      description: "Strategic direction and overall company vision",
      count: 2,
    },
    {
      icon: TrendingUp,
      name: "Finance & Operations",
      description: "Financial management and operational excellence",
      count: 4,
    },
    {
      icon: GraduationCap,
      name: "Agricultural Development",
      description: "Farming innovation and agricultural expertise",
      count: 8,
    },
    {
      icon: Award,
      name: "Real Estate",
      description: "Property development and management",
      count: 6,
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Meet Our
              <span className="text-gradient-primary"> Expert Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our diverse team of professionals brings together decades of
              experience in agriculture, finance, real estate, and business
              development to drive sustainable growth across Ghana&apos;s
              investment landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {departments.map((dept) => (
              <Card
                key={dept.name}
                className="border-0 shadow-soft hover-lift text-center"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <dept.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {dept.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {dept.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {dept.count}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Team Members
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Leadership
              <span className="text-gradient-primary"> Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Meet the experienced professionals who guide our strategic vision
              and drive our company&apos;s success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="border-0 shadow-soft hover-lift overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    width={80}
                    height={80}
                  />
                </div>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="font-heading text-xl font-bold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.position}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.department}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      {member.education}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
            <CardContent className="p-16 text-center">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                Join Our Growing Team
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
                We&apos;re always looking for talented individuals who share our
                passion for sustainable investment and economic development in
                Ghana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 py-4 text-lg"
                >
                  View Open Positions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg"
                >
                  Submit Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Team;
