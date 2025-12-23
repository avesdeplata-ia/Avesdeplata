import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import BrandPhilosophy from './components/BrandPhilosophy';
import WhyChooseUs from './components/WhyChooseUs';
import ProductShowcase from './components/ProductShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col text-white selection:bg-primary selection:text-black">
      <Header />

      <main>
        <Hero />
        <BrandPhilosophy />
        <Services />
        <WhyChooseUs />
        <ProductShowcase />
        <ContactSection />
      </main>

      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
};

export default App;

