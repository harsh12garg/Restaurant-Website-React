
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FoodCard } from "@/components/FoodCard";

const menuItems = [
  {
    id: "1",
    name: "Truffle Risotto",
    description: "Creamy Arborio rice with black truffle shavings and Parmesan",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1673918979822-16d734926787?q=80&w=1965&auto=format&fit=crop",
    category: "Main Course",
    featured: true,
    ingredients: ["Arborio rice", "Black truffle", "Parmesan", "White wine"],
    dietary: ["vegetarian"],
  },
  {
    id: "2",
    name: "Wagyu Steak",
    description: "A5 grade Japanese Wagyu beef with roasted vegetables",
    price: 120.00,
    image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1931&auto=format&fit=crop",
    category: "Main Course",
    featured: true,
    spicyLevel: 0,
  },
  {
    id: "3",
    name: "Lobster Thermidor",
    description: "Fresh lobster in a rich brandy cream sauce",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1599744975253-e2200d77b2b9?q=80&w=1974&auto=format&fit=crop",
    category: "Seafood",
    featured: true,
  },
  {
    id: "4",
    name: "Spicy Tuna Tartare",
    description: "Fresh tuna with avocado, sesame oil, and wasabi",
    price: 26.00,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1974&auto=format&fit=crop",
    category: "Appetizers",
    spicyLevel: 2,
  }
];

const categories = ["All", "Main Course", "Seafood", "Appetizers"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = menuItems.filter(item => 
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display mb-4">Our Menu</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Experience culinary excellence with our carefully curated selection of dishes
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="min-w-[100px]"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <FoodCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
