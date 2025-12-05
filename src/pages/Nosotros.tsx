import { Layout } from '@/components/layout/Layout';
import { Target, Eye, Heart, Users, Award, Rocket } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Especialización',
    description: 'Nos enfocamos exclusivamente en tecnología OTT y streaming, lo que nos permite ofrecer soluciones de vanguardia.',
  },
  {
    icon: Eye,
    title: 'Innovación',
    description: 'Buscamos constantemente nuevas tecnologías y metodologías para mantener a nuestros clientes a la vanguardia.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Trabajamos como socios estratégicos, comprometidos con el éxito de cada proyecto.',
  },
  {
    icon: Users,
    title: 'Cercanía',
    description: 'Conocemos el mercado LATAM y entendemos los desafíos únicos de la región.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Buscamos la excelencia técnica en cada solución que implementamos.',
  },
  {
    icon: Rocket,
    title: 'Agilidad',
    description: 'Metodologías ágiles que permiten entregas rápidas y adaptación continua.',
  },
];

const Nosotros = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Sobre Nosotros</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Transformamos el{' '}
              <span className="gradient-text">futuro del streaming</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Somos una consultora especializada en arquitectura OTT y transformación digital, dedicada a llevar las plataformas de streaming al siguiente nivel en Latinoamérica.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar el acceso a tecnología OTT de primer nivel para empresas de medios en Latinoamérica, proporcionando soluciones personalizadas que maximicen el engagement de usuarios y la rentabilidad del negocio.
              </p>
            </div>
            <div className="glass-card p-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser la consultora de referencia en transformación digital OTT en LATAM, reconocida por nuestra excelencia técnica, innovación constante y el éxito sostenido de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Nuestra Historia</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-4">
                Nacimos de la pasión por el streaming
              </h2>
            </div>
            <div className="glass-card p-10">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Media Core Consulting nace de la confluencia entre la experiencia técnica profunda en arquitecturas de streaming y el conocimiento íntimo del mercado latinoamericano. Nuestro equipo ha trabajado en los desafíos más complejos de la industria OTT, desde optimización de players hasta arquitecturas que soportan millones de usuarios simultáneos.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Identificamos una brecha crítica en el mercado: las empresas de medios en LATAM necesitaban acceso a experiencia técnica de clase mundial, pero adaptada a las particularidades de la región. Así nació nuestra misión de ser el puente entre la tecnología de punta y las necesidades específicas del mercado latinoamericano.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hoy, combinamos metodologías ágiles, tecnologías de última generación y un profundo entendimiento del negocio del streaming para ofrecer soluciones que realmente transforman plataformas y resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Por Qué Elegirnos</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              Nuestros Diferenciales
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group glass-card p-8 hover-glow transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Nosotros;
