import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

const MenuSection = () => {
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
      className="grid md:grid-cols-2 min-h-[600px]"
      id="menu"
    >
      {/* Image Side */}
      <div
        className={`relative overflow-hidden transition-all duration-1000 delay-100 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <img
          src={restaurantInterior}
          alt="Le Bay Café cozy interior with indoor and outdoor seating in Wynnum"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      {/* Content Side */}
      <div
        className={`bg-accent text-accent-foreground flex items-center justify-center p-12 md:p-16 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium mb-6 leading-tight">
            Fresh, delicious food made daily
          </h2>

          <p className="text-sm md:text-base mb-8 leading-relaxed font-sans opacity-90">
            Grab a pastry and coffee before your movie at the cinemas!<br/>• House-baked pastries & cakes<br/>• Gourmet breakfast & lunch <br/>• Healthy, seasonal dishes<br/>• 
            Premium espresso coffee expertly brewed<br/>• Smoothies, juices & more<br/>
          </p>

          <a
  href="https://www.canva.com/design/DAGs_zRytEM/p3axNhb1r11-vmmwUcj_Iw/view?utm_content=DAGs_zRytEM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hce13cbc78c"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="border-accent-foreground/30 hover:bg-accent-foreground/10"
  >
    Our Menu
  </Button>
</a>

        </div>
      </div>
    </section>
  );
};

export default MenuSection;
