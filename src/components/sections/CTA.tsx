import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para transformar tu{' '}
            <span className="gradient-text">plataforma OTT</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Agendá una reunión con nuestro equipo y descubrí cómo podemos ayudarte a llevar tu plataforma al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto">
                <Calendar size={20} />
                Agendar Reunión
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/servicios">
                Conocer Servicios
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
