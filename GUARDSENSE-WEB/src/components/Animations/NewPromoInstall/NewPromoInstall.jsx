import React from "react";
import { useInView } from "react-intersection-observer";
import PlayStore from "../../../assets/play-store.svg";
import Screenshot1 from "../../../assets/screenshot1.svg";

function NewPromoInstall() {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative w-full bg-guardsense-blue-light py-20 px-6 text-guardsense-button overflow-hidden">

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* TEXTOS */}
        <div
          ref={textRef}
          className={`flex-1 flex flex-col justify-center items-center md:items-start gap-4 max-w-md transition-all duration-700 ${
            textInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center md:text-left">
            Instale o GuardSense agora
          </h2>

          <p className="text-guardsense-darker-blue text-lg sm:text-xl text-center md:text-left">
            Controle sensores, receba alertas e gerencie tudo direto do celular.
          </p>

          <button className="flex items-center text-white justify-center gap-4 bg-guardsense-darker-blue hover:bg-guardsense-darker-blue transition px-7 py-3 rounded-2xl font-bold text-lg sm:text-xl shadow-lg transform hover:-translate-y-1 hover:scale-105 duration-300">
            <img src={PlayStore} alt="Play Store" className="w-6 h-6 sm:w-7 sm:h-7" />
            Instalar agora
          </button>
        </div>

        <div
          ref={imgRef}
          className={`flex-1 flex justify-center transition-all duration-700 ${
            imgInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative h-[560px] w-[260px] bg-black rounded-[2.2rem] border-[5px] border-gray-600 shadow-[0_25px_70px_rgba(0,0,0,0.55)] overflow-hidden">
            <div className="absolute right-[-7px] top-1/3 h-24 bg-gray-500 rounded-md"></div>
            <div className="absolute inset-[6px] rounded-[2rem] overflow-hidden bg-black">
              <img
                src={Screenshot1}
                alt="App Screenshot"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export { NewPromoInstall };
