
import React from 'react';

const reasons = [
  { icon: 'favorite', title: 'Atención real', desc: 'No sos un ticket de soporte. Sos una persona con un problema que vamos a resolver.' },
  { icon: 'verified', title: 'Soluciones claras', desc: 'Presupuestos transparentes sin sorpresas finales ni cargos ocultos.' },
  { icon: 'timer', title: 'Sin vueltas', desc: 'Reparamos en el menor tiempo posible porque sabemos que tu celular es vital.' },
  { icon: 'chat', title: 'Lenguaje humano', desc: 'Te explicamos la falla de forma simple, sin tecnicismos innecesarios.' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#13ec5b]/5 via-transparent to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#1c271f] to-[#101914] rounded-[3rem] p-12 lg:p-20 border border-[#28392e] relative z-10 shadow-2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">¿Por qué elegir INCELL?</h2>
          <div className="w-24 h-1.5 bg-[#13ec5b] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-6 group">
              <div className="w-20 h-20 rounded-3xl bg-[#28392e]/50 border border-[#13ec5b]/20 flex items-center justify-center text-[#13ec5b] group-hover:scale-110 group-hover:bg-[#13ec5b]/10 transition-all duration-300">
                <span className="material-symbols-outlined text-5xl leading-none">{item.icon}</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-white">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
