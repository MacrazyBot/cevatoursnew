import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DestinationDetailModal from "@/components/DestinationDetailModal";
import PiuraMapModal from "@/components/PiuraMapModal";
import { MapPin, Phone, Waves, Sun, Mountain, Eye } from "lucide-react";

import mancoraImg from "@/assets/destinations/mancora.jpg";
import caboBlancoImg from "@/assets/destinations/cabo-blanco.jpg";
import vichayitoImg from "@/assets/destinations/vichayito.jpg";
import huaringasImg from "@/assets/destinations/huaringas.jpg";
import colanImg from "@/assets/destinations/colan.jpg";
import losOrganosImg from "@/assets/destinations/los-organos.jpg";

const destinations = [
  {
    name: "Máncora",
    description: "Paraíso playero perfecto para surf y relax",
    fullDescription: "Máncora es el destino playero más popular del norte peruano, famoso por sus olas perfectas.",
    icon: Waves,
    color: "from-blue-400 to-cyan-300",
    image: mancoraImg,
    highlights: ["Olas perfectas", "Vida nocturna", "Aguas cálidas", "Hoteles variados"],
    activities: ["Surf", "Pesca", "Deportes acuáticos", "Masajes", "Observación tortugas"],
    bestTime: "Todo el año, especialmente diciembre-marzo."
  },
  {
    name: "Cabo Blanco",
    description: "Spot legendario de pesca y surf",
    fullDescription: "Cabo Blanco atrajo a Hemingway. Famoso por pesca de marlín y surf de clase mundial.",
    icon: Sun,
    color: "from-orange-400 to-yellow-300",
    image: caboBlancoImg,
    highlights: ["Pesca marlín", "Olas premium", "Historia Hemingway", "Auténtico"],
    activities: ["Pesca deportiva", "Surf", "Visitas históricas", "Gastronomía", "Fotografía"],
    bestTime: "Abril-noviembre pesca, diciembre-marzo surf."
  },
  {
    name: "Vichayito",
    description: "Playa tranquila de aguas cristalinas",
    fullDescription: "Vichayito ofrece aguas cristalinas y arena blanca. Perfecta para familias y relax.",
    icon: Waves,
    color: "from-teal-400 to-blue-300",
    image: vichayitoImg,
    highlights: ["Aguas cristalinas", "Tranquila", "Resorts boutique", "Ideal familias"],
    activities: ["Snorkel", "Kayak", "Yoga", "Caminatas", "Spa"],
    bestTime: "Todo el año, ideal enero-marzo."
  },
  {
    name: "Las Huaringas",
    description: "Lagunas místicas en la sierra piurana",
    fullDescription: "Lagunas sagradas conocidas por poderes curativos y experiencias espirituales únicas.",
    icon: Mountain,
    color: "from-green-400 to-emerald-300",
    image: huaringasImg,
    highlights: ["Lagunas sagradas", "Paisajes andinos", "Curanderos", "Espiritualidad"],
    activities: ["Ceremonias sanación", "Baños lagunas", "Trekking", "Observación fauna", "Retiros"],
    bestTime: "Mayo-octubre (temporada seca)."
  },
  {
    name: "Colán",
    description: "Hermosa bahía con rica historia",
    fullDescription: "Colán combina historia colonial, playas hermosas y tradición pesquera auténtica.",
    icon: Sun,
    color: "from-amber-400 to-orange-300",
    image: colanImg,
    highlights: ["Iglesia colonial", "Playa extensa", "Pueblo pesquero", "Gastronomía"],
    activities: ["Iglesia histórica", "Ceviche fresco", "Paseos bote", "Fotografía", "Artesanías"],
    bestTime: "Todo el año, especialmente diciembre-abril."
  },
  {
    name: "Los Órganos",
    description: "Avistamiento de ballenas y tortugas",
    fullDescription: "Paraíso de vida marina. Ballenas jorobadas julio-octubre. Tortugas todo el año.",
    icon: Waves,
    color: "from-indigo-400 to-purple-300",
    image: losOrganosImg,
    highlights: ["Ballenas jorobadas", "Tortugas marinas", "Playas vírgenes", "Buceo excelente"],
    activities: ["Avistamiento ballenas", "Buceo tortugas", "Snorkel", "Kayak", "Fotografía marina"],
    bestTime: "Julio-octubre ballenas, todo el año tortugas."
  }
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);
  const [mapModalOpen, setMapModalOpen] = useState(false);

  const handleWhatsApp = (destination: string) => {
    window.open(`https://wa.me/51999999999?text=Hola, quisiera información sobre tours a ${destination}`, "_blank");
  };

  return (
    <>
      <DestinationDetailModal isOpen={!!selectedDestination} onClose={() => setSelectedDestination(null)} destination={selectedDestination} />
      <PiuraMapModal isOpen={mapModalOpen} onClose={() => setMapModalOpen(false)} />
      <section id="destinos" className="py-20 bg-tropical-sand">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Destinos Populares</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Explora los lugares más hermosos de Piura</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {destinations.map((dest, idx) => {
              const Icon = dest.icon;
              return (
                <Card key={idx} className="group hover:shadow-tropical transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${dest.color}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex items-center gap-2 text-tropical-sand">
                        <div className={`p-1.5 rounded-lg bg-gradient-to-br ${dest.color}`}><Icon className="w-4 h-4" /></div>
                        <h3 className="text-xl font-bold drop-shadow-lg">{dest.name}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5 space-y-4">
                    <p className="text-muted-foreground text-sm min-h-[40px]">{dest.description}</p>
                    <div className="flex gap-2">
                      <Button size="sm" onClick={() => handleWhatsApp(dest.name)} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        <Phone className="w-3.5 h-3.5 mr-1.5" />Cotizar
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => setSelectedDestination(dest)} className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                        <Eye className="w-3.5 h-3.5 mr-1.5" />Ver más
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <Button size="lg" onClick={() => setMapModalOpen(true)} className="border-2 bg-gradient-tropical text-primary-foreground hover:shadow-tropical">
              <MapPin className="w-5 h-5 mr-2" />Ver Mapa Interactivo de Piura
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
