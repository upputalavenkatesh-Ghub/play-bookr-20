import { useState } from "react";
import { VenueCard } from "@/components/VenueCard";
import { BookingDialog } from "@/components/BookingDialog";

interface Venue {
  id: number;
  name: string;
  sport: string;
  location: string;
  price: number;
  image: string;
}

const venues: Venue[] = [
  {
    id: 1,
    name: "Box Cricket Arena",
    sport: "Cricket",
    location: "Downtown Sports Complex",
    price: 800,
    image: "https://images.unsplash.com/photo-1600061676761-3d9f4e6a3f44?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Goal Masters",
    sport: "Football",
    location: "City Turf Ground",
    price: 1000,
    image: "https://images.unsplash.com/photo-1600962815726-457c00b86b7b?auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Smash Volley Court",
    sport: "Volleyball",
    location: "East Park Stadium",
    price: 700,
    image: "https://images.unsplash.com/photo-1576485290814-1c72aa4bbb66?auto=format&fit=crop&w=800&q=60",
  },
];

const Index = () => {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleBooking = (venue: Venue) => {
    setSelectedVenue(venue);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-6 px-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            🏏 Onplay — Book Your Game
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
          Available Venues
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue) => (
            <VenueCard
              key={venue.id}
              {...venue}
              onBook={() => handleBooking(venue)}
            />
          ))}
        </div>
      </main>

      <BookingDialog
        venue={selectedVenue}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
};

export default Index;
