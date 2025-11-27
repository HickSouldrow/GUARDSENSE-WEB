import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';


// Lista dos membros (mantive a sua)
const equipe = [
  { nome: "Henrique da Silva", github: "https://github.com/HickSouldrow" },
  { nome: "Matheus Jorge", github: "https://github.com/mathsant-js" },
  { nome: "Lucas Tino", github: "https://github.com/Lucas-Tino" },
];

const grupoPrincipal = equipe.slice(0, 3);
const colaboradores = equipe.slice(3);

// Hook de animação (mantido, só limpo e comentado)
const useFadeOnView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisivel(true);
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visivel };
};

// CARD DE MEMBRO (reaproveitei sua estrutura e melhorei acessibilidade / foco)
const MembroCard = ({ nome, github, index }) => {
  const githubUser = github.replace("https://github.com/", "");
  const { ref, visivel } = useFadeOnView(0.15);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 120}ms` }}
      className={`transition-all duration-700 transform ${
        visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Abrir perfil GitHub de ${nome}`}
        className="
          group flex flex-col items-center text-center
          bg-gradient-to-br from-[#071024] via-[#061023] to-[#005F73]
          bg-opaci rounded-2xl
          p-6 sm:p-8
          shadow-[0_8px_30px_rgba(0,0,0,0.5)]
          hover:shadow-[0_12px_45px_rgba(0,160,255,0.12)]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-guardsense-button/60
          transition-transform duration-300 will-change-transform
          hover:-translate-y-1 hover:scale-[1.02]
          w-[220px] h-[300px] sm:w-[250px] sm:h-[320px]
        "
      >
        <img
          src={`https://github.com/${githubUser}.png`}
          alt={`${nome} avatar`}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-guardsense-button shadow-md transform transition duration-300 group-hover:scale-105"
          loading="lazy"
        />

        <span className="mt-4 text-white font-semibold text-lg sm:text-xl tracking-wide">
          {nome}
        </span>

        <span className="mt-1 text-gray-400 text-xs sm:text-sm">
          GitHub Profile
        </span>
      </a>
    </div>
  );
};

// PÁGINA SobreNos
const SobreNos = () => {
  const { ref: refHero, visivel: visHero } = useFadeOnView(0.12);
  const { ref: refEquipe, visivel: visEquipe } = useFadeOnView(0.12);

  return (
    <div className="min-h-screen text-white bg-gs-gradient-mix relative overflow-hidden px-4 py-30 md:50">
  
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -left-20 -top-10 w-[42rem] h-[42rem] rounded-full bg-guardsense-blue-light/20 filter blur-[90px]"></div>
        <div className="absolute -right-24 bottom-0 w-[36rem] h-[36rem] rounded-full bg-guardsense-button/20 filter blur-[110px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#00081480,#00081400)]"></div>
      </div>

      <main className="max-w-6xl mx-auto">

        {/* HERO GLASS */}
        <section
          ref={refHero}
          className={`
            relative z-10 overflow-hidden
            bg-gradient-to-b from-[#071126]/60 to-[#020617]/60
            backdrop-blur-lg border border-white/6 rounded-3xl
            px-6 sm:px-10 lg:px-14 py-10 sm:py-14
            transition-all duration-700
            ${visHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-guardsense-button leading-tight">
                Sobre a <span className="text-white">GuardSense</span>
              </h1>

              <p className="mt-4 text-gray-300 max-w-3xl text-base sm:text-lg leading-relaxed">
                Plataforma de monitoramento inteligente que integra câmeras, sensores e alertas.
                Projetamos soluções que combinam segurança, usabilidade e escalabilidade — sempre
                com foco em performance e privacidade.
              </p>

              <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm text-guardsense-blue-light border border-guardsense-blue-light/10">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  Integrado • Seguro
                </span>

                <span className="inline-flex items-center gap-2 bg-[#011427] px-3 py-2 rounded-full text-sm text-gray-300 border border-white/6">
                  Versão <strong className="text-white ml-1">1.0.0</strong>
                </span>
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="relative w-[170px] h-[340px] rounded-2xlborder border-white/6 shadow-xl">
                <div className="absolute inset-2 rounded-xl overflow-hidden bg-black flex items-center justify-center p-2">
                  <img
                    src="/assets/registro0.svg"
                    alt="preview app"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute right-[-6px] top-1/3 h-14 w-[4px] bg-white/8 rounded-sm" />
              </div>
            </div>
          </div>
        </section>

        {/* SEPARATOR */}
        <div className="mt-20 flex justify-center">
          <div className="w-28 h-1 rounded-full bg-guardsense-blue-light shadow-[0_0_12px_#0088ff33]" />
        </div>

        {/* NOSSA EQUIPE (titulo + intro) */}
        <section
          ref={refEquipe}
          className={`mt-10 transition-all duration-700 ${
            visEquipe ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-guardsense-blue-light text-center">
            Nossa Equipe
          </h2>

          <p className="mt-4 text-center text-gray-300 max-w-2xl mx-auto">
            Desenvolvedores apaixonados por segurança, performance e um design funcional.
            Trabalhamos com stacks modernas e damos prioridade à experiência do usuário.
          </p>

          {/* GRID PRINCIPAL */}
          <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {grupoPrincipal.map((m, i) => (
              <MembroCard key={m.nome} {...m} index={i} />
            ))}
          </div>

          {/* colaboradores*/}
          {colaboradores.length > 0 && (
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-guardsense-blue-light text-center mb-6">
                Colaboradores
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
                {colaboradores.map((m, i) => (
                  <MembroCard key={m.nome} {...m} index={i + grupoPrincipal.length} />
                ))}
              </div>
            </div>
          )}
        </section>

<div className="mt-32 flex justify-center">
  <Link
    to="/contato"
    className="
      group inline-flex items-center gap-3
      px-10 py-4 rounded-full font-semibold text-lg
      shadow-[0_0_25px_rgba(0,150,255,0.15)] border border-white
      bg-gs-gradient-light text-white
      transition-all duration-300
      hover:shadow-[0_0_35px_rgba(0,160,255,0.35)]
      hover:scale-[1.05] hover:brightness-110"
  >
    Fale com a gente

  </Link>
</div>
      </main>
    </div>
  );
};

export { SobreNos };
