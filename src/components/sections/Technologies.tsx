const technologies = [
  { name: 'AWS', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'Cloudflare', category: 'CDN' },
  { name: 'Akamai', category: 'CDN' },
  { name: 'HLS', category: 'Streaming' },
  { name: 'MPEG-DASH', category: 'Streaming' },
  { name: 'React', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PostgreSQL', category: 'Database' },
];

export function Technologies() {
  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Stack Tecnológico</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tecnologías que utilizamos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Trabajamos con las mejores herramientas y plataformas del mercado para garantizar soluciones robustas y escalables.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group px-6 py-3 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
            >
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {tech.name}
              </span>
              <span className="ml-2 text-xs text-muted-foreground">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
