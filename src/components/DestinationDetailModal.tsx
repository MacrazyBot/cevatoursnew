import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Star } from "lucide-react";

interface DestinationDetail {
  name: string;
  description: string;
  image?: string;
  highlights: string[];
  activities: string[];
  bestTime: string;
}

interface DestinationDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  destination: DestinationDetail | null;
}

const DestinationDetailModal = ({ isOpen, onClose, destination }: DestinationDetailModalProps) => {
  if (!destination) return null;

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/51999999999?text=Hola, quisiera información sobre tours a ${destination.name}`,
      "_blank"
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-tropical bg-clip-text text-transparent flex items-center gap-3">
            <MapPin className="w-8 h-8 text-primary" />
            {destination.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Image */}
          {destination.image && (
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-tropical-sand">
                <p className="text-sm font-medium">📍 {destination.name}, Piura</p>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="bg-gradient-to-r from-tropical-sand to-background p-6 rounded-xl border border-border">
            <p className="text-foreground leading-relaxed text-lg">
              {destination.description}
            </p>
          </div>

          {/* Best Time */}
          <div className="bg-gradient-tropical p-5 rounded-xl text-primary-foreground">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-2">Mejor época para visitar</h4>
                <p className="opacity-95">{destination.bestTime}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Highlights */}
            <div className="bg-card p-5 rounded-xl border-2 border-secondary/20">
              <h4 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                ✨ Lo más destacado
              </h4>
              <ul className="space-y-3">
                {destination.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="text-primary text-xl mt-0.5">•</span>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="bg-card p-5 rounded-xl border-2 border-accent/20">
              <h4 className="text-xl font-bold text-accent mb-4 flex items-center gap-2">
                🎯 Actividades disponibles
              </h4>
              <ul className="space-y-3">
                {destination.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <span className="text-primary text-xl mt-0.5">•</span>
                    <span className="text-foreground">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3 pt-4">
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              size="lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Cotizar viaje a {destination.name}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              💬 Te responderemos en minutos por WhatsApp con opciones personalizadas
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationDetailModal;
