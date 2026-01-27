import { useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Use Cases", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 font-bold text-xl">
            <Star className="h-6 w-6 fill-primary" />
            <span>Positivus</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="hidden lg:inline-flex rounded-xl border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
          >
            Request a quote
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium py-2 hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="outline"
                className="w-full rounded-xl border-2 border-foreground mt-2"
              >
                Request a quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
