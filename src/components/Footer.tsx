import { Facebook, Instagram } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16" id="contact" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-4">Le Bay Café</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              A family-owned local favourite serving Wynnum with great coffee, delicious food, and warm hospitality.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>90 Berrima Street</p>
              <p>Wynnum QLD</p>
              <p className="mt-4">info@lebaycafe.com.au</p>
              <p>
                <a href="tel:+61493848179" className="hover:text-primary-foreground transition-colors">
                  +61 493 848 179
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-medium tracking-wider uppercase mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Monday - Friday: 6:30 AM - 2:00 PM</p>
              <p>Saturday - Sunday: 7:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
<div className="flex justify-center gap-6 mt-8">
  <a
    href="https://www.instagram.com/lebaycafe/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary-foreground text-primary-foreground/80 transition-colors"
    aria-label="Instagram"
  >
    <Instagram className="w-5 h-5" />
  </a>
  <a
    href="https://www.facebook.com/TheBayCafee"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary-foreground text-primary-foreground/80 transition-colors"
    aria-label="Facebook"
  >
    <Facebook className="w-5 h-5" />
  </a>
</div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>© {currentYear} Le Bay Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
