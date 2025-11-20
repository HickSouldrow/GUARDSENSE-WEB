import React, { useEffect, useRef, useState } from "react";

// Lista dos membros
const equipe = [
  { nome: "Henrique da Silva", github: "https://github.com/HickSouldrow" },
  { nome: "Matheus Jorge", github: "https://github.com/mathsant-js" },
  { nome: "Lucas Tino", github: "https://github.com/Lucas-Tino" },
];

const grupoPrincipal = equipe.slice(0, 3);
const colaboradores = equipe.slice(3);

// Hook de animação ao entrar em viewport
const useFadeOnView = (threshold = 0.2) => {
  const ref = useRef();
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisivel(true),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visivel };
};

// Card de membro
const MembroCard = ({ nome, github, index }) => {
  const githubUser = github.replace("https://github.com/", "");
  const { ref, visivel } = useFadeOnView(0.2);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 transform
        ${visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group flex flex-col items-center text-center

          bg-gradient-to-br from-[#101828e6] via-[#0c1222dd] to-[#00040acc]
          backdrop-blur-xl border border-white/10 rounded-3xl p-10

          shadow-[0_0_25px_rgba(0,0,0,0.45)]
          hover:shadow-[0_0_45px_rgba(0,0,0,0.6)]
          transition-all duration-500 hover:scale-105
          w-[260px] h-[330px] sm:w-[280px] md:w-[300px]
        "
      >
        <img
          src={`https://github.com/${githubUser}.png`}
          alt={nome}
          className="
            w-32 h-32 md:w-36 md:h-36 rounded-full 
            border-[4px] border-guardsense-button
            shadow-xl group-hover:scale-110 transition duration-300
          "
        />

        <span className="mt-6 text-white font-bold text-xl md:text-2xl tracking-wide group-hover:text-guardsense-button transition">
          {nome}
        </span>

        <span className="text-gray-300 mt-1 text-sm md:text-base group-hover:text-white transition">
          GitHub Profile
        </span>
      </a>
    </div>
  );
};

const SobreNos = () => {
  const { ref: refBarra, visivel: visivelBarra } = useFadeOnView();
  const { ref: refEquipe, visivel: visivelEquipe } = useFadeOnView();

  return (
<div className="min-h-screen text-white px-4 mt-10 py-20 gs-gradient-dark bg-luzes-diagonal relative">

      <main className="max-w-6xl mx-auto mt-12 text-center">

        {/* BLOCO BRANCO PREMIUM */}
        <div
          ref={refBarra}
          className={`
            bg-white text-black py-16 px-8 
            rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.25)]
            border border-gray-100 backdrop-blur

            transition-all duration-700
            ${visivelBarra ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h1 className="text-5xl font-extrabold text-guardsense-button mb-6 drop-shadow-sm">
            Sobre a Guardsense
          </h1>

          <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            A <strong>Guardsense</strong> é uma plataforma de monitoramento inteligente
            criada para oferecer segurança moderna, confiável e acessível.
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            Nosso objetivo é tornar a vigilância tecnológica simples e eficiente, com um
            sistema intuitivo, performance estável e integração com dispositivos inteligentes.
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            Evoluímos constantemente, ouvindo usuários e implementando tecnologias avançadas
            para garantir uma experiência moderna e completa.
          </p>
        </div>

        {/* TÍTULO DA EQUIPE */}
        <div
          ref={refEquipe}
          className={`
            mt-28 transition-all duration-700 
            ${visivelEquipe ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h1 className="text-guardsense-blue-light text-4xl md:text-5xl font-extrabold drop-shadow">
            Nossa Equipe
          </h1>
          <div className="w-36 h-1 bg-guardsense-blue-light mx-auto mt-3 rounded-full" />

          <p className="text-gray-300 text-base mt-6 mb-14 max-w-2xl mx-auto">
            Desenvolvedores apaixonados por criar soluções seguras, modernas e escaláveis.
          </p>
        </div>

        {/* PRINCIPAL */}
        <section className="mt-10 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 place-items-center">
            {grupoPrincipal.map((membro, i) => (
              <MembroCard key={membro.nome} {...membro} index={i} />
            ))}
          </div>
        </section>

        {/* COLABORADORES */}
        {colaboradores.length > 0 && (
          <section className="mt-20 mb-32">
            <h2 className="text-xl font-bold text-guardsense-blue-light mb-6">
              Colaboradores
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 place-items-center">
              {colaboradores.map((membro, i) => (
                <MembroCard
                  key={membro.nome}
                  {...membro}
                  index={i + grupoPrincipal.length}
                />
              ))}
            </div>
          </section>
        )}

        <div className="h-32" />
      </main>
    </div>
  );
};

export { SobreNos };
