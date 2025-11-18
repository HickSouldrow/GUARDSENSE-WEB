// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../../../assets/Guardsense.png';

const Cabecalho = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex mb-86 items-center justify-between px-6 py-3 border-b-2 border-guardsense-button bg-guardsense-darker-blue 
        bg-gradient-to-r from-guardsense-darker-blue via-guardsense-ocean to-guardsense-blue-dark shadow-[0_0_30px_rgba(0,151,178,0.5)] animate-fade-in-up"
      style={{
        animationDuration: "0.8s"
      }}
    >

      {/* Lado Esquerdo */}
      <div className="flex items-center space-x-3 animate-slide-in-left">
        <Link 
          to="/" 
          className="flex items-center space-x-3 group"
        >
          <span className="text-guardsense-button font-extrabold text-2xl tracking-wider transition-all duration-300 group-hover:drop-shadow-[0_0_10px_#0097B2]">
          GUARDSENSE
          </span>

          <img src={LOGO} alt="GL" className="  w-9 h-9 group-hover:scale-110 transition-all duration-500   animate-float-slow "
            style={{ animationDuration: '4s' }}   />
        </Link>
      </div>


      {/* Lado Direito / Menu Futuro */}
      <nav className="flex items-center space-x-6  animate-slide-in-right">
        <Link   to="/contato"className=" text-white/90 font-medium hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
          Contato
        </Link>

        <Link to="/SobreNos" className="  text-white/90 font-medium  hover:text-white  transition-all duration-300
         hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
          Sobre
        </Link>
      </nav>

    </header>
  );
};

export { Cabecalho };
