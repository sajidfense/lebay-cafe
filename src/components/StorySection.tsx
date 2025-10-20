import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import ourStoryImage from "@/assets/our-story.jpg";

const StorySection = () => {
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

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-card"
      id="story"
    >
      <div className="container mx-auto px-6">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Subtitle */}
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8 font-sans">
            Rooted in Passion
          </p>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-8 leading-tight">
            A family-owned local favourite
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed font-sans max-w-2xl mx-auto">
            At Le Bay Café, we're more than just coffee. We're proudly serving the Wynnum community 
            from our cosy spot on Berrima Street, just a stone's throw from the bay.
          </p>

          {/* CTA Button */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg">
                Our Story
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl font-serif mb-4">Our Story</DialogTitle>
                <DialogDescription className="text-base leading-relaxed space-y-4">
                  <img 
                    src={ourStoryImage} 
                    alt="Le Bay Café family-owned business story and heritage in Wynnum community" 
                    className="w-full h-64 object-cover rounded-lg mb-4"
                    loading="lazy"
                  />
                  <p>
                    Our story began with a simple idea: great coffee, delicious food, and a welcoming place where people could connect. 
                    Whether you're on your morning walk, meeting friends for brunch, or grabbing a quick bite before heading to the 
                    waterfront — we're here for you with warm smiles and even warmer pastries.
                  </p>
                  <p>
                    We're a family-owned business, and you'll often see us behind the counter. Our menu is made fresh daily with a 
                    passion for quality and flavour. We bake many of our items in-house, which means better value for you — without 
                    compromising on quality.
                  </p>
                  <p>
                    Our space is designed to be more than just a café—it's a gathering place where memories are made, conversations 
                    flow, and community thrives. With both indoor and outdoor seating, we're a great spot for brunch, catch-ups, or 
                    even remote work. Welcome to Le Bay Café!
                  </p>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
