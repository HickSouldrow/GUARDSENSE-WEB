import React from "react";
import { useInView } from "react-intersection-observer";

function FinalCallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="w-full min-h-screen bg-guardsense-blue-dark flex items-center px-6 py-24 relative overflow-hidden">
      <div
        ref={ref}
        className={`
          max-w-3xl mx-auto text-center text-white transition-all duration-700 w-full
          ${inView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-6"}
        `}
      >
        <h2 className="text-4xl font-bold mb-6">Entre em contato</h2>

        <p className="text-2xl text-guardsense-button font-semibold tracking-wide mb-8">
          (11) 98491-2520
        </p>

        <button
          className="
            bg-guardsense-button text-black font-semibold
            py-4 px-10 rounded-xl text-xl
            shadow-xl hover:scale-105 hover:shadow-2xl transition-all
          "
        >
          Fale Conosco
        </button>
      </div>

      {/* Detalhe visual de fundo */}
      <div className="absolute left-0 right-0 bottom-0 h-48 opacity-20 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
    </section>
  );
}

export { FinalCallToAction };
