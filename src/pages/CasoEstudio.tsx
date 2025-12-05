import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Clock, Zap } from 'lucide-react';

const metrics = [
  { icon: TrendingUp, value: '+45%', label: 'Engagement' },
  { icon: Users, value: '+60%', label: 'Retención' },
  { icon: Clock, value: '-70%', label: 'Tiempo de carga' },
  { icon: Zap, value: '99.9%', label: 'Uptime' },
];

const technologies = [
  'React Native',
  'Node.js',
  'AWS',
  'CloudFront CDN',
  'HLS/DASH',
  'TensorFlow',
  'PostgreSQL',
  'Redis',
];

const CasoEstudio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Caso de Estudio</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Transformación de{' '}
              <span className="gradient-text">Plataforma OTT Regional</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cómo modernizamos una plataforma de streaming tradicional, logrando resultados excepcionales en engagement y rendimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-card p-6 text-center">
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-muted-foreground text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">El Desafío</span>
                <h2 className="font-display text-3xl font-bold mt-4 mb-6">
                  Problema del Cliente
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Una plataforma de streaming regional enfrentaba serios desafíos con su infraestructura legacy:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span>Player tradicional horizontal con baja adopción en mobile</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span>Tiempos de carga superiores a 5 segundos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span>Alta tasa de abandono (60% en primeros 10 segundos)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span>Sistema de recomendaciones básico sin personalización</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span>Monetización limitada a suscripción única</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-wider">La Solución</span>
                <h2 className="font-display text-3xl font-bold mt-4 mb-6">
                  Nuestra Propuesta
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Implementamos una reingeniería completa del ecosistema OTT:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Nuevo player vertical con feed scrollable tipo TikTok</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Migración a arquitectura cloud-native en AWS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>CDN optimizado para LATAM con edge locations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Sistema de recomendaciones con IA personalizado</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Modelo híbrido de monetización (SVOD + AVOD + VIP)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Impacto</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
                Resultados Obtenidos
              </h2>
            </div>

            <div className="glass-card p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Métricas de Engagement</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Tiempo promedio de sesión</span>
                      <span className="font-semibold text-primary">+45%</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Videos vistos por sesión</span>
                      <span className="font-semibold text-primary">+120%</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Retención día 7</span>
                      <span className="font-semibold text-primary">+60%</span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Tasa de abandono</span>
                      <span className="font-semibold text-primary">-55%</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-4 text-foreground">Métricas Técnicas</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Tiempo de carga inicial</span>
                      <span className="font-semibold text-primary">-70%</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Buffering events</span>
                      <span className="font-semibold text-primary">-80%</span>
                    </li>
                    <li className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-muted-foreground">Uptime</span>
                      <span className="font-semibold text-primary">99.9%</span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="text-muted-foreground">Costo de infraestructura</span>
                      <span className="font-semibold text-primary">-30%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Stack</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
                Tecnologías Utilizadas
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 rounded-full bg-secondary/50 border border-border text-foreground font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              ¿Querés resultados similares?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Conversemos sobre cómo podemos transformar tu plataforma de streaming.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto">
                Agendar Reunión
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CasoEstudio;
