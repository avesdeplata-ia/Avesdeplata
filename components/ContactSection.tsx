
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#1c271f] rounded-[3rem] p-10 md:p-16 border border-[#28392e] relative overflow-hidden shadow-2xl">
        
        {/* Decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#13ec5b]/10 rounded-full blur-3xl"></div>

        <div className="flex flex-col gap-8 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Traé tu celular.<br />
              <span className="text-[#13ec5b]">Nosotros nos ocupamos.</span>
            </h2>
            <p className="text-xl text-gray-400">
              Estamos listos para recibirte. Visitanos en nuestro local o contactanos directamente por WhatsApp para un presupuesto rápido.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0a150f]/50 border border-[#28392e]">
              <span className="material-symbols-outlined text-3xl text-[#13ec5b]">chat</span>
              <div>
                <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">WhatsApp</p>
                <p className="text-lg font-bold">+54 9 11 1234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0a150f]/50 border border-[#28392e]">
              <span className="material-symbols-outlined text-3xl text-[#13ec5b]">schedule</span>
              <div>
                <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">Horarios</p>
                <p className="text-lg font-bold leading-tight">Lun-Vie: 9:30 - 18:30 <br/> Sáb: 10:00 - 14:00</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0a150f]/50 border border-[#28392e]">
            <span className="material-symbols-outlined text-3xl text-[#13ec5b]">location_on</span>
            <div>
              <p className="text-xs uppercase font-bold text-gray-500 tracking-widest">Ubicación</p>
              <p className="text-lg font-bold">Av. Siempre Viva 123, Local 4, CABA</p>
            </div>
          </div>

          <button className="flex items-center justify-center gap-3 bg-[#13ec5b] text-[#0a150f] py-5 rounded-2xl font-black text-xl hover:bg-green-400 transition-all hover:scale-[1.02] shadow-xl">
            <span className="material-symbols-outlined font-bold">near_me</span>
            Cómo llegar al local
          </button>
        </div>

        <div className="relative group rounded-[2rem] overflow-hidden border border-[#28392e] min-h-[400px]">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuChpao7sxG4Ez8Z1n8lPvwnoJKsWm0CGrED0vVJhNBguinDwkndfnmwJEsF55gvpW074owVENdN8KM-K1QC8Y2OlVkcebA1LH-LosyHWJ4zvo5ktVdjsq6w4bviyCTxYlBn7aqF84FYhtdG462p312u3P2SMHfzFk2R5seW7V7cXWLfbJTe8Qi5BaviK5jNEk0h0Cw-XsJDM9R6MmI8yaDKEomcT8Rr2jkEJ1qWnNiuOyDS_H3lF7dTlyjAkHurpLPd7IFXR02A6_M" 
            alt="Ubicación INCELL" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="bg-[#13ec5b] text-[#0a150f] font-black px-6 py-3 rounded-full shadow-2xl animate-bounce flex items-center gap-2">
                <span className="material-symbols-outlined">location_on</span>
                ESTAMOS AQUÍ
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
