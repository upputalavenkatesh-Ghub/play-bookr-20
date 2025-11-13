import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VenueCardProps {
  name: string;
  sport: string;
  location: string;
  price: number;
  image: string;
  onBook: () => void;
}

export const VenueCard = ({ name, sport, location, price, image, onBook }: VenueCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-semibold text-foreground">{name}</h3>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Sport:</span> {sport}
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Location:</span> {location}
            </p>
            <p className="text-lg font-bold text-primary">₹{price}/hour</p>
          </div>
          <Button 
            onClick={onBook} 
            className="w-full mt-4 transition-all duration-200"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
