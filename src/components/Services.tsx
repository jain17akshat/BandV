import { ArrowUpRight, Search, MousePointerClick, Share2, Mail, BarChart3, PenTool } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Search engine optimization",
    icon: Search,
    variant: "light" as const,
  },
  {
    title: "Pay-per-click advertising",
    icon: MousePointerClick,
    variant: "accent" as const,
  },
  {
    title: "Social Media Marketing",
    icon: Share2,
    variant: "dark" as const,
  },
  {
    title: "Email Marketing",
    icon: Mail,
    variant: "light" as const,
  },
  {
    title: "Content Creation",
    icon: PenTool,
    variant: "accent" as const,
  },
  {
    title: "Analytics and Tracking",
    icon: BarChart3,
    variant: "dark" as const,
  },
];

const ServiceCard = ({
  title,
  icon: Icon,
  variant,
}: {
  title: string;
  icon: typeof Search;
  variant: "light" | "accent" | "dark";
}) => {
  const variantStyles = {
    light: "bg-muted hover:bg-muted/80",
    accent: "bg-secondary hover:bg-secondary/90",
    dark: "bg-foreground text-background hover:bg-foreground/90",
  };

  const iconBgStyles = {
    light: "bg-background",
    accent: "bg-background",
    dark: "bg-background text-foreground",
  };

  const arrowStyles = {
    light: "bg-foreground text-background",
    accent: "bg-foreground text-background",
    dark: "bg-secondary text-foreground",
  };

  return (
    <div
      className={cn(
        "group relative p-6 lg:p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer",
        variantStyles[variant]
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-4">
          <h3
            className={cn(
              "inline-block text-lg lg:text-xl font-medium px-2 py-1 rounded-md",
              variant === "dark" ? "bg-background text-foreground" : "bg-secondary"
            )}
          >
            {title}
          </h3>
          <div className="flex items-center gap-2">
            <div
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-12",
                arrowStyles[variant]
              )}
            >
              <ArrowUpRight className="w-5 h-5" />
            </div>
            <span className={cn("text-sm font-medium", variant === "dark" ? "text-background" : "text-foreground")}>
              Learn more
            </span>
          </div>
        </div>
        <div
          className={cn(
            "w-24 h-24 lg:w-32 lg:h-32 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105",
            iconBgStyles[variant]
          )}
        >
          <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8 mb-12">
          <h2 className="inline-block text-2xl lg:text-3xl font-medium bg-secondary px-4 py-2 rounded-lg">
            Services
          </h2>
          <p className="text-muted-foreground max-w-lg">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              icon={service.icon}
              variant={service.variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
