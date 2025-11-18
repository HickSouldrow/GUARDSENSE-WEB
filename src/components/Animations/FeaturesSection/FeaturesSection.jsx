import React from "react";
import { useInView } from "react-intersection-observer";

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
    <section className="w-full bg-guardsense-darker-blue py-16 px-6 text-white">

      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Escolha seu Plano</h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Segurança profissional para todos os níveis de necessidade.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* PLANO DELUXE */}
        <div
          ref={deluxe.ref}
          className={`
            p-6 rounded-xl shadow-lg 
            gs-gradient-mix
            hover:scale-[1.02] transition-transform
            ${deluxe.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            duration-700
          `}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Plano Deluxe</h3>
            <div className="bg-white text-guardsense-darker-blue font-bold px-3 py-1 rounded-lg shadow">
              R$ 69,99 / mês
            </div>
          </div>

          <button className="w-full bg-guardsense-button hover:bg-guardsense-blue-light transition py-3 rounded-lg font-semibold mb-5">
            Assine agora!
          </button>

          <ul className="text-sm space-y-2 max-h-40 overflow-auto pr-2 scrollbar-thin">
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
            p-6 rounded-xl shadow-lg 
            gs-gradient-mix
            hover:scale-[1.02] transition-transform
            ${comum.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            duration-700 delay-200
          `}
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">Plano Comum</h3>
            <div className="bg-white text-guardsense-darker-blue font-bold px-3 py-1 rounded-lg shadow">
              R$ 19,99 / mês
            </div>
          </div>

          <button className="w-full bg-guardsense-button hover:bg-guardsense-blue-light transition py-3 rounded-lg font-semibold mb-5">
            Assine agora!
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
