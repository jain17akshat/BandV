import { useState } from "react";
import { ArrowUpRight, Search, MousePointerClick, Share2, Mail, BarChart3, PenTool, Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ============ HERO SECTION ============
const Hero = () => (
  <section className="py-12 lg:py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 lg:space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Navigating the digital landscape for success
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-lg">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <Button size="lg" className="rounded-xl px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105">
            Book a consultation
          </Button>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md lg:max-w-lg">
            <svg viewBox="0 0 400 350" className="w-full h-auto">
              <ellipse cx="200" cy="200" rx="180" ry="60" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-foreground/80" />
              <ellipse cx="200" cy="200" rx="140" ry="45" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground/60" />
              <path d="M120 140 L280 100 L300 250 L120 220 Z" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
              <rect x="160" y="130" width="80" height="100" rx="5" className="fill-secondary stroke-foreground" strokeWidth="2" />
              <rect x="180" y="230" width="15" height="60" rx="3" className="fill-foreground" />
              <rect x="205" y="230" width="15" height="60" rx="3" className="fill-foreground" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// ============ LOGO BAR ============
const logos = ["amazon", "dribbble", "HubSpot", "Notion", "NETFLIX", "zoom"];

const LogoBar = () => (
  <section className="py-8 lg:py-12 border-y border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12">
        {logos.map((logo) => (
          <div key={logo} className="text-xl lg:text-2xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer grayscale hover:grayscale-0">
            {logo}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ============ SERVICES SECTION ============
const services = [
  { title: "Search engine optimization", icon: Search, variant: "light" as const },
  { title: "Pay-per-click advertising", icon: MousePointerClick, variant: "accent" as const },
  { title: "Social Media Marketing", icon: Share2, variant: "dark" as const },
  { title: "Email Marketing", icon: Mail, variant: "light" as const },
  { title: "Content Creation", icon: PenTool, variant: "accent" as const },
  { title: "Analytics and Tracking", icon: BarChart3, variant: "dark" as const },
];

const ServiceCard = ({ title, icon: Icon, variant }: { title: string; icon: typeof Search; variant: "light" | "accent" | "dark" }) => {
  const styles = {
    light: { card: "bg-muted hover:bg-muted/80", iconBg: "bg-background", arrow: "bg-foreground text-background", title: "bg-secondary" },
    accent: { card: "bg-secondary hover:bg-secondary/90", iconBg: "bg-background", arrow: "bg-foreground text-background", title: "bg-secondary" },
    dark: { card: "bg-foreground text-background hover:bg-foreground/90", iconBg: "bg-background text-foreground", arrow: "bg-secondary text-foreground", title: "bg-background text-foreground" },
  };
  const s = styles[variant];

  return (
    <div className={cn("group relative p-6 lg:p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer", s.card)}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-4">
          <h3 className={cn("inline-block text-lg lg:text-xl font-medium px-2 py-1 rounded-md", s.title)}>{title}</h3>
          <div className="flex items-center gap-2">
            <div className={cn("w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12", s.arrow)}>
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className={cn("text-sm font-medium", variant === "dark" ? "text-background" : "text-foreground")}>Learn more</span>
          </div>
        </div>
        <div className={cn("w-24 h-24 lg:w-32 lg:h-32 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105", s.iconBg)}>
          <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
        </div>
      </div>
    </div>
  );
};

const Services = () => (
  <section id="services" className="py-12 lg:py-20">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8 mb-12">
        <h2 className="inline-block text-2xl lg:text-3xl font-medium bg-secondary px-4 py-2 rounded-lg">Services</h2>
        <p className="text-muted-foreground max-w-lg">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {services.map((service) => <ServiceCard key={service.title} {...service} />)}
      </div>
    </div>
  </section>
);

// ============ WORKING PROCESS ============
const processes = [
  { number: "01", title: "Consultation", description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts." },
  { number: "02", title: "Research and Strategy Development", description: "We conduct thorough market research and competitor analysis to develop a comprehensive digital marketing strategy." },
  { number: "03", title: "Implementation", description: "Our team executes the strategy across all relevant channels, including SEO, PPC, social media, and content marketing." },
  { number: "04", title: "Monitoring and Optimization", description: "We continuously monitor campaign performance using advanced analytics tools and make data-driven optimizations." },
  { number: "05", title: "Reporting and Communication", description: "Regular detailed reports keep you informed about campaign performance, insights, and recommendations." },
  { number: "06", title: "Continual Improvement", description: "Based on performance data and market trends, we continuously refine and improve our strategies." },
];

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8 mb-12">
          <h2 className="inline-block text-2xl lg:text-3xl font-medium bg-secondary px-4 py-2 rounded-lg">Our Working Process</h2>
          <p className="text-muted-foreground">Step-by-Step Guide to Achieving Your Business Goals</p>
        </div>
        <div className="space-y-4 lg:space-y-6">
          {processes.map((p, i) => (
            <div key={p.number} className={cn("border border-border rounded-3xl lg:rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:shadow-lg", openIndex === i ? "bg-secondary" : "bg-muted hover:bg-muted/80")}>
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full p-6 lg:p-8 flex items-center justify-between text-left">
                <div className="flex items-center gap-4 lg:gap-8">
                  <span className="text-3xl lg:text-5xl font-medium">{p.number}</span>
                  <span className="text-lg lg:text-2xl font-medium">{p.title}</span>
                </div>
                <div className={cn("w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-300", openIndex === i ? "bg-foreground" : "bg-transparent hover:bg-foreground/10")}>
                  {openIndex === i ? <Minus className="w-5 h-5 lg:w-6 lg:h-6 text-background" /> : <Plus className="w-5 h-5 lg:w-6 lg:h-6" />}
                </div>
              </button>
              <div className={cn("overflow-hidden transition-all duration-300", openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
                  <div className="border-t border-foreground/20 pt-6">
                    <p className="text-foreground/80 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ TESTIMONIALS ============
const testimonials = [
  { name: "John Smith", role: "Marketing Director at XYZ Corp", quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts." },
  { name: "Jane Doe", role: "CEO at ABC Inc", quote: "The team at Positivus is incredibly knowledgeable and professional. They have helped us achieve our marketing goals and exceed our expectations." },
  { name: "Michael Johnson", role: "Founder of StartUp Co", quote: "Positivus has been instrumental in helping us establish our online presence. Their strategic approach and attention to detail have made all the difference." },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8 mb-12">
          <h2 className="inline-block text-2xl lg:text-3xl font-medium bg-secondary px-4 py-2 rounded-lg">Testimonials</h2>
          <p className="text-muted-foreground">Hear from Our Satisfied Clients</p>
        </div>
        <div className="bg-foreground rounded-3xl lg:rounded-[3rem] p-8 lg:p-16">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto">
                    <div className="relative bg-transparent border border-secondary rounded-3xl p-6 lg:p-8 mb-8">
                      <p className="text-background text-lg lg:text-xl leading-relaxed">"{t.quote}"</p>
                      <div className="absolute -bottom-4 left-12 w-8 h-8 bg-foreground border-l border-b border-secondary transform rotate-[-45deg]" />
                    </div>
                    <div className="flex items-center gap-4 pl-8">
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">{t.name.charAt(0)}</div>
                      <div>
                        <p className="text-secondary font-medium">{t.name}</p>
                        <p className="text-background/60 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12">
            <button onClick={prev} className="w-12 h-12 rounded-full border border-background/30 flex items-center justify-center text-background hover:bg-background/10 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={cn("w-3 h-3 rounded-full transition-all", current === i ? "bg-secondary w-8" : "bg-background/30 hover:bg-background/50")} />
              ))}
            </div>
            <button onClick={next} className="w-12 h-12 rounded-full border border-background/30 flex items-center justify-center text-background hover:bg-background/10 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ============ MAIN PAGE ============
const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <LogoBar />
      <Services />
      <WorkingProcess />
      <Testimonials />
    </main>
    <Footer />
  </div>
);

export default Index;
