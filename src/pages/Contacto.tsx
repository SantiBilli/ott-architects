import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Send, Calendar } from 'lucide-react';

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: '¡Mensaje enviado!',
      description: 'Nos pondremos en contacto contigo pronto.',
    });

    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contacto</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
              Hablemos sobre tu{' '}
              <span className="gradient-text">próximo proyecto</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Estamos listos para ayudarte a transformar tu plataforma de streaming. Agendá una reunión o envianos un mensaje.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="glass-card p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold mb-6">Envianos un mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre"
                        className="bg-secondary/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="tu@email.com"
                        className="bg-secondary/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="bg-secondary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Contanos sobre tu proyecto..."
                      rows={5}
                      className="bg-secondary/50"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Mensaje
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="glass-card p-8">
                  <h2 className="font-display text-2xl font-bold mb-6">Información de contacto</h2>
                  <div className="space-y-6">
                    <a
                      href="mailto:contacto@mediacore.consulting"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="text-foreground font-medium">contacto@mediacore.consulting</div>
                      </div>
                    </a>
                    <a
                      href="tel:+5411123456789"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Teléfono</div>
                        <div className="text-foreground font-medium">+54 11 1234-5678</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Ubicación</div>
                        <div className="text-foreground font-medium">Buenos Aires, Argentina</div>
                      </div>
                    </div>
                    <a
                      href="https://linkedin.com/company/mediacore-consulting"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">LinkedIn</div>
                        <div className="text-foreground font-medium">Media Core Consulting</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="glass-card p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold">Agendá una reunión</h3>
                      <p className="text-muted-foreground text-sm">30 minutos de consulta gratuita</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Reservá un horario para una videollamada donde podemos analizar tu proyecto y responder todas tus preguntas.
                  </p>
                  <Button variant="hero-outline" size="lg" className="w-full" asChild>
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                      Ver Disponibilidad
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
