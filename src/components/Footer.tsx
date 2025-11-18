import logo from "@/assets/logo.png";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tropical-palm text-tropical-sand">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img src={logo} alt="CEVATOURS" className="h-16 w-auto" />
            <p className="text-tropical-sand/90 text-sm">
              Tu mejor opción para descubrir las maravillas de Piura. Experiencias únicas garantizadas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-tropical-sand/90 hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#destinos" className="text-tropical-sand/90 hover:text-primary transition-colors">
                  Destinos
                </a>
              </li>
              <li>
                <a href="#paquetes" className="text-tropical-sand/90 hover:text-primary transition-colors">
                  Paquetes
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-tropical-sand/90 hover:text-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-tropical-sand/90 hover:text-primary transition-colors">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-bold text-lg mb-4">Destinos Populares</h3>
            <ul className="space-y-2 text-sm text-tropical-sand/90">
              <li>Máncora</li>
              <li>Cabo Blanco</li>
              <li>Vichayito</li>
              <li>Las Huaringas</li>
              <li>Colán</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-tropical-sand/90">+51 999 999 999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-tropical-sand/90">info@cevatours.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-tropical-sand/90">Av. Grau 123, Piura</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-tropical-sand/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-tropical-sand/10 hover:bg-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-tropical-sand/10 pt-8 text-center text-sm text-tropical-sand/70">
          <p>© {currentYear} CEVATOURS. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
