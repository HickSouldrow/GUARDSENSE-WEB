import React from 'react';
import { Camera, Bell, Wifi, ShieldCheck } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  { icon: Camera, text: "Câmeras HD" },
  { icon: Bell, text: "Alertas Imediatos" },
  { icon: Wifi, text: "Conectividade Estável" },
  { icon: ShieldCheck, text: "Proteção Ativa" }
];

const FeaturesGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-200">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-center text-3xl sm:text-4xl font-bold text-guardsense-darker-blue mb-12">
          Recursos Principais
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col items-center p-6 rounded-xl bg-guardsense-blue-dark transition-all duration-700 transform ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <f.icon size={36} className="text-guardsense-button mb-4" />
              <p className="text-base font-medium text-white text-center">{f.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export { FeaturesGrid };
