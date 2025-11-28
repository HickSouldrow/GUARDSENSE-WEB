import React from "react";
import { ShieldCheck, Wifi, Bell } from "lucide-react";

const Badge = ({ icon: Icon, text, delay }) => (
  <div
    className={`
      flex items-center text-white text-base font-medium
      opacity-0 animate-fade-in-up
    `}
    style={{ animationDelay: `${delay}ms` }}
  >
    <Icon
      size={22}
      className="mr-2 text-guardsense-button animate-float-slow"
    />
    {text}
  </div>
);

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[75vh] px-4 sm:px-8 bg-guardsense-darker-blue
       overflow-hidden flex items-end pt-28 md:pt-40">

      {/* EFEITOS DE LUZES */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-10 left-1/4 w-40 h-40 bg-guardsense-blue-light rounded-full mix-blend-multiply filter blur-2xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-guardsense-ocean rounded-full mix-blend-multiply filter blur-2xl animate-float-slow"
          style={{ animationDelay: "500ms" }}
        />
      </div>

      <div
        className="
          relative z-10 max-w-6xl mx-auto w-full
          flex flex-col md:flex-row items-center justify-between
          pb-20
        "
      >
        {/* TEXTOS */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0 max-w-lg">
          <h1
            className="
              text-3xl md:text-4xl font-extrabold text-white
              leading-snug mb-4 opacity-0 animate-fade-in-up
            "
          >
            Segurança Inteligente,
            <br />
            <span className="text-guardsense-button">
              Sem Complicação
            </span>.
          </h1>

          <p
            className="
              text-base md:text-lg text-gray-300
              opacity-0 animate-fade-in-up
            "
            style={{ animationDelay: "300ms" }}
          >
            Monitoramento moderno com câmeras e sensores, tudo em um único
            aplicativo.
          </p>

          {/* BADGES */}
          <div
            className="
              mt-8 flex flex-wrap justify-center md:justify-start gap-4
            "
          >
            <Badge icon={ShieldCheck} text="Proteção 24/7" delay={500} />
            <Badge icon={Wifi} text="Conexão Estável" delay={650} />
            <Badge icon={Bell} text="Alertas Rápidos" delay={800} />
          </div>
        </div>

        <div
          className="
            flex-1 flex justify-center md:justify-end
            opacity-0 animate-fade-in-up
          "
          style={{ animationDelay: "600ms" }}
        >
          {/* deixe vazio por enquanto */}
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
