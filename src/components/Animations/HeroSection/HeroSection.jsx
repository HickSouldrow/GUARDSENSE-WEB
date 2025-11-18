import React from 'react';
import { ShieldCheck, Wifi, Bell } from 'lucide-react';

const Badge = ({ icon: Icon, text, delay }) => (
  <div className="flex items-center text-white text-base font-medium">
    <Icon 
      size={22} 
      className={`mr-2 text-guardsense-button animate-float-slow animation-delay-${delay}`} 
    />
    {text}
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] px-4 sm:px-8 bg-guardsense-darker-blue overflow-hidden flex items-end">

      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-10 left-1/4 w-40 h-30 bg-guardsense-blue-light rounded-full mix-blend-multiply filter blur-2xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-guardsense-ocean rounded-full mix-blend-multiply filter blur-2xl animate-float-slow animation-delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between w-full pb-20">

        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 max-w-lg">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-snug mb-4 opacity-0 animate-fade-in-up">
            Segurança Inteligente,  
            <br />
            <span className="text-guardsense-button">Sem Complicação</span>.
          </h1>
          <p className="text-base md:text-lg text-gray-300 opacity-0 animate-fade-in-up animation-delay-300">
            Monitoramento moderno com câmeras e sensores, tudo em um único aplicativo.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 opacity-0 animate-fade-in-up animation-delay-500">
            <Badge icon={ShieldCheck} text="Proteção 24/7" delay="0" />
            <Badge icon={Wifi} text="Conexão Estável" delay="200" />
            <Badge icon={Bell} text="Alertas Rápidos" delay="400" />
          </div>
        </div>

        


      </div>
    </section>
  );
};

export { HeroSection };
