import { Zap, Shield, Users, TrendingUp, Cpu, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Alto Rendimiento',
    description: 'Optimización de performance para millones de usuarios simultáneos con latencia mínima.',
  },
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
    description: 'Protección DRM y encriptación de contenido para resguardar tu catálogo.',
  },
  {
    icon: Users,
    title: 'Experiencia Personalizada',
    description: 'Algoritmos de recomendación basados en IA para mayor engagement de usuarios.',
  },
  {
    icon: TrendingUp,
    title: 'Monetización Optimizada',
    description: 'Modelos híbridos de suscripción, publicidad y microtransacciones.',
  },
  {
    icon: Cpu,
    title: 'Tecnología de Punta',
    description: 'Arquitectura cloud-native escalable con las últimas tecnologías del mercado.',
  },
  {
    icon: Globe,
    title: 'Alcance Global',
    description: 'CDN optimizado para distribución de contenido en toda Latinoamérica.',
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Beneficios</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Combinamos experiencia técnica profunda con conocimiento del mercado LATAM para ofrecer soluciones que realmente funcionan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group glass-card p-8 hover-glow transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
