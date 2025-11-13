import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface Venue {
  id: number;
  name: string;
  sport: string;
  location: string;
  price: number;
  image: string;
}

interface BookingDialogProps {
  venue: Venue | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const BookingDialog = ({ venue, open, onOpenChange }: BookingDialogProps) => {
  const { toast } = useToast();
  const [userName, setUserName] = useState("");
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "✅ Booking Confirmed!",
      description: `${venue?.name} booked for ${userName} on ${date} at ${timeSlot}`,
    });

    // Reset form
    setUserName("");
    setDate("");
    setTimeSlot("");
    onOpenChange(false);
  };

  if (!venue) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Book: {venue.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="userName">Your Name</Label>
            <Input
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeSlot">Time Slot</Label>
            <Input
              id="timeSlot"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              placeholder="e.g. 5-6 PM"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-success hover:bg-success/90">
            Confirm Booking
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
