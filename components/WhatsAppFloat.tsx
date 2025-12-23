import React from "react";

const WhatsAppFloat: React.FC = () => {
  return (
    <a
      href="https://wa.me/542665114522?text=Hola%20INCELL%20👋%20necesito%20una%20solución%20para%20mi%20celular"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg animate-pulse hover:scale-110 transition-transform"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        className="h-7 w-7"
      >
        <path d="M19.11 17.44c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.33-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.56.13-.13.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.63 1.11 2.81c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.65 1.83-1.27.23-.62.23-1.15.16-1.27-.07-.11-.25-.18-.52-.32z" />
        <path d="M16 3C9.37 3 4 8.37 4 15c0 2.65.86 5.1 2.32 7.08L4 29l7.1-2.29C12.99 27.47 14.47 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22.1c-1.37 0-2.7-.37-3.87-1.07l-.28-.17-4.21 1.36 1.37-4.1-.18-.29A9.98 9.98 0 016 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;
