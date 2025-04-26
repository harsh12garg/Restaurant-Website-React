
import { ReservationForm } from "@/components/ReservationForm";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Reservations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display mb-4">Make a Reservation</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Reserve your table at our restaurant and enjoy a wonderful dining experience
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6 shadow-lg">
            <h2 className="text-2xl font-display mb-6">Reservation Details</h2>
            <ReservationForm />
          </Card>
        </div>

        <div className="space-y-8">
          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-display mb-4">Reservation Policy</h2>
            <Separator className="my-4" />
            <div className="space-y-4 text-sm">
              <p>
                Reservations are held for 15 minutes past the scheduled time.
              </p>
              <p>
                For parties of 6 or more, please contact us directly at (123) 456-7890.
              </p>
              <p>
                A credit card is required to hold reservations for Friday and Saturday evenings.
              </p>
              <p>
                Cancellations must be made at least 24 hours in advance to avoid a cancellation fee.
              </p>
            </div>
          </Card>

          <Card className="p-6 shadow-lg">
            <h2 className="text-xl font-display mb-4">Private Events</h2>
            <Separator className="my-4" />
            <p className="text-sm mb-4">
              Looking to host a private event? Our elegant space is perfect for celebrations, corporate events, and special occasions.
            </p>
            <p className="text-sm">
              Contact our events team at events@elysium.com for more information about private dining options.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
