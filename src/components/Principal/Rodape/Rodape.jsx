// src/components/Rodape/Rodape.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO_WHITE from '../../../assets/Guardsense.svg';

const Rodape = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 20;

      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer que evita sobreposição*/}
      {!isAtBottom && <div style={{ height: "120px" }} />}

      <footer
        className={`
          fixed bottom-0 left-0 right-0 z-40 
          bg-guardsense-darker-blue shadow-2xl 
          transition-transform duration-300
          ${isAtBottom ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div
          className="
            flex flex-col md:flex-row 
            items-center md:items-start 
            justify-between 
            w-full px-3 sm:px-4 md:px-6 
            py-6 sm:py-8 md:py-12
            gap-6 md:gap-0
            border-t-4 border-guardsense-button/70
          "
        >

          {/* LOGO + TEXTO */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-4 group cursor-pointer">
              <img
                src={LOGO_WHITE}
                alt="Guardsense Logo"
                className="
                  w-10 h-10 sm:w-12 sm:h-12 
                  drop-shadow-lg 
                  transition duration-300 
                  group-hover:scale-110 
                  group-hover:rotate-3
                "
              />
              <div className="leading-none">
                <h1 className="text-guardsense-button text-xl sm:text-2xl font-extrabold tracking-wider">
                  GUARDSENSE
                </h1>
                <p className="text-gray-400 text-[10px] sm:text-xs mt-1 w-44 sm:w-60 leading-tight">
                  Monitoramento inteligente com segurança de verdade.
                </p>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div
            className="flex flex-wrap items-center justify-center 
            gap-2 sm:gap-4 md:gap-6 text-[11px] sm:text-sm 
            mt-6 mb-2 md:mb-0"
          >
            <Link to="/SobreNos" className="text-gray-300 hover:text-guardsense-button transition transform hover:scale-105">
              Sobre Nós
            </Link>

            <Link to="/contato" className="text-gray-300 hover:text-guardsense-button transition transform hover:scale-105">
              Contato
            </Link>

            <Link to="/Termos" className="text-gray-300 hover:text-guardsense-button transition transform hover:scale-105">
              Termos de Uso
            </Link>
          </div>

          {/* COPYRIGHT */}
          <div className="text-gray-500 text-[9px] sm:text-[11px] md:text-xs text-center md:text-right">
            © {new Date().getFullYear()} Guardsense. Todos os direitos reservados.
          </div>

        </div>
      </footer>

      {/* BORDA SUPERIOR */}
      <div
        className={`
          fixed bottom-0 left-0 right-0 h-1 
          bg-white z-30 
          transition-opacity duration-300
          ${isAtBottom ? 'opacity-0' : 'opacity-100'}
        `}
      />
    </>
  );
};

export { Rodape };
