
import React from 'react';

const services = [
  {
    title: 'Reparación de celulares',
    desc: 'Diagnóstico preciso y reparación integral para todas las marcas del mercado.',
    icon: 'phonelink_setup',
  },
  {
    title: 'Cambio de pantalla',
    desc: 'Displays originales y alternativos de máxima calidad instalados en tiempo récord.',
    icon: 'screenshot_monitor',
  },
  {
    title: 'Baterías',
    desc: 'Cambio de módulos agotados para que recuperes la autonomía total de tu equipo.',
    icon: 'battery_charging_full',
  },
  {
    title: 'Software y Desbloqueos',
    desc: 'Soluciones para sistemas lentos, errores de arranque y actualizaciones críticas.',
    icon: 'settings_system_daydream',
  },
  {
    title: 'Asesoramiento',
    desc: 'Te orientamos para que tomes la mejor decisión entre reparar o actualizar.',
    icon: 'support_agent',
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#0a150f]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-[#13ec5b] font-bold uppercase tracking-widest text-sm">Nuestra Especialidad</p>
          <h2 className="text-4xl md:text-5xl font-black">Servicios Técnicos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-[#1c271f] border border-[#28392e] rounded-3xl p-8 hover:border-[#13ec5b]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(19,236,91,0.05)] cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#28392e] flex items-center justify-center mb-6 group-hover:bg-[#13ec5b] transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl text-[#13ec5b] group-hover:text-black">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#13ec5b] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
