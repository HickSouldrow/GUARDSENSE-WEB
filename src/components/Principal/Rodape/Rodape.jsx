// src/components/Rodape/Rodape.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LOGO_WHITE from '../../../assets/Guardsense.png';

const Rodape = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;

      setIsAtBottom(isBottom);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 👉 Adiciona espaço extra quando o rodapé sobe
  useEffect(() => {
    const body = document.body;
    if (!isAtBottom) {
      body.style.paddingBottom = "120px"; // altura do rodapé + respiro
    } else {
      body.style.paddingBottom = "0px";
    }

    return () => {
      body.style.paddingBottom = "0px";
    };
  }, [isAtBottom]);

  return (
    <>
      <footer 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-guardsense-darker-blue shadow-2xl 
          transition-transform duration-300 
          ${isAtBottom ? 'translate-y-0' : 'translate-y-full'}
        `}
      >
        <div className="flex flex-col md:flex-row items-center justify-between 
                        w-full px-6 md:px-10 py-8 md:py-12
                        border-t-4 border-guardsense-button/70">

          {/* LOGO */}
          <Link to="/" className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3">
              <img 
                src={LOGO_WHITE} 
                alt="Guardsense Logo" 
                className="w-10 h-10 animate-float-slow" 
              />

              <div className="flex flex-col leading-tight">
                <span className="text-guardsense-button font-extrabold text-xl md:text-2xl tracking-wider">
                  GUARDSENSE
                </span>
                <span className="text-gray-400 text-[10px] md:text-xs mt-0.5">
                  Monitoramento inteligente, paz de espírito total.
                </span>
              </div>
            </div>
          </Link>

          {/* LINKS */}
          <div className="flex flex-wrap items-center justify-center 
                          gap-4 md:gap-6 
                          text-xs sm:text-sm mb-6 md:mb-0">

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
          <div className="text-gray-500 text-[10px] sm:text-xs text-center md:text-right">
            © {new Date().getFullYear()} Guardsense. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* BORDA SUPERIOR */}
      <div 
        className={`fixed bottom-0 left-0 right-0 h-1 bg-white z-30 transition-opacity duration-300 
          ${isAtBottom ? 'opacity-0' : 'opacity-100'}
        `}
      />
    </>
  );
};

export { Rodape };
