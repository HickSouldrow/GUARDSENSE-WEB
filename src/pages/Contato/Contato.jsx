import React from "react";
import { Mail, Phone, Instagram, Facebook, Twitter, LifeBuoy } from "lucide-react";
import { useInView } from "react-intersection-observer";


import LOGO from "../../assets/logo-1.png";

const Contato = () => {
  const { ref: refTopo, inView: topoVisivel } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: refConteudo, inView: conteudoVisivel } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen gs-gradient-dark text-white mb-30 px-6 pt-28 pb-32">

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
          className="w-28 h-auto drop-shadow-[0_0_25px_rgba(0,0,0,0.5)] mb-4"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-guardsense-blue-light tracking-wide">
          Contato
        </h1>
        <div className="w-40 h-1 bg-guardsense-blue-light mt-3 rounded-full shadow-lg" />
      </div>

      {/* CONTEÚDO */}
      <section
        ref={refConteudo}
        className={`
          max-w-4xl mx-auto mt-20 space-y-14 text-gray-200 text-base leading-relaxed
          transition-all duration-700
          ${conteudoVisivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <p className="text-gray-300">
          Se você tiver dúvidas, sugestões ou precisar de suporte, entre em contato com a equipe
          da <strong>Guardsense</strong>. Estamos aqui para ajudar você a aproveitar toda a
          experiência da plataforma com segurança e praticidade.
        </p>

        {/* BLOCO DE INFORMAÇÕES */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* EMAIL */}
          <div className="gs-card-light rounded-2xl p-6 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg font-semibold text-guardsense-blue-light mb-3 flex items-center gap-2">
              <Mail size={20} /> E-mail
            </h3>
            <a href="mailto:suporte@guardsense.com" className="text-guardsense-blue-light hover:underline">
              suporte@guardsense.com
            </a>
          </div>

          {/* TELEFONE */}
          <div className="gs-card-light rounded-2xl p-6 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-lg font-semibold text-guardsense-blue-light mb-3 flex items-center gap-2">
              <Phone size={20} /> Telefone
            </h3>
            <p>(11) 98491-2520</p>
            <p className="text-gray-400 text-sm mt-1">
              Atendimento de segunda a sexta, das 9h às 18h.
            </p>
          </div>

          {/* CENTRAL DE AJUDA */}
          <div className="gs-card-light rounded-2xl p-6 backdrop-blur-xl hover:scale-[1.02] transition-all duration-300 md:col-span-2">
            <h3 className="text-lg font-semibold text-guardsense-blue-light mb-3 flex items-center gap-2">
              <LifeBuoy size={20} /> Central de Ajuda
            </h3>
            <a
              href="https://www.guardsense.com/help"
              target="_blank"
              className="text-guardsense-blue-light hover:underline"
            >
              www.guardsense.com/help
            </a>
          </div>
        </div>

        {/* REDES SOCIAIS */}
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold text-guardsense-blue-light mb-4">Redes Sociais</h2>
          <p className="mb-6 text-gray-300">
            Siga a Guardsense para novidades, atualizações e conteúdos exclusivos.
          </p>

          <div className="flex justify-center gap-10 text-guardsense-blue-light">
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

        <p className="text-gray-400 text-center mt-10">
          A sua opinião é essencial para que possamos continuar aprimorando nossos serviços e
          desenvolvendo soluções mais inteligentes para você.
        </p>
      </section>

    </div>
  );
};

export { Contato };
