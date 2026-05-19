import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-2xl font-bold">TeniStar</span>
            </Link>
            <p className="text-slate-400 text-sm mb-4">
              Tu destino para el calzado deportivo de alta calidad. 
              Impulsando atletas desde 2020.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/categoria/basketball" className="hover:text-white transition-colors">Básquet</Link></li>
              <li><Link to="/categoria/football" className="hover:text-white transition-colors">Fútbol</Link></li>
              <li><Link to="/categoria/hiking" className="hover:text-white transition-colors">Senderismo</Link></li>
              <li><Link to="/mas-vendidos" className="hover:text-white transition-colors">Más Vendidos</Link></li>
              <li><Link to="/temporada" className="hover:text-white transition-colors">Temporada</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guía de Tallas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Envíos y Entregas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Devoluciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contacto@tenistar.com" className="hover:text-white transition-colors">
                  contacto@tenistar.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span>+52 123 456 7890</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>Av. Deportiva 123, Col. Centro, CDMX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© 2025 TeniStar. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
