import { Star, Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-12 lg:pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <Star className="h-6 w-6 fill-background" />
            <span>Positivus</span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center gap-4 lg:gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-background/70 hover:text-background underline underline-offset-4 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="inline-block text-lg font-medium bg-secondary text-secondary-foreground px-4 py-1 rounded-md mb-6">
              Contact us:
            </h3>
            <div className="space-y-3 text-background/80">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-background/10 rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border-background/30 text-background placeholder:text-background/50 rounded-xl focus:border-secondary"
              />
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl px-8 whitespace-nowrap">
                Subscribe to news
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2023 Positivus. All Rights Reserved.
          </p>
          <a
            href="#"
            className="text-sm text-background/60 hover:text-background underline underline-offset-4 transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
