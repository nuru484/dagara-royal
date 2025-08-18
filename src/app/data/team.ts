import { Users, Award, GraduationCap, TrendingUp } from "lucide-react";

export const teamMembers = [
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
    color: "hsl(142, 76%, 36%)",
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
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    color: "hsl(25, 60%, 55%)",
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
    color: "hsl(210, 70%, 50%)",
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
    color: "hsl(280, 70%, 50%)",
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
    color: "hsl(340, 70%, 50%)",
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
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    color: "hsl(190, 70%, 50%)",
  },
];

export const departments = [
  {
    icon: Users,
    name: "Executive Leadership",
    description: "Strategic direction and overall company vision",
    count: 2,
    color: "hsl(142, 76%, 36%)",
    gradient:
      "linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(140, 60%, 20%) 100%)",
  },
  {
    icon: TrendingUp,
    name: "Finance & Operations",
    description: "Financial management and operational excellence",
    count: 4,
    color: "hsl(25, 60%, 55%)",
    gradient:
      "linear-gradient(135deg, hsl(25, 60%, 55%) 0%, hsl(20, 70%, 45%) 100%)",
  },
  {
    icon: GraduationCap,
    name: "Agricultural Development",
    description: "Farming innovation and agricultural expertise",
    count: 8,
    color: "hsl(210, 70%, 50%)",
    gradient:
      "linear-gradient(135deg, hsl(210, 70%, 50%) 0%, hsl(220, 60%, 45%) 100%)",
  },
  {
    icon: Award,
    name: "Real Estate",
    description: "Property development and management",
    count: 6,
    color: "hsl(280, 70%, 50%)",
    gradient:
      "linear-gradient(135deg, hsl(280, 70%, 50%) 0%, hsl(270, 60%, 45%) 100%)",
  },
];
