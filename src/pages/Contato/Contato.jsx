import React from "react";
import { Mail, Phone, Instagram, Facebook, Twitter, LifeBuoy } from "lucide-react";
import { useInView } from "react-intersection-observer";

import LOGO from "../../assets/logo-1.png";

const Contato = () => {
  const { ref: refTopo, inView: topoVisivel } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: refConteudo, inView: conteudoVisivel } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen gs-gradient-dark mb-30 text-white px-6 pt-28 pb-32 relative">

      {/* EFEITO GLASS FLUTUANTE */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-guardsense-blue-light/20 blur-3xl rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-guardsense-blue-light/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>

      {/* TOPO COM LOGO */}
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
          className="w-28 h-auto drop-shadow-[0_5px_30px_rgba(0,0,0,0.6)] mb-4 animate-fade-in"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-guardsense-blue-light tracking-wide drop-shadow-lg">
          Contato
        </h1>

        <div className="w-48 h-1.5 bg-guardsense-blue-light mt-4 rounded-full shadow-[0_0_15px_rgba(0,150,255,0.7)]" />
      </div>

      {/* CONTEÚDO */}
      <section
        ref={refConteudo}
        className={`
          max-w-4xl mx-auto mt-20 space-y-16 text-gray-200 text-base leading-relaxed
          transition-all duration-700
          ${conteudoVisivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <p className="text-gray-300 text-lg leading-relaxed tracking-wide text-center md:text-left">
          Se você tiver dúvidas, sugestões ou precisar de suporte, entre em contato com a equipe
          da <strong className="text-guardsense-blue-light">Guardsense</strong>. Estamos aqui para oferecer
          a melhor experiência com segurança, clareza e agilidade.
        </p>

        {/* BLOCO DE INFORMAÇÕES */}
        <div className="grid md:grid-cols-2 gap-10 mt-10">

          {/* CARD BASE GLOBAL */}
          {/** card-base é apenas um conceito visual */}

          {/* EMAIL */}
          <div className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-2xl
                          hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,150,255,0.25)]
                          transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-guardsense-blue-light mb-3 flex items-center gap-2">
              <Mail size={22} className="group-hover:scale-110 transition" /> E-mail
            </h3>
            <a
              href="mailto:suporte@guardsense.com"
              className="text-guardsense-blue-light hover:underline text-lg"
            >
              suporte@guardsense.com
            </a>
          </div>

          {/* TELEFONE */}
          <div className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-2xl
                          hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,150,255,0.25)]
                          transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-guardsense-blue-light mb-3 flex items-center gap-2">
              <Phone size={22} className="group-hover:scale-110 transition" /> Telefone
            </h3>
            <p className="text-lg">(11) 98491-2520</p>
            <p className="text-gray-400 text-sm mt-2">
              Atendimento de segunda a sexta, das 9h às 18h.
            </p>
          </div>

          {/* CENTRAL DE AJUDA (CARD MAIOR) */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-white/5 border border-white/10 backdrop-blur-2xl
                          hover:bg-white/10 hover:shadow-[0_0_25px_rgba(0,150,255,0.25)]
                          transition-all duration-300 group">
            <h3 className="text-xl font-semibold text-guardsense-blue-light mb-3 flex items-center gap-2">
              <LifeBuoy size={22} className="group-hover:scale-110 transition" /> Central de Ajuda
            </h3>

            <a
              href=""
              target="_blank"
              className="text-guardsense-blue-light hover:underline text-lg"
            >
              www.guardsense.com/help
            </a>
          </div>
        </div>

        {/* REDES SOCIAIS */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-guardsense-blue-light mb-4">
            Redes Sociais
          </h2>
          <p className="mb-6 text-gray-300 text-lg">
            Fique por dentro de novidades, atualizações e conteúdos exclusivos.
          </p>

          <div className="flex justify-center gap-14 text-guardsense-blue-light text-lg">

            <a className="group hover:text-white transition" href="#">
              <Facebook className="mx-auto mb-1 group-hover:scale-110 transition" />
              Facebook
            </a>

            <a className="group hover:text-white transition" href="#">
              <Twitter className="mx-auto mb-1 group-hover:scale-110 transition" />
              Twitter
            </a>

            <a className="group hover:text-white transition" href="#">
              <Instagram className="mx-auto mb-1 group-hover:scale-110 transition" />
              Instagram
            </a>

          </div>
        </div>

        <p className="text-gray-400 text-center mt-14 text-lg">
          Sua opinião é essencial para aprimorarmos a Guardsense e criarmos soluções ainda mais
          inteligentes para você.
        </p>

      </section>
    </div>
  );
};

export { Contato };
