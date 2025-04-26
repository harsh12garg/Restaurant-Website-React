
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { FoodCard } from "@/components/FoodCard";
import { ReservationForm } from "@/components/ReservationForm";
import { Star, ArrowRight, Calendar, Gift, Globe } from "lucide-react";

// Sample data for featured dishes
const featuredDishes = [
  {
    id: "1",
    name: "Wagyu Filet Mignon",
    description: "Prime A5 Japanese Wagyu filet with truffle butter, roasted asparagus, and potato purée.",
    price: 85,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070",
    category: "Main Course",
    featured: true,
    ingredients: ["A5 Wagyu Beef", "Truffle Butter", "Asparagus", "Potato Purée"],
    dietary: ["Gluten-Free"],
    spicyLevel: 0
  },
  {
    id: "2",
    name: "Lobster Risotto",
    description: "Creamy saffron risotto with Maine lobster, aged Parmesan, and fresh herbs.",
    price: 65,
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=2070",
    category: "Pasta & Risotto",
    featured: true,
    ingredients: ["Maine Lobster", "Arborio Rice", "Saffron", "Parmesan", "White Wine"],
    dietary: ["Gluten-Free"],
    spicyLevel: 0
  },
  {
    id: "3",
    name: "Truffle Mushroom Wellington",
    description: "Wild mushrooms and truffle duxelles wrapped in puff pastry with red wine reduction.",
    price: 55,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=2070",
    category: "Vegetarian",
    featured: true,
    ingredients: ["Wild Mushrooms", "Black Truffle", "Puff Pastry", "Spinach"],
    dietary: ["Vegetarian"],
    spicyLevel: 0
  },
  {
    id: "4",
    name: "Chilean Sea Bass",
    description: "Miso-glazed Chilean sea bass with shiitake mushrooms and ginger-scallion sauce.",
    price: 75,
    image: "https://images.unsplash.com/photo-1515669097368-22e68427d265?auto=format&fit=crop&q=80&w=2070",
    category: "Seafood",
    featured: true,
    ingredients: ["Chilean Sea Bass", "Miso Paste", "Shiitake Mushrooms", "Ginger", "Scallions"],
    dietary: ["Gluten-Free"],
    spicyLevel: 1
  }
];

// Sample testimonials
const testimonials = [
  {
    id: "1",
    name: "Emily Johnson",
    rating: 5,
    comment: "An extraordinary dining experience from start to finish. The tasting menu transported us on a culinary journey we won't soon forget.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=256"
  },
  {
    id: "2",
    name: "Michael Chen",
    rating: 5,
    comment: "The wine pairing was impeccable, and the service was attentive without being intrusive. Will definitely be returning for special occasions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256"
  },
  {
    id: "3",
    name: "Sophia Rodriguez",
    rating: 5,
    comment: "Chef Laurent's creativity shines through in every dish. The attention to detail in both presentation and flavor is unmatched.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256"
  }
];

export default function Index() {
  const [activeTab, setActiveTab] = useState("form");
  
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070"
            alt="Elegant restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div> {/* Overlay */}
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in">
            Experience Culinary <span className="gold-gradient">Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-in-bottom" style={{ animationDelay: "300ms" }}>
            Indulge in an unforgettable dining journey crafted by internationally acclaimed chefs using only the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom" style={{ animationDelay: "600ms" }}>
            <Button to="/menu" size="lg" variant="default">
              Explore Menu
            </Button>
            <Button to="/reservations" size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Reserve a Table
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2">Scroll to discover</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
              <div className="w-1 h-2 bg-white/60 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-primary text-sm tracking-wider uppercase font-medium">Our Story</span>
                <div className="h-0.5 w-20 bg-primary mt-1"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium">Crafting Unforgettable Dining Experiences Since 2010</h2>
              <p className="text-muted-foreground">
                Founded by acclaimed chef Laurent Dubois, Élysium was born from a vision to create a dining sanctuary where culinary art meets impeccable service. Drawing inspiration from global cuisines and using only the finest seasonal ingredients, our restaurant has become a beacon for food enthusiasts and connoisseurs.
              </p>
              <p className="text-muted-foreground">
                Every detail, from our carefully curated wine selection to our handcrafted desserts, is designed to take you on a memorable gastronomic journey. We invite you to experience the passion, creativity, and excellence that defines Élysium.
              </p>
              <Button to="/about" variant="outline">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=2070" 
                  alt="Chef preparing food" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 w-40 h-40 rounded-lg overflow-hidden border-4 border-background shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=987" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Dishes */}
      <section className="section-padding bg-accent/30">
        <div className="page-container">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-primary text-sm tracking-wider uppercase font-medium">Menu Highlights</span>
              <div className="h-0.5 w-20 bg-primary mt-1 mx-auto"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-medium mt-4 mb-6">Our Signature Dishes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Indulge in our chef's most celebrated creations, featuring seasonal ingredients and innovative techniques that exemplify our culinary philosophy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map((dish) => (
              <FoodCard key={dish.id} {...dish} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/menu" variant="default" className="group">
              View Full Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Reservation Section */}
      <section className="section-padding bg-background">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="bg-card rounded-xl shadow-lg p-8">
              <h2 className="text-2xl md:text-3xl font-display font-medium mb-6">Reserve Your Table</h2>
              <ReservationForm />
            </div>
            
            {/* Testimonials */}
            <div className="space-y-6 lg:pl-6">
              <h2 className="text-2xl md:text-3xl font-display font-medium">What Our Guests Say</h2>
              
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-card rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm italic">"{testimonial.comment}"</p>
                  </div>
                ))}
              </div>
              
              <div className="pt-4">
                <Link to="/testimonials" className="text-primary flex items-center hover:underline">
                  Read more reviews
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section-padding bg-accent/30">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Private Events */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">Private Events</h3>
              <p className="text-muted-foreground mb-4">
                Host your special occasions in our elegant private dining rooms, with customized menus and dedicated service.
              </p>
              <Link to="/events" className="text-primary flex items-center justify-center hover:underline">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Gift Cards */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">Gift Cards</h3>
              <p className="text-muted-foreground mb-4">
                Give the gift of an extraordinary dining experience with our digital or physical gift cards, perfect for any occasion.
              </p>
              <Link to="/gift-cards" className="text-primary flex items-center justify-center hover:underline">
                Purchase Now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            {/* Locations */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">Locations</h3>
              <p className="text-muted-foreground mb-4">
                Visit any of our three elegant locations in New York, Chicago, and San Francisco, each with its unique charm.
              </p>
              <Link to="/locations" className="text-primary flex items-center justify-center hover:underline">
                Find Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 px-6 bg-primary/5">
        <div className="page-container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl font-medium mb-4">Join Our Culinary Community</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for exclusive offers, recipes, and event announcements.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-md px-4 py-2 bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                required
              />
              <button
                type="submit"
                className="btn-primary px-6 py-2 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
