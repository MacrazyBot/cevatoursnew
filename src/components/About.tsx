import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Shield, Star } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Experiencia",
    description: "Más de 10 años operando en la región"
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y se nota"
  },
  {
    icon: Shield,
    title: "Confianza",
    description: "Miles de clientes satisfechos"
  },
  {
    icon: Star,
    title: "Calidad",
    description: "Servicios de primera categoría"
  }
];

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sobre CEVATOURS
            </h2>
            <p className="text-xl text-muted-foreground">
              Tu aliado en experiencias inolvidables
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                En CEVATOURS nos dedicamos a crear experiencias turísticas únicas que conectan a nuestros 
                visitantes con la belleza natural, la rica cultura y la cálida hospitalidad de Piura. 
                Trabajamos cada día para que cada viaje sea una aventura memorable.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la agencia líder en turismo piurano, reconocida por nuestro compromiso con la 
                excelencia, la sostenibilidad y la satisfacción total de nuestros clientes. Queremos 
                que Piura sea el destino turístico preferido del norte peruano.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card
                  key={idx}
                  className="text-center hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 mx-auto rounded-full bg-gradient-tropical p-3">
                      <Icon className="w-full h-full text-primary-foreground" />
                    </div>
                    <h4 className="font-bold text-foreground">{value.title}</h4>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
