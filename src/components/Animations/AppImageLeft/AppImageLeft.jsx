import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import GuardsenseSrc from '../../../assets/registro0.png';

const Badge = ({ icon: Icon, text, delay }) => (
  <div
    className="flex items-center text-white text-lg font-medium opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
  >
    <Icon size={26} className="mr-2 text-guardsense-button animate-float-slow" />
    {text}
  </div>
);

const AppImageLeft = () => {
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: badgesRef, inView: badgesInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-20 px-4 sm:px-8 bg-guardsense-blue-dark overflow-hidden">

      {/* Fundo animado */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-guardsense-blue-light rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-guardsense-ocean rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow animation-delay-500"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-guardsense-blue-dark/40 to-guardsense-blue-dark/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">

        {/* IMAGEM */}
        <div
          ref={imgRef}
          className={`flex-1 flex justify-center md:justify-start mb-12 md:mb-0 transition-all duration-700 ${
            imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <img
            src={GuardsenseSrc}
            alt="Guardsense App Screen"
            className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_0_10px_rgba(0,151,178,0.3)]
                       transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-in-out border-4 border-guardsense-button"
   
          />
        </div>

        {/* TEXTO */}
        <div
          ref={textRef}
          className={`flex-1 text-center md:text-left md:pl-12 max-w-xl transition-all duration-700 ${
            textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
            Monitore Tudo<br /> com Total <span className="text-guardsense-button">Precisão</span>.
          </h2>

          <p className="text-lg lg:text-xl text-gray-300 mb-10">
            Acompanhe câmeras, sensores e alertas em um painel inteligente e fácil de usar.
          </p>

          <div
            ref={badgesRef}
            className={`flex flex-col gap-y-4 transition-all duration-700 ${
              badgesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Badge icon={CheckCircle} text="Painel intuitivo" delay={0} />
            <Badge icon={CheckCircle} text="Integração com sensores" delay={200} />
            <Badge icon={CheckCircle} text="Atualizações em tempo real" delay={400} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { AppImageLeft };
