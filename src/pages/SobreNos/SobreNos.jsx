import React, { useEffect, useRef, useState } from "react";

// Lista dos membros
const equipe = [
  { nome: "Henrique da Silva", github: "https://github.com/HickSouldrow" },
  { nome: "Matheus Jorge", github: "https://github.com/mathsant-js" },
  { nome: "Lucas Tino", github: "https://github.com/Lucas-Tino" },
];

const grupoPrincipal = equipe.slice(0, 3);
const colaboradores = equipe.slice(3);

// Hook de animação
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
          backdrop-blur-xl border border-white/10 rounded-3xl p-8
          shadow-[0_0_25px_rgba(0,0,0,0.45)]
          hover:shadow-[0_0_45px_rgba(0,0,0,0.6)]
          transition-all duration-500 hover:scale-105
          w-[220px] h-[300px] sm:w-[250px] md:w-[280px]
        "
      >
        {/* FOTO */}
        <img
          src={`https://github.com/${githubUser}.png`}
          alt={nome}
          className="
            w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full 
            border-[3px] border-guardsense-button
            shadow-xl group-hover:scale-110 transition duration-300
          "
        />

        {/* NOME */}
        <span className="mt-5 text-white font-bold text-lg sm:text-xl md:text-2xl tracking-wide group-hover:text-guardsense-button transition">
          {nome}
        </span>

        <span className="text-gray-300 mt-1 text-xs sm:text-sm group-hover:text-white transition">
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
    <div className="min-h-screen text-white px-4 pb-40 py-16 sm:py-20 gs-gradient-dark bg-luzes-diagonal">

      <main className="max-w-6xl mx-auto text-center">

        {/* BLOCO BRANCO */}
        <div
          ref={refBarra}
          className={`
            bg-white text-black py-12 px-6 
            rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.25)]
            border border-gray-100 backdrop-blur
            transition-all duration-700 max-w-3xl mx-auto
            ${visivelBarra ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-guardsense-button mb-6">
            Sobre a Guardsense
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-700">
            A <strong>Guardsense</strong> é uma plataforma de monitoramento inteligente
            criada para oferecer segurança moderna e acessível.
          </p>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
            Nosso objetivo é tornar a vigilância tecnológica simples, eficiente e integrada.
          </p>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-700">
            Evoluímos constantemente, implementando tecnologias avançadas e ouvindo nossos usuários.
          </p>
        </div>

        {/* TÍTULO */}
        <div
          ref={refEquipe}
          className={`
            mt-20 sm:mt-28 transition-all duration-700
            ${visivelEquipe ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-guardsense-blue-light">
            Nossa Equipe
          </h1>

          <div className="w-28 sm:w-36 h-1 bg-guardsense-blue-light mx-auto mt-3 rounded-full" />

          <p className="text-gray-300 text-sm sm:text-base mt-5 mb-12 max-w-xl mx-auto">
            Desenvolvedores apaixonados por criar soluções modernas e escaláveis.
          </p>
        </div>

        {/* PRINCIPAL */}
        <section className="mt-10 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-14 place-items-center">
            {grupoPrincipal.map((membro, i) => (
              <MembroCard key={membro.nome} {...membro} index={i} />
            ))}
          </div>
        </section>

        {/* COLABORADORES */}
        {colaboradores.length > 0 && (
          <section className="mt-16 mb-24">
            <h2 className="text-lg sm:text-xl font-bold text-guardsense-blue-light mb-8">
              Colaboradores
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 place-items-center">
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

        <div className="h-20" />
      </main>
    </div>
  );
};

export { SobreNos };
