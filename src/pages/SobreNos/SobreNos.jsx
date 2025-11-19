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
  const { ref, visivel } = useFadeOnView(0.25);

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
          gs-card-light group flex flex-col items-center text-center 
          hover:scale-105 hover:border-guardsense-button/30 
          transition duration-300
          bg-gradient-to-br from-guardsense-blue-dark/40 to-guardsense-darker-blue/40
          backdrop-blur-xl

          /* CAIXA AUMENTADA */
          w-[250px] h-[220px] sm:w-[270px] sm:h-[320px] md:w-[290px] md:h-[320px]

          rounded-2xl p-8 border border-white/10 shadow-2xl
        "
      >
        {/* FOTO AUMENTADA */}
        <img
          src={`https://github.com/${githubUser}.png`}
          alt={nome}
          className="
            w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36
            rounded-full border-4 border-guardsense-button 
            shadow-2xl group-hover:scale-110 transition duration-300
          "
        />

        {/* NOME MAIOR */}
        <span className="mt-6 text-white font-semibold text-lg sm:text-xl md:text-2xl group-hover:text-guardsense-button">
          {nome}
        </span>

        {/* GitHub TEXTO MAIOR */}
        <span className="text-sm sm:text-base md:text-lg text-gray-300 group-hover:text-gray-200 mt-1">
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
    <div className="min-h-screen text-white px-4 mt-10 py-20 gs-gradient-dark relative">

      <main className="max-w-6xl mx-auto mt-15 text-center">

        {/* SEÇÃO BRANCA REESTILIZADA */}
        <div
          ref={refBarra}
          className={`
            bg-white text-black py-16 px-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)]
            max-w-5xl mx-auto border border-gray-200
            transition-all duration-700 
            ${visivelBarra ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h1 className="text-4xl font-extrabold text-guardsense-button mb-6 tracking-wide">
            Sobre a Guardsense
          </h1>

          <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
            A <strong>Guardsense</strong> é uma plataforma de monitoramento inteligente  
            criada para oferecer segurança moderna, confiável e acessível.
            Unimos sensores, automação e tecnologia avançada para entregar 
            controle total ao usuário em tempo real.
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
            Nosso objetivo é tornar a vigilância tecnológica simples e eficiente, 
            com um sistema intuitivo, performance estável e integração com
            dispositivos inteligentes.
          </p>

          <p className="mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
            Evoluímos constantemente, ouvindo usuários, atualizando ferramentas
            e implementando novas tecnologias para garantir uma experiência
            segura, moderna e completa.
          </p>
        </div>

        {/* EQUIPE */}
        <div
          ref={refEquipe}
          className={`
            mt-24 transition-all duration-700 
            ${visivelEquipe ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <h1 className="gs-title text-guardsense-blue-light">Nossa Equipe</h1>
          <div className="w-32 h-1 bg-guardsense-blue-light mx-auto mt-3 rounded-full shadow-lg" />

          <p className="text-gray-200 text-base mt-6 mb-12 max-w-2xl mx-auto">
            A equipe é formada por desenvolvedores apaixonados por criar soluções
            seguras, modernas e escaláveis — cada membro contribui para entregar
            um produto sólido, eficiente e inovador.
          </p>
        </div>

        {/* GRUPO PRINCIPAL */}
        <section className="mt-30 mb-10">

          <div className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
            gap-12 justify-center place-items-center
          ">
            {grupoPrincipal.map((membro, i) => (
              <MembroCard key={membro.nome} {...membro} index={i} />
            ))}
          </div>
        </section>

        {/* COLABORADORES */}
     {colaboradores.length > 0 && (
  <section className="mt-30 mb-30">
    <h2 className="text-xl font-bold text-guardsense-blue-light mb-6">
      Colaboradores
    </h2>

    <div
      className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2
        gap-10 px-30 p-4 justify-center place-items-center
      "
    >
      {colaboradores.map((membro, i) => (
        <div className="w-full max-w-md"> 
          <MembroCard
            key={membro.nome}
            {...membro}
            index={i + grupoPrincipal.length}
          />
        </div>
      ))}
    </div>
  </section>
)}

        
        <div className="h-44 w-full"></div>

      </main>
    </div>
  );
};

export { SobreNos };
