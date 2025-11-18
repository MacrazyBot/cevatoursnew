import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import piuraMap from "@/assets/piura-map-interactive.svg";

interface Destination {
  name: string;
  beaches: string[];
  attractions: string[];
  description: string;
}

const destinations: Record<string, Destination> = {
  piura: {
    name: "Piura Ciudad",
    description: "Capital del departamento, conocida por su cultura vibrante y gastronomía.",
    beaches: [],
    attractions: ["Catedral de Piura", "Plaza de Armas", "Museo Municipal", "Iglesia San Francisco"]
  },
  paita: {
    name: "Paita",
    description: "Puerto histórico con hermosas playas y rica historia marítima.",
    beaches: ["Playa Colán", "Playa Yacila", "Playa Cangrejos"],
    attractions: ["Puerto de Paita", "Casa Museo de Paita", "Mirador Natural"]
  },
  talara: {
    name: "Talara",
    description: "Ciudad petrolera con playas espectaculares para surf y naturaleza.",
    beaches: ["Playa Lobitos", "Playa El Ñuro", "Playa Punta Balcones", "Playa Cabo Blanco"],
    attractions: ["Pozos Petroleros", "Punta Balcones", "Avistamiento de Tortugas"]
  },
  sullana: {
    name: "Sullana",
    description: "Conocida como la Perla del Chira, tierra de agricultura y naturaleza.",
    beaches: [],
    attractions: ["Represa de Poechos", "Valle del Chira", "Mirador de Sullana", "Coto de Caza El Angolo"]
  },
  sechura: {
    name: "Sechura",
    description: "Hogar del desierto más grande del Perú y hermosas playas.",
    beaches: ["Playa Chulliyachi", "Playa Matacaballo", "Playa Las Delicias"],
    attractions: ["Desierto de Sechura", "Laguna Ñapique", "Médanos de Sechura", "Estuario de Virrilá"]
  },
  ayabaca: {
    name: "Ayabaca",
    description: "Centro espiritual de la sierra piurana, famosa por su santuario.",
    beaches: [],
    attractions: ["Santuario del Señor Cautivo", "Bosque de Cuyas", "Cascadas de Samanga", "Aypate"]
  },
  huancabamba: {
    name: "Huancabamba",
    description: "Tierra mística de lagunas sagradas y curanderos tradicionales.",
    beaches: [],
    attractions: ["Las Huaringas (Lagunas)", "Catarata Chorro Blanco", "Shimbe", "Sondorillo"]
  },
  mancora: {
    name: "Máncora",
    description: "El paraíso playero más famoso del norte peruano.",
    beaches: ["Playa Máncora", "Playa Vichayito", "Playa Los Órganos", "Playa Punta Sal"],
    attractions: ["Surf y Deportes Acuáticos", "Avistamiento de Ballenas", "Vida Nocturna", "Termas de Hervideros"]
  }
};

const PiuraMapModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);

  const handleWhatsApp = (destination: string) => {
    window.open(
      `https://wa.me/51999999999?text=Hola, quisiera información sobre tours a ${destination}`,
      "_blank"
    );
  };

  // Definir áreas clickeables con coordenadas relativas (porcentaje)
  const clickableAreas = [
    { name: 'talara', destination: 'talara', top: '15%', left: '10%', width: '20%', height: '20%' },
    { name: 'paita', destination: 'paita', top: '32%', left: '15%', width: '15%', height: '15%' },
    { name: 'sullana', destination: 'sullana', top: '25%', left: '32%', width: '18%', height: '18%' },
    { name: 'piura', destination: 'piura', top: '42%', left: '35%', width: '18%', height: '18%' },
    { name: 'sechura', destination: 'sechura', top: '60%', left: '28%', width: '20%', height: '20%' },
    { name: 'ayabaca', destination: 'ayabaca', top: '18%', left: '58%', width: '20%', height: '22%' },
    { name: 'huancabamba', destination: 'huancabamba', top: '42%', left: '65%', width: '22%', height: '25%' },
    { name: 'mancora', destination: 'mancora', top: '8%', left: '8%', width: '15%', height: '12%' },
  ];

  const handleAreaClick = (destinationKey: string) => {
    if (destinations[destinationKey]) {
      setSelectedDestination(destinations[destinationKey]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto bg-background border-2 border-primary/20">
        <DialogHeader>
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-tropical opacity-20 rounded-full blur-2xl" />
            <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-gradient-ocean opacity-20 rounded-full blur-2xl" />
            <DialogTitle className="relative text-3xl font-bold bg-gradient-tropical bg-clip-text text-transparent flex items-center gap-2">
              <MapPin className="w-7 h-7 text-primary animate-bounce" />
              Explora los Destinos de Piura
            </DialogTitle>
            <p className="text-muted-foreground mt-2 flex items-center gap-2">
              <span>🗺️</span>
              Haz clic en cualquier distrito del mapa para descubrir sus maravillas
            </p>
          </div>
        </DialogHeader>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mt-6 mb-4">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-xl border border-primary/20 text-center">
            <div className="text-2xl mb-1">🏖️</div>
            <div className="text-sm font-bold text-foreground">+50 Playas</div>
            <div className="text-xs text-muted-foreground">para descubrir</div>
          </div>
          <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 p-4 rounded-xl border border-secondary/20 text-center">
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-sm font-bold text-foreground">8 Distritos</div>
            <div className="text-xs text-muted-foreground">únicos</div>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-4 rounded-xl border border-accent/20 text-center">
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-sm font-bold text-foreground">Todo el año</div>
            <div className="text-xs text-muted-foreground">clima perfecto</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          {/* Interactive Map */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Mapa Interactivo</span>
            </div>
            <div 
              className="relative border-2 border-primary/30 rounded-xl overflow-hidden bg-card shadow-lg hover:shadow-tropical transition-shadow duration-300"
              style={{ 
                minHeight: "500px",
              }}
            >
              {/* Mapa base */}
              <img 
                src={piuraMap} 
                alt="Mapa Interactivo de Piura" 
                className="w-full h-auto"
                style={{
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                  maxHeight: "600px",
                  objectFit: "contain",
                  display: "block"
                }}
              />
              
              {/* Áreas interactivas superpuestas */}
              <div className="absolute inset-0">
                {clickableAreas.map((area) => (
                  <div
                    key={area.name}
                    onClick={() => handleAreaClick(area.destination)}
                    onMouseEnter={() => setHoveredDistrict(area.name)}
                    onMouseLeave={() => setHoveredDistrict(null)}
                    className="absolute cursor-pointer transition-all duration-200"
                    style={{
                      top: area.top,
                      left: area.left,
                      width: area.width,
                      height: area.height,
                      zIndex: hoveredDistrict === area.name ? 10 : 1,
                    }}
                    title={destinations[area.destination]?.name || area.name}
                  >
                    {hoveredDistrict === area.name && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-tropical text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap shadow-2xl z-20 animate-scale-in border-2 border-primary/20">
                        📍 {destinations[area.destination]?.name || area.name}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-tropical-sand/50 to-transparent p-3 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-foreground font-medium flex items-center gap-2">
                💡 <span className="font-bold">Tip:</span> Pasa el mouse sobre cada distrito y haz clic para más información
              </p>
            </div>
          </div>

          {/* Destination Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-semibold text-foreground">Información del Destino</span>
            </div>
            {selectedDestination ? (
              <div className="space-y-5 animate-fade-in">
                <div className="relative bg-gradient-tropical p-6 rounded-xl text-primary-foreground shadow-tropical overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/10 rounded-full -ml-12 -mb-12" />
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-2">{selectedDestination.name}</h3>
                    <p className="opacity-95 text-base leading-relaxed">
                      {selectedDestination.description}
                    </p>
                  </div>
                </div>

                {selectedDestination.beaches.length > 0 && (
                  <div className="bg-card p-5 rounded-xl border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
                    <h4 className="font-bold text-xl mb-4 text-secondary flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      🏖️ Playas
                    </h4>
                    <ul className="space-y-3">
                      {selectedDestination.beaches.map((beach, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <span className="text-primary text-xl mt-0.5">•</span>
                          <button
                            onClick={() => handleWhatsApp(`${beach} en ${selectedDestination.name}`)}
                            className="text-foreground group-hover:text-primary transition-colors text-left hover:underline cursor-pointer"
                          >
                            {beach}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedDestination.attractions.length > 0 && (
                  <div className="bg-card p-5 rounded-xl border-2 border-accent/20 hover:border-accent/40 transition-colors">
                    <h4 className="font-bold text-xl mb-4 text-accent flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      🎯 Atractivos Turísticos
                    </h4>
                    <ul className="space-y-3">
                      {selectedDestination.attractions.map((attraction, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <span className="text-primary text-xl mt-0.5">•</span>
                          <button
                            onClick={() => handleWhatsApp(`${attraction} en ${selectedDestination.name}`)}
                            className="text-foreground group-hover:text-primary transition-colors text-left hover:underline cursor-pointer"
                          >
                            {attraction}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button
                    onClick={() => handleWhatsApp(selectedDestination.name)}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all h-12 text-base font-semibold"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Cotizar viaje a {selectedDestination.name}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center p-12 bg-gradient-to-br from-tropical-sand/50 to-background rounded-xl border-2 border-dashed border-primary/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
                <div className="space-y-4 relative z-10">
                  <MapPin className="w-20 h-20 mx-auto text-primary/60 animate-bounce" />
                  <div className="space-y-2">
                    <p className="text-foreground font-semibold text-lg">
                      ¡Selecciona un destino!
                    </p>
                    <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                      Haz clic en cualquier zona del mapa para descubrir playas paradisíacas y atractivos turísticos únicos
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center pt-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse delay-100" />
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-200" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Access Buttons */}
        <div className="mt-8 pt-6 border-t-2 border-border relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-1 rounded-full">
            <span className="text-xs font-bold text-primary-foreground">Navegación Rápida</span>
          </div>
          <h4 className="font-semibold mb-4 text-base text-foreground flex items-center gap-2 pt-2">
            <span className="text-xl">✨</span>
            Acceso rápido a todos los destinos
          </h4>
          <div className="flex flex-wrap gap-2">
            {Object.entries(destinations).map(([key, dest]) => (
              <Button
                key={key}
                variant="outline"
                size="sm"
                onClick={() => setSelectedDestination(dest)}
                className="hover:bg-gradient-tropical hover:border-primary hover:text-primary-foreground hover:scale-105 transition-all font-medium group"
              >
                <span className="group-hover:scale-110 transition-transform inline-block">
                  {dest.name}
                </span>
              </Button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4 italic">
            🌟 Haz clic en cualquier destino para explorar sus maravillas
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PiuraMapModal;
