import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/51999999999?text=Hola, quisiera información sobre sus paquetes turísticos", "_blank");
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-tropical-sun via-tropical-ocean to-tropical-palm opacity-90" />
      
      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="wave-animation" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="rgba(255, 237, 176, 0.1)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <div className="float-animation">
            <img
              src={logo}
              alt="CEVATOURS"
              className="h-32 md:h-40 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-tropical-sand drop-shadow-lg leading-tight">
              Descubre el Paraíso
              <br />
              <span className="text-accent-foreground">de Piura</span>
            </h1>
            <p className="text-xl md:text-2xl text-tropical-sand/90 max-w-2xl mx-auto drop-shadow">
              Playas espectaculares, cultura vibrante y aventuras inolvidables te esperan
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-tropical-sand text-tropical-palm hover:bg-tropical-sand/90 shadow-tropical text-lg px-8 py-6 hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5 mr-2" />
              Cotizar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('destinos')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-tropical-sand bg-background/80 text-foreground hover:bg-tropical-sand hover:text-tropical-palm text-lg px-8 py-6 hover:scale-105 transition-transform backdrop-blur-sm"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Ver Destinos
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              { title: "Tours Personalizados", desc: "Adaptados a tus necesidades" },
              { title: "Guías Expertos", desc: "Conocimiento local profundo" },
              { title: "Mejor Precio", desc: "Garantía de calidad" }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-tropical-sand/10 backdrop-blur-sm rounded-xl p-6 hover:bg-tropical-sand/20 transition-all hover:scale-105"
              >
                <h3 className="text-xl font-bold text-tropical-sand mb-2">{feature.title}</h3>
                <p className="text-tropical-sand/90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
