import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceDetailModal from "@/components/ServiceDetailModal";
import { 
  Car, 
  Hotel, 
  Plane, 
  Map, 
  Users, 
  Camera,
  Ship,
  Utensils,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Transporte",
    description: "Vehículos modernos y seguros para todos tus traslados",
    color: "from-tropical-ocean to-blue-500",
    features: [
      "Vehículos con aire acondicionado y seguro completo",
      "Conductores profesionales con años de experiencia",
      "Servicio de traslado aeropuerto-hotel-aeropuerto",
      "Disponibilidad 24/7 durante tu estadía",
      "Vehículos desde 4 hasta 20 pasajeros"
    ],
    priceRange: "Desde S/. 80"
  },
  {
    icon: Hotel,
    title: "Alojamiento",
    description: "Reservas en los mejores hoteles y resorts de la región",
    color: "from-tropical-sun to-amber-500",
    features: [
      "Hoteles 3, 4 y 5 estrellas en las mejores zonas",
      "Resorts frente al mar con todas las comodidades",
      "Bungalows y cabañas para experiencias únicas",
      "Descuentos especiales por reservas anticipadas",
      "Desayuno incluido en la mayoría de opciones"
    ],
    priceRange: "Desde S/. 120/noche"
  },
  {
    icon: Plane,
    title: "Vuelos",
    description: "Asesoría y gestión de boletos aéreos",
    color: "from-tropical-coral to-pink-500",
    features: [
      "Búsqueda de las mejores tarifas aéreas",
      "Gestión completa de reservas y cambios",
      "Vuelos nacionales e internacionales",
      "Asesoría para conexiones y escalas",
      "Seguimiento de tu vuelo en tiempo real"
    ],
    priceRange: "Precio según destino"
  },
  {
    icon: Map,
    title: "Tours Guiados",
    description: "Excursiones con guías locales expertos",
    color: "from-tropical-palm to-teal-600",
    features: [
      "Guías certificados y bilingües (Español/Inglés)",
      "Tours personalizados según tus intereses",
      "Grupos pequeños para experiencia más íntima",
      "Transporte y entradas incluidas",
      "Fotografías profesionales de cortesía"
    ],
    priceRange: "Desde S/. 150"
  },
  {
    icon: Users,
    title: "Grupos",
    description: "Paquetes especiales para grupos familiares y empresariales",
    color: "from-purple-500 to-indigo-500",
    features: [
      "Descuentos especiales para grupos de 10+ personas",
      "Itinerarios personalizados para empresas",
      "Actividades de team building en la playa",
      "Coordinación de eventos y celebraciones",
      "Atención preferencial y coordinador exclusivo"
    ],
    priceRange: "Cotización grupal"
  },
  {
    icon: Camera,
    title: "Fotografía",
    description: "Sesiones fotográficas profesionales en destinos paradisíacos",
    color: "from-rose-500 to-red-500",
    features: [
      "Fotógrafo profesional durante todo el tour",
      "Edición y entrega de fotos en alta resolución",
      "Sesiones al atardecer en las mejores playas",
      "Fotos de bodas, quinceañeros y eventos especiales",
      "Álbum digital incluido"
    ],
    priceRange: "Desde S/. 200"
  },
  {
    icon: Ship,
    title: "Deportes Acuáticos",
    description: "Surf, buceo, kayak y más actividades de playa",
    color: "from-cyan-500 to-blue-600",
    features: [
      "Clases de surf con instructores certificados",
      "Equipo completo de buceo y snorkel",
      "Tours en kayak por la costa",
      "Pesca deportiva en alta mar",
      "Seguro de accidentes incluido"
    ],
    priceRange: "Desde S/. 100"
  },
  {
    icon: Utensils,
    title: "Gastronomía",
    description: "Tours gastronómicos y reservas en restaurantes exclusivos",
    color: "from-orange-500 to-red-500",
    features: [
      "Degustación de ceviche y platos típicos norteños",
      "Visitas a mercados locales con chef",
      "Reservas en restaurantes gourmet",
      "Tour de comida callejera auténtica",
      "Clases de cocina peruana"
    ],
    priceRange: "Desde S/. 120"
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <>
      <ServiceDetailModal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    <section id="servicios" className="py-20 bg-gradient-to-b from-background to-tropical-sand">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para un viaje perfecto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="group hover:shadow-ocean transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-secondary overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <CardContent className="p-6 text-center space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${service.color} p-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm min-h-[40px]">
                    {service.description}
                  </p>
                  <Button
                    onClick={() => setSelectedService(service)}
                    variant="outline"
                    size="sm"
                    className="w-full mt-4 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                  >
                    Ver más detalles
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;
