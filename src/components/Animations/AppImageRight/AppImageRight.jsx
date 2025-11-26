import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Guardsense from '../../../assets/logo-1.svg';

const Badge = ({ icon: Icon, text, delay, inView }) => (
  <div
    className={`flex items-center text-white text-base font-medium transition-all duration-700 ${
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <Icon size={20} className="mr-2 text-guardsense-button" />
    {text}
  </div>
);

const AppImageRight = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-4 sm:px-8 bg-guardsense-blue-dark overflow-hidden"
    >
      {/* Fundo decorativo */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-8 left-1/4 w-40 h-40 bg-guardsense-ocean rounded-full blur-2xl animate-float-slow"></div>
        <div
          className="absolute bottom-0 right-1/4 w-36 h-36 bg-guardsense-blue-light rounded-full blur-2xl animate-float-slow"
          style={{ animationDelay: '500ms' }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10">
        {/* Imagem */}
        <div
          className={`flex-1 flex justify-center md:justify-start transition-all duration-700 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          
          <img
            src={Guardsense}
            alt="Guardsense App"
            className="w-full max-w-[240px] md:max-w-[240px] rounded-2xl shadow-xl border-guardsense-button ml-auto"
            onError={(e) => {
             
            }}
          />
        </div>

        {/* Texto */}
        <div className="flex-1 text-center md:text-left max-w-lg">
          <h3
            className={`text-3xl lg:text-4xl font-extrabold text-white mb-4 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Controle total <br />
            na palma da sua <span className="text-guardsense-button">Mão</span>.
          </h3>

          <p
            className={`text-base text-gray-300 mb-6 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            Acesse câmeras, sensores e histórico de eventos em um painel único.
          </p>

          <div className="flex flex-col gap-3 mt-4">
            <Badge text="Visualização em tempo real" icon={CheckCircle} delay={100} inView={inView} />
            <Badge text="Controles remotos" icon={CheckCircle} delay={200} inView={inView} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { AppImageRight };
