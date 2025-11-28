import React from "react";
import { useInView } from "react-intersection-observer";
import { Crown, Star } from "lucide-react";

function FeaturesSection() {
  const deluxe = useInView({ triggerOnce: true, threshold: 0.2 });
  const comum = useInView({ triggerOnce: true, threshold: 0.2 });

  const deluxeItems = [
    "4 Câmeras (monitoramento avançado)",
    "Sensor de presença",
    "Sensor de gás",
    "Sensor de temperatura",
    "Sensor de umidade",
    "Sensor de alagamento",
    "Tranca da porta",
    "Desbloqueio por digital",
    "Reconhecimento facial",
    "Assistência profissional dedicada",
  ];

  const comumItems = [
    "2 Câmeras (monitoramento básico)",
    "Sensor de presença",
    "Sensor de gás",
    "Tranca da porta (controle básico)",
    "Desbloqueio por senha",
  ];

  return (
    <section className="w-full bg-guardsense-darker-blue py-20 px-6 text-white">

      {/* TÍTULO */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Escolha seu Plano
        </h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Segurança profissional para todos os níveis de necessidade.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start gap-10">

        <div
          ref={deluxe.ref}
          className={`
            w-full md:w-1/2
            relative p-8 rounded-2xl shadow-2xl
            border border-guardsense-button/60
            hover:border-guardsense-button transition-all

            hover:shadow-[0_0_35px_rgba(114,137,218,0.55)]
            hover:scale-[1.04]

            ${deluxe.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            duration-700
          `}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 
                          rounded-full bg-guardsense-button text-white text-xs 
                          font-semibold shadow-lg flex items-center gap-1">
            <Star size={14} /> RECOMENDADO
          </div>

          <div className="flex justify-between items-center mb-5">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Crown className="text-yellow-300" size={24} /> Plano Deluxe
            </h3>

            <div className="bg-guardsense-button text-white font-bold px-4 py-2 rounded-lg shadow-lg">
              R$ 69,99 / mês
            </div>
          </div>

          <button
            className="
              w-full bg-guardsense-button
              hover:brightness-125 transition py-3 rounded-xl font-semibold mb-6
              shadow-lg shadow-guardsense-button/40 text-white tracking-wide
            "
          >
            Assine já — Mais Vantajoso
          </button>

          <ul className="text-sm space-y-2 pr-2">
            {deluxeItems.map((it, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-300 font-bold">✓</span>
                <span className="text-gray-100">{it}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* PLANO COMUM */}
        <div
          ref={comum.ref}
          className={`
            w-full md:w-1/2
            p-6 rounded-xl shadow-lg
            border border-white/10

            gs-gradient-mix

            hover:scale-[1.015] transition-transform

            ${comum.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            duration-700 delay-200
          `}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Plano Comum</h3>

            <div className="bg-white text-guardsense-darker-blue font-bold px-3 py-1 rounded-md shadow">
              R$ 19,99 / mês
            </div>
          </div>

          <button className="w-full bg-guardsense-button hover:bg-guardsense-blue-light transition py-3 rounded-lg font-semibold mb-5">
            Assine já!
          </button>

          <ul className="text-sm space-y-2 pr-2">
            {comumItems.map((it, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-300 font-bold">✓</span>
                <span className="text-gray-100">{it}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}

export { FeaturesSection };
