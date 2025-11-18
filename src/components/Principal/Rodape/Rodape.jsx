// src/components/Rodape/Rodape.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import correto da imagem em src/assets
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

  return (
    <>
      <footer 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-guardsense-darker-blue shadow-2xl 
                    transition-transform duration-300 ${
                      isAtBottom ? 'translate-y-0' : 'translate-y-full'
                    }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 border-t-4 border-guardsense-button/70">

          {/* Logo */}
          <Link to="/">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src={LOGO_WHITE} 
                alt="Guardsense Logo" 
                className="w-10 h-10 animate-float-slow" 
              />
              
              <div className="flex flex-col leading-tight">
                <span className="text-guardsense-button font-extrabold text-2xl tracking-wider">
                  GUARDSENSE
                </span>
                <span className="text-gray-400 text-xs mt-0.5">
                  Monitoramento inteligente, paz de espírito total.
                </span>
              </div>
            </div>
          </Link>

          {/* Links */}
          <div className="flex items-center space-x-6 text-sm mb-4 md:mb-0">
            <Link to="/SobreNos" className="text-gray-300 hover:text-guardsense-button transition transform hover:scale-105">
              Sobre Nós
            </Link>

            <Link to="/Recursos" className="text-gray-300 hover:text-guardsense-button transition transform hover:scale-105">
              Recursos
            </Link>

            <Link to="/Termos" className="text-gray-300 hover:text-guardsense-button transition transform hover:scale-105">
              Termos de Uso
            </Link>
          </div>

          <div className="text-gray-500 text-xs text-center md:text-right">
            © {new Date().getFullYear()} Guardsense. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Borda superior */}
      <div 
        className={`fixed bottom-0 left-0 right-0 h-1 bg-guardsense-button z-30 transition-opacity duration-300 ${
          isAtBottom ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </>
  );
};

export { Rodape };
