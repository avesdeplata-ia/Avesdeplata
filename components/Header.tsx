
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Productos', href: '#productos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a150f]/90 backdrop-blur-md py-4 border-b border-[#28392e]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <span className="material-symbols-outlined text-3xl text-[#13ec5b] group-hover:scale-110 transition-transform">bolt</span>
          <h1 className="text-2xl font-black tracking-tighter">INCELL</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-gray-300 hover:text-[#13ec5b] transition-colors">
              {link.name}
            </a>
          ))}
          <a
  href="https://wa.me/542665114522?text=Hola%20INCELL%20👋%20quiero%20reservar%20un%20turno"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#13ec5b] text-[#0a150f] px-6 py-2 rounded-full font-bold text-sm hover:bg-green-400 transition-all hover:shadow-[0_0_15px_rgba(19,236,91,0.4)]"
>
  Reservar Turno
</a>

        </nav>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a150f] border-b border-[#28392e] py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-gray-200 hover:text-[#13ec5b]"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#13ec5b] text-[#0a150f] w-full py-4 rounded-xl font-bold mt-2">
            Reservar Turno
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
