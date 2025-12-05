import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Server, Brain, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Smartphone,
    title: 'Player Vertical & Feed',
    description: 'Experiencia mobile-first con scroll infinito tipo TikTok/Reels optimizado para engagement.',
    features: ['Player adaptativo', 'Gestos intuitivos', 'Precarga inteligente'],
  },
  {
    icon: Server,
    title: 'Backend & Infraestructura',
    description: 'Arquitectura cloud escalable con CMS, CDN y APIs optimizadas para streaming.',
    features: ['AWS / Google Cloud', 'CDN global', 'Microservicios'],
  },
  {
    icon: Brain,
    title: 'IA & Recomendaciones',
    description: 'Algoritmos de machine learning para personalizar la experiencia de cada usuario.',
    features: ['ML personalizado', 'Analytics avanzado', 'A/B Testing'],
  },
  {
    icon: BarChart3,
    title: 'Monetización',
    description: 'Implementación de modelos híbridos: suscripciones, ads, VIP y microtransacciones.',
    features: ['SVOD / AVOD', 'Paywalls', 'In-app purchases'],
  },
];

export function ServicesPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Servicios</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Soluciones integrales para OTT
            </h2>
          </div>
          <Button variant="ghost" className="mt-4 md:mt-0 group" asChild>
            <Link to="/servicios">
              Ver todos los servicios
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass-card p-8 hover-glow transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-[100px] -z-10" />
              
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
