// src/pages/Erro404/Erro404.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Frown } from 'lucide-react';

const Erro404 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-guardsense from-guardsense-blue-light to-guardsense-darker-blue p-4">
      
      {/* Container de Alerta Estilizado */}
      <div className="text-center 
                      bg-guardsense-darker-blue p-4 rounded-2xl shadow-2xl 
                      border-4 border-guardsense-button 
                      max-w-xl w-full
                      opacity-0 animate-fade-in-up" 
           style={{ animationFillMode: 'forwards' }}
      >
        
        {/* Ícone Animado */}
        <ShieldAlert 
          size={80} 
          className="mx-auto text-guardsense-button mb-4 animate-float-slow" 
        />
        
        {/* Código do Erro */}
        <h1 className="text-8xl font-extrabold text-guardsense-blue-light mb-4 
                       drop-shadow-[0_0_10px_rgba(0,151,178,0.7)] 
                       animate-pulse-glow"
            style={{ animationDuration: '3s' }}
        >
          404
        </h1>
        
        {/* Título */}
        <h2 className="text-3xl font-bold text-white mb-3 animate-fade-in-up animation-delay-300">
          <Frown className="inline-block mr-2" /> Página Não Encontrada
        </h2>
        
        {/* Descrição */}
        <p className="text-gray-300 mb-8 text-lg animate-fade-in-up animation-delay-500">
          Lamentamos, mas a área que você procurava pode ter sido movida ou simplesmente não existe. A segurança falhou neste link!
        </p>
        
        {/* Botão de Retorno */}
        <Link
          to="/"
          className="inline-block bg-guardsense-button text-white font-bold 
                     px-8 py-3 rounded-full text-lg 
                     hover:bg-guardsense-ocean transition duration-300 
                     transform hover:scale-105 shadow-lg
                     animate-fade-in-up animation-delay-700"
        >
          Voltar para a Segurança (Início)
        </Link>
      </div>
    </div>
  );
};

export {Erro404};