import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const processes = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct thorough market research and competitor analysis to develop a comprehensive digital marketing strategy tailored to your business objectives and target audience.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our team executes the strategy across all relevant channels, including SEO, PPC, social media, and content marketing, ensuring consistent messaging and optimal performance.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor campaign performance using advanced analytics tools and make data-driven optimizations to maximize ROI and achieve your business goals.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "Regular detailed reports keep you informed about campaign performance, insights, and recommendations. We maintain open communication to ensure alignment with your evolving needs.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "Based on performance data and market trends, we continuously refine and improve our strategies to ensure sustained growth and long-term success for your business.",
  },
];

const ProcessItem = ({
  number,
  title,
  description,
  isOpen,
  onToggle,
}: {
  number: string;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div
      className={cn(
        "border border-border rounded-3xl lg:rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:shadow-lg",
        isOpen ? "bg-secondary" : "bg-muted hover:bg-muted/80"
      )}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 lg:p-8 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4 lg:gap-8">
          <span className="text-3xl lg:text-5xl font-medium">{number}</span>
          <span className="text-lg lg:text-2xl font-medium">{title}</span>
        </div>
        <div
          className={cn(
            "w-10 h-10 lg:w-14 lg:h-14 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-300",
            isOpen ? "bg-foreground" : "bg-transparent hover:bg-foreground/10"
          )}
        >
          {isOpen ? (
            <Minus className={cn("w-5 h-5 lg:w-6 lg:h-6", isOpen && "text-background")} />
          ) : (
            <Plus className="w-5 h-5 lg:w-6 lg:h-6" />
          )}
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0">
          <div className="border-t border-foreground/20 pt-6">
            <p className="text-foreground/80 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8 mb-12">
          <h2 className="inline-block text-2xl lg:text-3xl font-medium bg-secondary px-4 py-2 rounded-lg">
            Our Working Process
          </h2>
          <p className="text-muted-foreground">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>

        {/* Process Accordion */}
        <div className="space-y-4 lg:space-y-6">
          {processes.map((process, index) => (
            <ProcessItem
              key={process.number}
              number={process.number}
              title={process.title}
              description={process.description}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
