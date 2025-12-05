import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Smartphone,
  Server,
  Brain,
  BarChart3,
  Search,
  GraduationCap,
  FileText,
  Settings,
  ArrowRight,
} from 'lucide-react';

const mainServices = [
  {
    icon: Settings,
    title: 'Reingeniería del Ecosistema OTT',
    description: 'Transformación completa de tu plataforma de streaming con arquitectura moderna y escalable.',
    benefits: [
      'Player vertical optimizado tipo TikTok/Reels',
      'Feed scrollable con precarga inteligente',
      'Backend escalable con microservicios',
      'CMS personalizado para gestión de contenido',
      'CDN optimizado para LATAM',
      'Optimización de rendimiento y latencia',
    ],
    results: 'Hasta 40% mejora en engagement y 60% reducción de buffering.',
  },
  {
    icon: Brain,
    title: 'IA para Recomendación',
    description: 'Algoritmos de machine learning personalizados para maximizar el engagement de usuarios.',
    benefits: [
      'Sistema de recomendaciones personalizado',
      'Análisis predictivo de comportamiento',
      'Segmentación automática de audiencias',
      'A/B testing automatizado',
      'Optimización de thumbnails con IA',
    ],
    results: 'Incremento promedio del 35% en tiempo de visualización.',
  },
  {
    icon: BarChart3,
    title: 'Optimización de Monetización',
    description: 'Implementación de modelos híbridos para maximizar ingresos.',
    benefits: [
      'SVOD - Suscripciones premium',
      'AVOD - Monetización con publicidad',
      'Sistema de VIP y coins',
      'Paywalls inteligentes',
      'In-app purchases optimizados',
    ],
    results: 'Aumento promedio del 50% en ARPU (Average Revenue Per User).',
  },
];

const complementaryServices = [
  {
    icon: Search,
    title: 'Auditoría Técnica OTT',
    description: 'Análisis exhaustivo de tu infraestructura actual con recomendaciones de mejora.',
  },
  {
    icon: GraduationCap,
    title: 'Workshops Técnicos',
    description: 'Capacitación para tu equipo en las últimas tecnologías y mejores prácticas OTT.',
  },
  {
    icon: FileText,
    title: 'Documentación y Capacitación',
    description: 'Documentación técnica completa y programas de capacitación para tu equipo.',
  },
  {
    icon: Smartphone,
    title: 'Player Vertical Personalizado',
    description: 'Desarrollo de player mobile-first con gestos intuitivos y experiencia premium.',
  },
  {
    icon: Server,
    title: 'Migración de Infraestructura',
    description: 'Migración segura a arquitecturas cloud-native con zero downtime.',
  },
];

const Servicios = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestros Servicios</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Soluciones integrales para{' '}
              <span className="gradient-text">plataformas OTT</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Desde la arquitectura hasta la optimización, ofrecemos servicios completos para transformar tu plataforma de streaming.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Servicios Principales</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
              Transformación OTT Completa
            </h2>
          </div>

          <div className="space-y-8">
            {mainServices.map((service, index) => (
              <div key={service.title} className="glass-card p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <div className="px-4 py-3 rounded-lg bg-primary/10 border border-primary/20">
                      <span className="text-primary font-medium text-sm">{service.results}</span>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <h4 className="font-display font-semibold mb-4 text-foreground">Lo que incluye:</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Servicios Complementarios</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
              Acompañamiento Integral
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complementaryServices.map((service) => (
              <div key={service.title} className="group glass-card p-8 hover-glow transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitás una solución personalizada?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Cada proyecto es único. Conversemos sobre tus necesidades específicas y diseñemos juntos la mejor solución.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto">
                Agendar Consulta
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicios;
