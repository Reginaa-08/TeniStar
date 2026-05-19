import { ArrowRight, Zap } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm text-white/90">Nueva Colección 2025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Eleva Tu
              <span className="block bg-gradient-to-r from-primary via-orange-400 to-accent bg-clip-text text-transparent">
                Rendimiento
              </span>
            </h1>
            
            <p className="text-lg text-white/70 mb-8 max-w-lg mx-auto lg:mx-0">
              Descubre la colección más completa de tenis deportivos. 
              Desde la cancha hasta la montaña, tenemos el calzado perfecto para ti.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 shadow-lg shadow-primary/25"
              >
                Explorar Colección
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-semibold"
              >
                Ver Ofertas
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-white/60">Modelos</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-sm text-white/60">Marcas</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">10K+</p>
                <p className="text-sm text-white/60">Clientes</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop"
                alt="Featured sneaker"
                className="w-full rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-8 -left-8 w-full h-full bg-gradient-to-br from-primary/40 to-accent/40 rounded-3xl -z-0 blur-sm" />
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
