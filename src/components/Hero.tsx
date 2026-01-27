import { Button } from "@/components/ui/button";
import { Megaphone, Heart, Share2, MapPin, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Navigating the digital landscape for success
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg max-w-lg">
              Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
            </p>
            <Button
              size="lg"
              className="rounded-xl px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105"
            >
              Book a consultation
            </Button>
          </div>

          {/* Right Content - Hero Illustration */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main Megaphone */}
              <div className="relative">
                <svg viewBox="0 0 400 350" className="w-full h-auto">
                  {/* Orbital rings */}
                  <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/80" />
                  <ellipse cx="200" cy="200" rx="140" ry="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/60" />
                  
                  {/* Megaphone body */}
                  <path d="M120 140 L280 100 L300 250 L120 220 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
                  <rect x="160" y="130" width="80" height="100" rx="5" className="fill-secondary stroke-foreground" strokeWidth="2" />
                  
                  {/* Megaphone handle */}
                  <rect x="180" y="230" width="15" height="60" rx="3" className="fill-foreground" />
                  <rect x="205" y="230" width="15" height="60" rx="3" className="fill-foreground" />
                </svg>

                {/* Floating Icons */}
                <div className="absolute top-4 right-8 w-12 h-12 bg-foreground rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.1s' }}>
                  <Heart className="w-6 h-6 text-background" fill="currentColor" />
                </div>
                <div className="absolute top-12 right-0 w-10 h-10 bg-foreground rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.3s' }}>
                  <Share2 className="w-5 h-5 text-background" />
                </div>
                <div className="absolute top-1/3 -right-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div className="absolute bottom-1/3 right-0 w-10 h-10 bg-foreground rounded-full flex items-center justify-center animate-bounce" style={{ animationDelay: '0.7s' }}>
                  <Play className="w-5 h-5 text-background" fill="currentColor" />
                </div>

                {/* Decorative dots */}
                <div className="absolute top-1/4 left-0 w-4 h-4 bg-secondary rounded-full" />
                <div className="absolute bottom-1/4 left-8 w-3 h-3 bg-secondary rounded-full" />
                <div className="absolute bottom-12 right-1/4 w-4 h-4 bg-secondary rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
