import React from "react";
import { Mail, Phone, Instagram, Facebook, Twitter, LifeBuoy } from "lucide-react";
import { useInView } from "react-intersection-observer";

import LOGO from "../../assets/logo-1.png";

const Contato = () => {
  const { ref: refTopo, inView: topoVisivel } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: refConteudo, inView: conteudoVisivel } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen gs-gradient-dark text-white px-4 sm:px-6 pt-24 pb-28 relative">

      {/* EFEITOS DE LUZ */}
      <div className="absolute -top-16 -right-16 w-56 sm:w-72 h-56 sm:h-72 bg-guardsense-blue-light/20 blur-3xl rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-guardsense-blue-light/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>

      {/* TOPO */}
      <div
        ref={refTopo}
        className={`
          flex flex-col items-center justify-center text-center
          transition-all duration-700 
          ${topoVisivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <img
          src={LOGO}
          alt="Guardsense"
          className="w-24 sm:w-28 drop-shadow-[0_5px_30px_rgba(0,0,0,0.6)] mb-4"
        />

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-guardsense-blue-light tracking-wide drop-shadow-lg">
          Contato
        </h1>

        <div className="w-32 sm:w-48 h-1.5 bg-guardsense-blue-light mt-3 rounded-full shadow-[0_0_15px_rgba(0,150,255,0.7)]" />
      </div>

      {/* CONTEÚDO */}
      <section
        ref={refConteudo}
        className={`
          max-w-4xl mx-auto mt-16 sm:mt-20 space-y-14 sm:space-y-16 text-gray-200 text-sm sm:text-base leading-relaxed
          transition-all duration-700
          ${conteudoVisivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <p className="text-gray-300 text-center sm:text-left text-base sm:text-lg leading-relaxed tracking-wide">
          Se você tiver dúvidas, sugestões ou precisar de suporte, entre em contato com a equipe
          da <strong className="text-guardsense-blue-light">Guardsense</strong>. Estamos aqui para ajudar.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mt-4">

          {/* EMAIL */}
          <div className="
            rounded-3xl p-5 sm:p-6 bg-white/5 border border-white/10 backdrop-blur-2xl
            hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,150,255,0.25)]
            transition-all duration-300 group
          ">
            <h3 className="text-lg sm:text-xl font-semibold text-guardsense-blue-light mb-2 flex items-center gap-2">
              <Mail size={20} className="group-hover:scale-110 transition" /> E-mail
            </h3>

            <a
              href="mailto:suporte@guardsense.com"
              className="text-guardsense-blue-light hover:underline text-base sm:text-lg break-all"
            >
              suporte@guardsense.com
            </a>
          </div>

          {/* TELEFONE */}
          <div className="
            rounded-3xl p-5 sm:p-6 bg-white/5 border border-white/10 backdrop-blur-2xl
            hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,150,255,0.25)]
            transition-all duration-300 group
          ">
            <h3 className="text-lg sm:text-xl font-semibold text-guardsense-blue-light mb-2 flex items-center gap-2">
              <Phone size={20} className="group-hover:scale-110 transition" /> Telefone
            </h3>

            <p className="text-base sm:text-lg">(11) 98491-2520</p>

            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Seg–Sex, das 9h às 18h.
            </p>
          </div>

          {/* CENTRAL DE AJUDA */}
          <div className="
            md:col-span-2 rounded-3xl p-6 sm:p-8 bg-white/5 border border-white/10 backdrop-blur-2xl
            hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,150,255,0.25)]
            transition-all duration-300 group
          ">
            <h3 className="text-lg sm:text-xl font-semibold text-guardsense-blue-light mb-3 flex items-center gap-2">
              <LifeBuoy size={20} className="group-hover:scale-110 transition" /> Central de Ajuda
            </h3>

            <a
              href=""
              target="_blank"
              className="text-guardsense-blue-light hover:underline text-base sm:text-lg break-all"
            >
              www.guardsense.com/help
            </a>
          </div>

        </div>

        {/* REDES SOCIAIS */}
        <div className="text-center mt-10 sm:mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-guardsense-blue-light mb-3 sm:mb-4">
            Redes Sociais
          </h2>

          <p className="mb-5 sm:mb-6 text-gray-300 text-base sm:text-lg">
            Fique por dentro de novidades e atualizações.
          </p>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-14 text-guardsense-blue-light text-sm sm:text-lg">

            <a className="group hover:text-white transition flex flex-col items-center" href="#">
              <Facebook className="mb-1 group-hover:scale-110 transition" />
              Facebook
            </a>

            <a className="group hover:text-white transition flex flex-col items-center" href="#">
              <Twitter className="mb-1 group-hover:scale-110 transition" />
              Twitter
            </a>

            <a className="group hover:text-white transition flex flex-col items-center" href="#">
              <Instagram className="mb-1 group-hover:scale-110 transition" />
              Instagram
            </a>

          </div>
        </div>

        <p className="text-gray-400 text-center mt-10 sm:mt-14 text-base sm:text-lg">

        </p>

      </section>
    </div>
  );
};

export { Contato };
