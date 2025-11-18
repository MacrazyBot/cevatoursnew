import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Check } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  features: string[];
  priceRange: string;
  images?: string[];
}

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceDetail | null;
}

const ServiceDetailModal = ({ isOpen, onClose, service }: ServiceDetailModalProps) => {
  if (!service) return null;

  const Icon = service.icon;

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/51999999999?text=Hola, quisiera información sobre el servicio de ${service.title}`,
      "_blank"
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-foreground flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
              <Icon className="w-8 h-8 text-primary-foreground" />
            </div>
            {service.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Description */}
          <div className="bg-gradient-to-r from-tropical-sand to-background p-6 rounded-xl border border-border">
            <p className="text-foreground leading-relaxed text-lg">
              {service.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-foreground flex items-center gap-2">
              ✨ Lo que incluye:
            </h4>
            <div className="grid gap-3">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className={`bg-gradient-to-br ${service.color} p-6 rounded-xl text-primary-foreground`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="opacity-90 text-sm mb-1">Rango de precios</p>
                <p className="text-2xl font-bold">{service.priceRange}</p>
              </div>
              <div className="text-5xl opacity-20">
                <Icon className="w-16 h-16" />
              </div>
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
              Solicitar Cotización
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              💬 Te responderemos en minutos por WhatsApp
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
