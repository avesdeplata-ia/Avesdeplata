
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050b08] pt-20 pb-10 border-t border-[#28392e]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-4xl text-[#13ec5b]">bolt</span>
              <h2 className="text-3xl font-black tracking-tighter text-white">INCELL</h2>
            </div>
            <p className="text-gray-500 max-w-xs text-center md:text-left">
              Especialistas en devolverle la vida a tu tecnología con fuerza y precisión.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col gap-3 items-center md:items-start">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Empresa</h4>
              <a href="#inicio" className="text-gray-500 hover:text-[#13ec5b] text-sm transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-500 hover:text-[#13ec5b] text-sm transition-colors">Servicios</a>
              <a href="#productos" className="text-gray-500 hover:text-[#13ec5b] text-sm transition-colors">Productos</a>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Ayuda</h4>
              <a href="#" className="text-gray-500 hover:text-[#13ec5b] text-sm transition-colors">Preguntas Frecuentes</a>
              <a href="#" className="text-gray-500 hover:text-[#13ec5b] text-sm transition-colors">Garantías</a>
              <a href="#contacto" className="text-gray-500 hover:text-[#13ec5b] text-sm transition-colors">Soporte</a>
            </div>
            <div className="flex flex-col gap-3 items-center md:items-start">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Legales</h4>
              <a href="#" className="text-gray-500 hover:text-[#13ec5b] text-sm transition-colors">Privacidad</a>
              <a href="#" className="text-gray-500 hover:text-[#13ec5b] text-sm transition-colors">Términos</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#28392e] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-sm">
            © 2024 INCELL. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-[#1c271f] flex items-center justify-center text-gray-400 hover:bg-[#13ec5b] hover:text-[#0a150f] transition-all">
               <span className="material-symbols-outlined">public</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#1c271f] flex items-center justify-center text-gray-400 hover:bg-[#13ec5b] hover:text-[#0a150f] transition-all">
               <span className="material-symbols-outlined">share</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
