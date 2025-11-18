import { useState } from "react";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logo from "@/assets/logo.png";
import PiuraMapModal from "./PiuraMapModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const handleWhatsApp = () => {
    window.open("https://wa.me/51999999999?text=Hola, quisiera información sobre sus paquetes turísticos", "_blank");
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-40 border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={logo} alt="CEVATOURS" className="h-14 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors font-medium">
                Inicio
              </a>
              
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-foreground hover:text-primary font-medium">
                      Destinos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-96 p-4">
                        <button
                          onClick={() => setShowMap(true)}
                          className="w-full p-4 rounded-lg border-2 border-primary/20 hover:border-primary hover:bg-tropical-sand transition-all group"
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <MapPin className="w-5 h-5 text-primary" />
                            <h3 className="font-bold text-lg text-foreground">Explora Piura</h3>
                          </div>
                          <p className="text-sm text-muted-foreground text-left">
                            Haz clic para explorar el mapa interactivo de Piura y descubrir todos los destinos disponibles
                          </p>
                        </button>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <a href="#paquetes" className="text-foreground hover:text-primary transition-colors font-medium">
                Paquetes
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors font-medium">
                Servicios
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
                Nosotros
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors font-medium">
                Contacto
              </a>
              
              <Button onClick={handleWhatsApp} className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Cotizar
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-tropical-sand transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#inicio" className="block py-2 text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <button
                onClick={() => {
                  setShowMap(true);
                  setIsOpen(false);
                }}
                className="w-full text-left py-2 text-foreground hover:text-primary transition-colors"
              >
                Destinos
              </button>
              <a href="#paquetes" className="block py-2 text-foreground hover:text-primary transition-colors">
                Paquetes
              </a>
              <a href="#servicios" className="block py-2 text-foreground hover:text-primary transition-colors">
                Servicios
              </a>
              <a href="#nosotros" className="block py-2 text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="block py-2 text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <Button onClick={handleWhatsApp} className="w-full bg-primary text-primary-foreground">
                <Phone className="w-4 h-4 mr-2" />
                Cotizar
              </Button>
            </div>
          )}
        </div>
      </nav>

      <PiuraMapModal isOpen={showMap} onClose={() => setShowMap(false)} />
    </>
  );
};

export default Navbar;
