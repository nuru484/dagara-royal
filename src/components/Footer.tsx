import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">GIC</span>
              </div>
              <span className="font-heading text-xl font-bold">
                Ghana Investment Company
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Leading diversified investment company in Ghana, specializing in
              agriculture, poultry farming, student real estate, and sustainable
              growth investments.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Facebook size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Twitter size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Instagram size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Linkedin size={18} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Team", href: "/team" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Agricultural Investments",
                "Poultry Farming",
                "Student Real Estate",
                "Property Development",
                "Investment Consulting",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">
              Contact & Updates
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-secondary" />
                <span className="text-primary-foreground/80">
                  Accra, Greater Accra Region, Ghana
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary" />
                <span className="text-primary-foreground/80">
                  +233 XX XXX XXXX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary" />
                <span className="text-primary-foreground/80">
                  info@ghanainvestment.com
                </span>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Ghana Investment Company. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
