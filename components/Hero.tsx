
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio"
  className="relative w-full min-h-screen flex items-center pt-32 pb-16 overflow-hidden scroll-mt-28">
      {/* Background glow */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#13ec5b]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left">
          <div className="space-y-4">
            <span className="inline-block text-[#13ec5b] font-black uppercase tracking-widest text-sm bg-[#13ec5b]/10 px-4 py-1 rounded-full">
              Servicio Técnico Autorizado
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
              La solución a tus problemas con el celular
            </h1>
            <p className="text-2xl md:text-4xl font-bold text-gray-400 italic">
              Alivio. <span className="text-white">Por fin.</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#13ec5b] text-[#0a150f] px-8 py-5 rounded-full font-black text-xl hover:bg-green-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(19,236,91,0.2)]">
              INCELL es donde tengo que estar
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative group max-w-md md:max-w-xl">
            {/* Visual Frame */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#13ec5b]/30 to-transparent blur-2xl rounded-3xl opacity-50"></div>
            <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-[#28392e] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvzMGxjK1FrtWmEoC_kaAIzKyyPeICZiww8YpyjOaOFjAJVZ2Je5MXKCyWSdiN23SHXYB6DfQQSBl44BMMEOrzApWMglDTG6RZIY6nGM1yTwUE3_v3xR8u-w30A-98V7lzPUFc9vVV_5OmzRVFCayyNho-ubiaPNEpAscCembV4K1atiPq6f9qWhfnlAFTd9QVRDmjJcOR85hrwgEJDqg0Ildi25a4Yp7jI6PBPW6Jhq8FDl52Z_-TBC4bAY0-iHGRRsc5U2DZiv0" 
                alt="Hulk INCELL Hero" 
                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
