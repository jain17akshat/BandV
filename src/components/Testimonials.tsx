import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    quote:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    role: "Marketing Director at XYZ Corp",
  },
  {
    id: 2,
    quote:
      "Positivus transformed our digital marketing strategy completely. Their data-driven approach and creative solutions helped us achieve a 200% increase in conversions. The team's expertise and dedication are unmatched in the industry.",
    author: "Sarah Johnson",
    role: "CEO at TechStart Inc",
  },
  {
    id: 3,
    quote:
      "Working with Positivus has been a game-changer for our business. Their SEO and content marketing strategies have positioned us as industry leaders. The ROI we've seen is remarkable, and we couldn't be happier with the results.",
    author: "Michael Chen",
    role: "Founder at GrowthLabs",
  },
  {
    id: 4,
    quote:
      "The Positivus team exceeded all our expectations. Their comprehensive approach to digital marketing, from PPC to social media, has helped us reach new audiences and grow our customer base exponentially.",
    author: "Emily Davis",
    role: "Marketing Manager at Innovate Co",
  },
  {
    id: 5,
    quote:
      "I've worked with many agencies, but Positivus stands out for their transparency, expertise, and results. They've helped us build a strong online presence and generate quality leads consistently.",
    author: "David Wilson",
    role: "Director at Summit Solutions",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + testimonials.length) % testimonials.length;
      items.push({ ...testimonials[index], position: i });
    }
    return items;
  };

  return (
    <section className="py-12 lg:py-20 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:gap-8 mb-12">
          <h2 className="inline-block text-2xl lg:text-3xl font-medium bg-secondary text-secondary-foreground px-4 py-2 rounded-lg">
            Testimonials
          </h2>
          <p className="text-background/70">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Cards Container */}
          <div className="flex justify-center items-center gap-4 lg:gap-8 py-8">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className={cn(
                  "relative transition-all duration-500 ease-out",
                  testimonial.position === 0
                    ? "w-full max-w-2xl opacity-100 scale-100 z-10"
                    : "hidden lg:block w-64 opacity-50 scale-90 z-0"
                )}
              >
                {/* Quote bubble */}
                <div
                  className={cn(
                    "relative p-6 lg:p-8 rounded-3xl border transition-all duration-300",
                    testimonial.position === 0
                      ? "border-secondary hover:border-secondary/80"
                      : "border-background/20"
                  )}
                >
                  {/* Speech bubble tail */}
                  <div
                    className={cn(
                      "absolute -bottom-4 left-12 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[16px] border-l-transparent border-r-transparent",
                      testimonial.position === 0 ? "border-t-secondary" : "border-t-background/20"
                    )}
                  />

                  <p
                    className={cn(
                      "leading-relaxed",
                      testimonial.position === 0 ? "text-base lg:text-lg" : "text-sm line-clamp-4"
                    )}
                  >
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author info */}
                <div className="mt-8 ml-4">
                  <p className="font-medium text-secondary">{testimonial.author}</p>
                  <p className="text-sm text-background/60">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-background/30 flex items-center justify-center hover:bg-background/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "bg-secondary w-6"
                      : "bg-background/30 hover:bg-background/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-background/30 flex items-center justify-center hover:bg-background/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
