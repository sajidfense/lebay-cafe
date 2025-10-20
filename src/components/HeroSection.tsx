import { useEffect, useRef } from "react";
import heroImage from "@/assets/hero-dish1.jpg";
import dishDetail from "@/assets/dish-detail.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background" aria-label="Hero section">
      {/* Background Image with Parallax */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full transition-transform duration-100"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Tagline */}
        <p className="text-sm md:text-base font-sans text-background/90 mb-8 animate-fade-in tracking-widest uppercase" role="doc-subtitle">
          Your Local Favourite in Wynnum
        </p>

        {/* Hero Title with Image Overlay */}
        <div className="relative inline-block mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-semibold text-background leading-none animate-fade-in-up">
            Great{" "}
            <span className="relative inline-block mx-4 md:mx-8">
              <span className="opacity-0" aria-hidden="true">(img)</span>
              {/* <img
                src={dishDetail}
                alt="Le Bay Café signature gourmet coffee and pastries"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-40 md:w-48 md:h-56 object-cover rotate-6 shadow-2xl border-4 border-background animate-scale-in"
                style={{ animationDelay: "0.3s" }}
                loading="eager"
              /> */}
            </span>{" "}
            Coffee
          </h1>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce mt-16">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full mx-auto flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-background/50 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
