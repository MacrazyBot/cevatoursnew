import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const packages = [
  {
    name: "Escapada Playera",
    duration: "3 días / 2 noches",
    price: "Desde S/ 450",
    popular: false,
    features: [
      "Alojamiento en hotel 3 estrellas",
      "Desayunos incluidos",
      "Tour a Máncora y Punta Sal",
      "Transporte terrestre",
      "Guía turístico"
    ]
  },
  {
    name: "Aventura Completa",
    duration: "5 días / 4 noches",
    price: "Desde S/ 850",
    popular: true,
    features: [
      "Alojamiento en hotel 4 estrellas",
      "Pensión completa",
      "Tours a playas del norte",
      "Visita a Las Huaringas",
      "Transporte y guía incluidos",
      "Actividades acuáticas"
    ]
  },
  {
    name: "Experiencia Premium",
    duration: "7 días / 6 noches",
    price: "Desde S/ 1,450",
    popular: false,
    features: [
      "Resort 5 estrellas frente al mar",
      "All inclusive",
      "Tours privados personalizados",
      "Clases de surf",
      "Spa y masajes",
      "Cena romántica en la playa",
      "Traslados en vehículo premium"
    ]
  }
];

const Packages = () => {
  const handleWhatsApp = (packageName: string) => {
    window.open(
      `https://wa.me/51999999999?text=Hola, quisiera información sobre el paquete ${packageName}`,
      "_blank"
    );
  };

  return (
    <section id="paquetes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Paquetes Turísticos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el paquete perfecto para tu aventura en Piura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, idx) => (
            <Card
              key={idx}
              className={`relative hover:shadow-2xl transition-all duration-300 ${
                pkg.popular
                  ? 'border-4 border-primary scale-105 shadow-tropical'
                  : 'hover:-translate-y-2 border-2'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-tropical text-primary-foreground px-4 py-1 text-sm font-bold">
                    MÁS POPULAR
                  </Badge>
                </div>
              )}

              <CardHeader className={pkg.popular ? 'bg-gradient-tropical text-primary-foreground' : ''}>
                <CardTitle className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <p className={`text-sm ${pkg.popular ? 'opacity-90' : 'text-muted-foreground'}`}>
                    {pkg.duration}
                  </p>
                  <p className="text-3xl font-bold pt-2">{pkg.price}</p>
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-6 space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWhatsApp(pkg.name)}
                  className={`w-full ${
                    pkg.popular
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                  }`}
                  size="lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Cotizar Paquete
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            ¿Necesitas un paquete personalizado?
          </p>
          <Button
            onClick={() => handleWhatsApp("paquete personalizado")}
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Phone className="w-4 h-4 mr-2" />
            Solicitar Paquete a Medida
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
