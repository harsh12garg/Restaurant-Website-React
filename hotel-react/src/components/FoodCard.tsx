
import { useState } from "react";
import { ShoppingCart, Heart } from "lucide-react";

interface FoodCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured?: boolean;
  ingredients?: string[];
  dietary?: string[];  // e.g., "vegetarian", "gluten-free", etc.
  spicyLevel?: number; // 0-3 where 0 is not spicy and 3 is very spicy
}

export function FoodCard({
  id,
  name,
  description,
  price,
  image,
  category,
  featured = false,
  ingredients = [],
  dietary = [],
  spicyLevel = 0,
}: FoodCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const handleAddToCart = () => {
    // Cart functionality to be implemented
    console.log(`Added ${name} to cart`);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-card shadow-md card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Favorite Button */}
      <button
        className="absolute top-2 right-2 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full transition-all hover:bg-background"
        onClick={handleToggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-foreground"}`}
        />
      </button>
      
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-2 left-2 z-10 py-1 px-3 bg-primary text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wider">
          Featured
        </div>
      )}

      {/* Food Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
        
        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 z-10 py-1 px-3 bg-background/80 backdrop-blur-sm text-foreground font-semibold rounded-md">
          {formattedPrice}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-display text-xl font-medium">{name}</h3>
            <p className="text-xs text-primary uppercase tracking-wider mt-1">{category}</p>
          </div>
          
          {/* Spicy Indicator */}
          {spicyLevel > 0 && (
            <div className="flex">
              {Array.from({ length: spicyLevel }).map((_, index) => (
                <span key={index} className="text-red-500">🌶️</span>
              ))}
            </div>
          )}
        </div>
        
        <p className="text-muted-foreground mt-3 text-sm line-clamp-2">{description}</p>
        
        {/* Dietary Tags */}
        {dietary.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {dietary.map((diet) => (
              <span 
                key={diet}
                className="px-2 py-1 bg-accent text-xs rounded-full text-accent-foreground"
              >
                {diet}
              </span>
            ))}
          </div>
        )}
        
        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full btn-primary py-2 flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
