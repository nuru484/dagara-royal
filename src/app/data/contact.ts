import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Calendar,
  Users,
} from "lucide-react";

export const contactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: ["123 Liberation Road", "Accra, Greater Accra Region", "Ghana"],
    gradient:
      "linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(140, 60%, 20%) 100%)",
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+233 XX XXX XXXX (Main)",
      "+233 XX XXX XXXX (Agriculture)",
      "+233 XX XXX XXXX (Real Estate)",
    ],
    gradient:
      "linear-gradient(135deg, hsl(25, 60%, 55%) 0%, hsl(20, 70%, 45%) 100%)",
  },
  {
    icon: Mail,
    title: "Email Addresses",
    details: [
      "info@dagararoyal.com",
      "agriculture@dagararoyal.com",
      "realestate@dagararoyal.com",
    ],
    gradient:
      "linear-gradient(135deg, hsl(210, 70%, 50%) 0%, hsl(220, 60%, 45%) 100%)",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Monday - Friday: 8:00 AM - 6:00 PM",
      "Saturday: 9:00 AM - 2:00 PM",
      "Sunday: Closed",
    ],
    gradient:
      "linear-gradient(135deg, hsl(280, 70%, 50%) 0%, hsl(270, 60%, 45%) 100%)",
  },
];

export const officeLocations = [
  {
    name: "Accra Head Office",
    address: "123 Liberation Road, Accra",
    phone: "+233 XX XXX XXXX",
    type: "Main Office",
    gradient:
      "linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(140, 60%, 20%) 100%)",
  },
  {
    name: "Kumasi Branch",
    address: "45 Manhyia Palace Road, Kumasi",
    phone: "+233 XX XXX XXXX",
    type: "Regional Office",
    gradient:
      "linear-gradient(135deg, hsl(25, 60%, 55%) 0%, hsl(20, 70%, 45%) 100%)",
  },
  {
    name: "Tamale Office",
    address: "78 Bolgatanga Road, Tamale",
    phone: "+233 XX XXX XXXX",
    type: "Agricultural Hub",
    gradient:
      "linear-gradient(135deg, hsl(210, 70%, 50%) 0%, hsl(220, 60%, 45%) 100%)",
  },
];

export const quickActions = [
  {
    icon: MessageSquare,
    title: "General Inquiry",
    description: "Get answers to your questions about our services",
    action: "Send Message",
    gradient:
      "linear-gradient(135deg, hsl(142, 76%, 36%) 0%, hsl(140, 60%, 20%) 100%)",
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation with our investment team",
    action: "Book Now",
    gradient:
      "linear-gradient(135deg, hsl(25, 60%, 55%) 0%, hsl(20, 70%, 45%) 100%)",
  },
  {
    icon: Users,
    title: "Partnership Inquiry",
    description: "Explore partnership opportunities with us",
    action: "Learn More",
    gradient:
      "linear-gradient(135deg, hsl(210, 70%, 50%) 0%, hsl(220, 60%, 45%) 100%)",
  },
];
