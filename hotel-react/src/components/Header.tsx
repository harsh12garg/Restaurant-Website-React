
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Reservations", path: "/reservations" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 shadow-md backdrop-blur-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="page-container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-display font-bold">
              <span className="gold-gradient">Élysium</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-foreground/90 hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side icons */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          
          <Link 
            to="/cart" 
            className="relative p-2 text-foreground/90 hover:text-primary rounded-full transition-colors"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          
          <Link
            to="/login"
            className="p-2 text-foreground/90 hover:text-primary rounded-full transition-colors"
            aria-label="User account"
          >
            <User className="h-5 w-5" />
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground/90 hover:text-primary rounded-full transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <nav className="flex flex-col py-4 px-6 space-y-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary py-2 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
