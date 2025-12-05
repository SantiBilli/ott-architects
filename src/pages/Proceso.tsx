import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, PenTool, Code, TestTube, GraduationCap, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico',
    description: 'Analizamos tu infraestructura actual, identificando fortalezas, debilidades y oportunidades de mejora.',
    deliverables: ['Auditoría técnica completa', 'Análisis de arquitectura', 'Benchmark de competencia', 'Documento de hallazgos'],
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Diseño de Arquitectura',
    description: 'Diseñamos la arquitectura ideal para tus necesidades, considerando escalabilidad, performance y costos.',
    deliverables: ['Arquitectura propuesta', 'Diagrama de componentes', 'Estimación de costos', 'Roadmap de implementación'],
  },
  {
    icon: Code,
    number: '03',
    title: 'Implementación',
    description: 'Desarrollamos e implementamos la solución utilizando metodologías ágiles con entregas incrementales.',
    deliverables: ['Sprints de 2 semanas', 'Demos de avance', 'Código documentado', 'CI/CD configurado'],
  },
  {
    icon: TestTube,
    number: '04',
    title: 'Validación y Pruebas',
    description: 'Realizamos pruebas exhaustivas de carga, seguridad y experiencia de usuario antes del go-live.',
    deliverables: ['Tests de carga', 'Auditoría de seguridad', 'QA funcional', 'Pruebas de usuario'],
  },
  {
    icon: GraduationCap,
    number: '05',
    title: 'Capacitación',
    description: 'Transferimos conocimiento a tu equipo para que puedan operar y evolucionar la plataforma.',
    deliverables: ['Documentación técnica', 'Workshops prácticos', 'Guías de operación', 'Videos de capacitación'],
  },
  {
    icon: Rocket,
    number: '06',
    title: 'Acompañamiento Evolutivo',
    description: 'Brindamos soporte continuo y ayudamos a evolucionar la plataforma según las necesidades del negocio.',
    deliverables: ['Soporte técnico', 'Monitoreo proactivo', 'Optimización continua', 'Nuevas features'],
  },
];

const Proceso = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Metodología</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Nuestro{' '}
              <span className="gradient-text">proceso de trabajo</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Una metodología probada que garantiza resultados excepcionales en cada proyecto, con transparencia total y entregas incrementales.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-px bg-gradient-to-b from-primary to-transparent hidden md:block" />
                  )}
                  
                  <div className="glass-card p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-primary-foreground" />
                          </div>
                          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
                            {step.number}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-6">{step.description}</p>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Entregables:</h4>
                          <div className="flex flex-wrap gap-2">
                            {step.deliverables.map((deliverable) => (
                              <span
                                key={deliverable}
                                className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Beneficios</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
                ¿Por qué funciona nuestra metodología?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Transparencia Total', description: 'Visibilidad completa del avance con demos cada 2 semanas.' },
                { title: 'Entregas Incrementales', description: 'Valor desde el primer sprint, sin esperar meses para ver resultados.' },
                { title: 'Flexibilidad', description: 'Adaptamos el scope según los aprendizajes y feedback del proyecto.' },
                { title: 'Transferencia de Conocimiento', description: 'Tu equipo queda capacitado para operar y evolucionar la solución.' },
              ].map((benefit) => (
                <div key={benefit.title} className="glass-card p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para comenzar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              El primer paso es un diagnóstico gratuito de tu plataforma actual. Agendá una reunión y conversemos.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto">
                Agendar Diagnóstico
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Proceso;
