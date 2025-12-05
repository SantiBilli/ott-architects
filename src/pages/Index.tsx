import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { Technologies } from '@/components/sections/Technologies';
import { CTA } from '@/components/sections/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <ServicesPreview />
      <Technologies />
      <CTA />
    </Layout>
  );
};

export default Index;
