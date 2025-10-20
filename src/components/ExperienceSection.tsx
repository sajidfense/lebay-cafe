import { useEffect, useRef, useState } from "react";
import ingredientsImage from "@/assets/ingredients.jpg";

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Family-Owned & Operated",
      description: "You'll often see us behind the counter — everyone's treated like a regular with friendly, personal service",
    },
    {
      title: "House-Baked Fresh Daily",
      description: "Many items made in-house with passion for quality and flavour, offering you better value without compromise",
    },
    {
      title: "Spacious & Welcoming",
      description: "Indoor & outdoor seating perfect for brunch, catch-ups, or remote work near the waterfront",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background"
      id="experience"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div
            className={`relative overflow-hidden rounded-sm transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src={ingredientsImage}
              alt="Fresh seasonal ingredients used daily at Le Bay Café Wynnum"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-sans">
              Why Locals Love Us
            </p>

            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-8 leading-tight">
              Community is everything
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-700`}
                  style={{
                    transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms",
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  }}
                >
                  <h3 className="text-xl md:text-2xl font-serif font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
