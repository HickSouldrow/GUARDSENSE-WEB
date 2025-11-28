// src/pages/Erro404/Erro404.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Frown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Erro404 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <div className="
      min-h-screen 
      flex items-center justify-center 
      bg-gradient-guardsense from-guardsense-blue-light to-guardsense-darker-blue 
      p-6 py-30
    ">
      <div
        ref={ref}
        className={`
          text-center bg-guardsense-darker-blue 
          p-4 md:p-6 rounded-2xl shadow-2xl
          border-4 border-guardsense-button

          max-w-md w-full     
          transition-all duration-700 
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <ShieldAlert
          size={60}         
          className="mx-auto text-guardsense-button mb-3 animate-float-slow"
        />

        <h1
          className="
            text-5xl sm:text-6xl md:text-7xl 
            font-extrabold text-guardsense-blue-light mb-3 
            drop-shadow-[0_0_10px_rgba(0,151,178,0.7)]
            animate-pulse-glow
          "
          style={{ animationDuration: "3s" }}
        >
          404
        </h1>

        <h2
          className={`
            text-xl sm:text-2xl font-bold text-white mb-2
            transition-opacity duration-700 delay-300
            ${inView ? "opacity-100" : "opacity-0"}
          `}
        >
          <Frown className="inline-block mr-1" /> Página Não Encontrada
        </h2>

        <p
          className={`
            text-gray-300 mb-6 text-sm sm:text-base
            transition-opacity duration-700 delay-500
            ${inView ? "opacity-100" : "opacity-0"}
          `}
        >
          A área que você procurava pode ter sido movida ou não existe.
        </p>

        <Link
          to="/"
          className={`
            inline-block bg-guardsense-button text-white font-bold 
            px-6 py-2 rounded-full text-base 
            hover:bg-guardsense-ocean transition duration-300 
            transform hover:scale-105 shadow-lg

            transition-opacity duration-700 delay-700
            ${inView ? "opacity-100" : "opacity-0"}
          `}
        >
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
};

export { Erro404 };
