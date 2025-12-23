
import React from 'react';

const products = [
  { name: 'iPhone 15 Pro Max', price: 'USD 1.499', img: 'https://picsum.photos/400/500?random=1', tag: 'Top Ventas' },
  { name: 'Samsung S24 Ultra', price: 'USD 1.299', img: 'https://picsum.photos/400/500?random=2', tag: 'Nuevo' },
  { name: 'Google Pixel 8 Pro', price: 'USD 999', img: 'https://picsum.photos/400/500?random=3', tag: 'Cámara' },
  { name: 'Xiaomi 14 Ultra', price: 'USD 1.099', img: 'https://picsum.photos/400/500?random=4', tag: 'Potencia' },
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="productos" className="py-24 px-6 bg-[#0a150f]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <p className="text-[#13ec5b] font-bold uppercase tracking-widest text-sm">Stock Disponible</p>
            <h2 className="text-4xl md:text-5xl font-black">Equipos Seleccionados</h2>
          </div>
          <button className="text-[#13ec5b] font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
            Ver catálogo completo <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group bg-[#1c271f] rounded-3xl overflow-hidden border border-[#28392e] hover:border-[#13ec5b]/40 transition-all duration-300">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#13ec5b] border border-[#13ec5b]/30">
                  {product.tag}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-2xl font-black text-[#13ec5b]">{product.price}</p>
                </div>
                <button className="w-full bg-[#28392e] text-white py-3 rounded-xl font-bold hover:bg-[#13ec5b] hover:text-[#0a150f] transition-colors">
                  Consultar Stock
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
