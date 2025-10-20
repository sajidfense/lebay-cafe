import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Coffee, Cake, Camera, Armchair, Sparkles } from "lucide-react";
import highTeaImage from "@/assets/high-tea.jpg";

const HighTeaSection = () => {
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
      icon: Coffee,
      title: "Unlimited Barista-Made Coffee",
      description: "Bottomless cups of expertly brewed coffee throughout your visit",
    },
    {
      icon: Cake,
      title: "Handcrafted Pastries",
      description: "Delicate, homemade pastries, scones & cakes crafted fresh daily",
    },
    {
      icon: Sparkles,
      title: "Seasonal Sweets & Savoury",
      description: "A beautiful selection of seasonal bites to delight your palate",
    },
    {
      icon: Armchair,
      title: "Bay-Side Seating",
      description: "Choose indoor or outdoor seating with beautiful bay views",
    },
    {
      icon: Camera,
      title: "Instagram-Worthy",
      description: "Beautifully presented for those picture-perfect moments",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-card"
      id="high-tea"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-sans">
            Something Extra Special
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 leading-tight">
            High Tea at Le Bay
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground font-serif italic mb-8">
            Elegant. Homemade. Unlimited Coffee.
          </p>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans max-w-2xl mx-auto">
            Looking for something a little extra special? Join us for High Tea at Le Bay Café — a locally loved 
            experience that brings people together over beautifully presented bites and bottomless cups of coffee.
          </p>
        </div>

        {/* Image & Description Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-16">
          {/* Image */}
          <div
            className={`relative overflow-hidden rounded-sm transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src={highTeaImage}
              alt="Elegant high tea setup with tiered pastries, scones and unlimited coffee at Le Bay Café Wynnum"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans mb-8">
              Enjoy an indulgent selection of homemade pastries, scones, and cakes, all crafted fresh in-house 
              by our family team. Whether you're celebrating a birthday, hosting a catch-up with friends, or 
              just treating yourself to a slow afternoon, our high tea menu offers a relaxed, flavour-filled 
              escape from the everyday.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-serif font-medium">Bookings Essential</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                High tea is available by reservation only. Please call or message us to secure your table — 
                we can't wait to make your afternoon feel extra special.
              </p>
              <Button variant="accent" size="lg" className="w-full sm:w-auto" asChild>
                <a href="tel:+61493848179">Book High Tea</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center transition-all duration-700"
                style={{
                  transitionDelay: isVisible ? `${500 + index * 100}ms` : "0ms",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 border border-accent/20 mb-4">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-serif font-medium mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighTeaSection;
