
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="page-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-display font-bold">
                <span className="gold-gradient">Élysium</span>
              </span>
            </Link>
            <p className="text-muted-foreground">
              Experience the divine at Élysium, where culinary artistry meets unparalleled ambience. Our masterful chefs craft exquisite dining experiences that transcend the ordinary.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg mb-4 font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Menu", path: "/menu" },
                { name: "Reservations", path: "/reservations" },
                { name: "Private Events", path: "/events" },
                { name: "Gift Cards", path: "/gift-cards" },
                { name: "Careers", path: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="font-display text-lg mb-4 font-medium">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">123 Gourmet Avenue, Culinary District, CA 90210</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <a href="mailto:info@elysium.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@elysium.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-lg mb-4 font-medium">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Monday - Thursday:</span>
                <span className="text-foreground">5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Friday - Saturday:</span>
                <span className="text-foreground">5:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Sunday:</span>
                <span className="text-foreground">4:00 PM - 9:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Weekend Brunch:</span>
                <span className="text-foreground">11:00 AM - 2:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="font-display text-xl mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay updated with our latest offers, events, and culinary adventures.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md px-4 py-2 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                required
              />
              <button
                type="submit"
                className="btn-primary px-4 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} Élysium Restaurant. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
