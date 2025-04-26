
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const chefs = [
    {
      name: "Maria Rodriguez",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1969&auto=format&fit=crop",
      description: "With over 20 years of culinary experience in Michelin-starred restaurants.",
    },
    {
      name: "James Chen",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1977&auto=format&fit=crop",
      description: "Specializing in innovative dessert creations and French pastries.",
    },
    {
      name: "Sophie Laurent",
      role: "Sous Chef",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop",
      description: "Expert in modern French cuisine with a contemporary twist.",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display mb-4">Our Story</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Crafting unforgettable dining experiences since 1995
        </p>
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1974&auto=format&fit=crop"
            alt="Restaurant interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-display">A Legacy of Excellence</h2>
          <p className="text-muted-foreground">
            Founded in 1995, Élysium has been at the forefront of culinary innovation,
            combining traditional techniques with modern creativity to create
            unforgettable dining experiences.
          </p>
          <p className="text-muted-foreground">
            Our commitment to excellence has earned us numerous accolades, including
            three Michelin stars and the prestigious James Beard Award.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-display text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <Card key={chef.name} className="overflow-hidden">
              <div className="relative h-[300px]">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{chef.name}</h3>
                <p className="text-primary mb-2">{chef.role}</p>
                <p className="text-muted-foreground text-sm">{chef.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
