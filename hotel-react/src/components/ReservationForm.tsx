
import { useState } from "react";
import { Calendar, Clock, User, Users } from "lucide-react";

export function ReservationForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log({ date, time, guests, name, email, phone, specialRequests });
    alert("Reservation submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date Selection */}
        <div className="space-y-2">
          <label htmlFor="date" className="block text-sm font-medium">
            Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="pl-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>
        
        {/* Time Selection */}
        <div className="space-y-2">
          <label htmlFor="time" className="block text-sm font-medium">
            Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="pl-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">Select time</option>
              <option value="17:00">5:00 PM</option>
              <option value="17:30">5:30 PM</option>
              <option value="18:00">6:00 PM</option>
              <option value="18:30">6:30 PM</option>
              <option value="19:00">7:00 PM</option>
              <option value="19:30">7:30 PM</option>
              <option value="20:00">8:00 PM</option>
              <option value="20:30">8:30 PM</option>
              <option value="21:00">9:00 PM</option>
              <option value="21:30">9:30 PM</option>
            </select>
          </div>
        </div>
        
        {/* Number of Guests */}
        <div className="space-y-2">
          <label htmlFor="guests" className="block text-sm font-medium">
            Number of Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="pl-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your full name"
              required
            />
          </div>
        </div>
        
        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your email address"
            required
          />
        </div>
        
        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your phone number"
            required
          />
        </div>
      </div>
      
      {/* Special Requests */}
      <div className="space-y-2">
        <label htmlFor="requests" className="block text-sm font-medium">
          Special Requests (Optional)
        </label>
        <textarea
          id="requests"
          value={specialRequests}
          onChange={(e) => setSpecialRequests(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
          placeholder="Any dietary restrictions, occasion, or seating preferences"
        />
      </div>
      
      <button
        type="submit"
        className="btn-primary w-full py-3 text-base font-medium"
      >
        Book Reservation
      </button>
      
      <p className="text-xs text-muted-foreground text-center mt-4">
        By making a reservation, you agree to our reservation policy. Confirmation will be sent to your email.
      </p>
    </form>
  );
}
