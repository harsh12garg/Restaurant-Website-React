
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Truffle Risotto",
      price: 32.00,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1673918979822-16d734926787?q=80&w=1965&auto=format&fit=crop",
    },
    {
      id: "2",
      name: "Wagyu Steak",
      price: 120.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1931&auto=format&fit=crop",
    },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-display mb-8">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-muted-foreground">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full">Proceed to Checkout</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
