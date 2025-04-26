
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic to be implemented
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px]"
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
            <p className="text-muted-foreground">123 Gourmet Avenue</p>
            <p className="text-muted-foreground">New York, NY 10001</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <p className="text-muted-foreground">Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p className="text-muted-foreground">Saturday - Sunday: 10:00 AM - 11:00 PM</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">Phone: (555) 123-4567</p>
            <p className="text-muted-foreground">Email: info@elysium.com</p>
          </div>

          {/* Map placeholder - To be replaced with actual map integration */}
          <div className="relative h-[300px] rounded-lg overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop"
              alt="Location map"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
