import React from "react";
import { useInView } from "react-intersection-observer";

const Termos = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div className="relative min-h-screen text-white gs-gradient-dark px-6 pb-32 lg:px-12 overflow-hidden">

      {/* ILUMINAÇÃO DE FUNDO */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-20 left-1/3 w-[480px] h-[480px] bg-guardsense-blue-light/25 blur-[120px] rounded-full opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[380px] h-[380px] bg-guardsense-blue-dark/30 blur-[100px] rounded-full opacity-40"></div>
      </div>

      <main className="relative z-10 max-w-5xl mx-auto py-20 mt-20">

        {/* Cabeçalho */}
        <h1
          className={`
            text-4xl md:text-5xl font-bold text-center
            text-guardsense-blue-light tracking-wide
            drop-shadow-[0_0_15px_rgba(0,150,255,0.5)]
            transition-all duration-700
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          Termos de Serviço
        </h1>

        <div
          className={`
            w-40 h-1 bg-guardsense-blue-light mx-auto mt-4 rounded-full shadow-lg shadow-guardsense-blue-light/40
            transition-all duration-700 delay-300
            ${inView ? "opacity-100 scale-100" : "opacity-0 scale-75"}
          `}
        ></div>

        <div ref={ref} className="mt-16 space-y-16">

          {/* Seção 1 */}
          <section className="gs-card fade-up animation-delay-200 enhanced-section">
            <h2 className="section-title">1. Aceitação dos Termos</h2>
            <p className="section-text">
              Ao utilizar os serviços da Guardsense, você concorda integralmente com estes
              Termos de Serviço. Eles estabelecem as regras, limitações, direitos e responsabilidades
              que garantem o funcionamento seguro, ético e organizado da plataforma.
              Caso não concorde com qualquer parte, recomendamos que interrompa o uso imediatamente.
            </p>
          </section>

          {/* Seção 2 */}
          <section className="gs-card fade-up animation-delay-300 enhanced-section">
            <h2 className="section-title">2. Modificações e Atualizações</h2>
            <p className="section-text">
              A plataforma evolui constantemente, e os termos podem ser atualizados para refletir
              melhorias de segurança, novas funcionalidades, adequações legais ou aprimoramentos
              da experiência do usuário. Mudanças significativas serão comunicadas de forma clara.
              O uso contínuo após tais alterações representa sua aceitação das atualizações.
            </p>
          </section>

          {/* Seção 3 */}
          <section className="gs-card fade-up animation-delay-400 enhanced-section">
            <h2 className="section-title">3. Conta de Usuário e Segurança</h2>
            <p className="section-text">
              Ao criar uma conta, você concorda em fornecer informações verdadeiras, completas e
              atualizadas. A segurança das suas credenciais é de sua responsabilidade, e qualquer
              atividade realizada com sua conta será considerada autorizada por você.
              Recomendamos o uso de autenticação em dois fatores sempre que possível.
            </p>
          </section>

          {/* Seção 4 */}
          <section className="gs-card fade-up animation-delay-500 enhanced-section">
            <h2 className="section-title">4. Propriedade Intelectual</h2>
            <p className="section-text">
              Todos os conteúdos — incluindo textos, imagens, logotipos, marca, elementos visuais
              e funcionalidades — pertencem à Guardsense ou seus parceiros tecnológicos.
              É estritamente proibida a reprodução, distribuição ou modificação sem autorização
              explícita.
            </p>
          </section>

          {/* Seção 5 */}
          <section className="gs-card fade-up animation-delay-600 enhanced-section">
            <h2 className="section-title">5. Uso Aceitável da Plataforma</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2 section-list">
              <li>Não publique conteúdo difamatório, ofensivo, discriminatório ou ilegal.</li>
              <li>Não tente acessar áreas restritas, modificar códigos ou violar sistemas.</li>
              <li>Não utilize automações, bots ou métodos de coleta de dados não autorizados.</li>
              <li>Não prejudique o desempenho, estabilidade ou reputação da plataforma.</li>
            </ul>
          </section>

          {/* Seção 6 */}
          <section className="gs-card fade-up animation-delay-700 enhanced-section">
            <h2 className="section-title">6. Limitação de Responsabilidade</h2>
            <p className="section-text">
              Embora trabalhemos para fornecer um ambiente seguro e estável, a Guardsense não se
              responsabiliza por danos indiretos, lucros cessantes, perda de dados ou problemas
              decorrentes de fatores externos, como falhas na conexão ou interrupções
              inesperadas na rede.
            </p>
          </section>

          {/* Seção 7 */}
          <section className="gs-card fade-up animation-delay-800 enhanced-section">
            <h2 className="section-title">7. Suspensão e Encerramento</h2>
            <p className="section-text">
              Contas que violarem estes Termos de Serviço poderão ser suspensas ou encerradas sem
              aviso prévio, especialmente em casos de abuso, fraude ou risco à segurança da
              plataforma ou de outros usuários.
            </p>
          </section>

          {/* Seção 8 */}
          <section className="gs-card fade-up animation-delay-900 enhanced-section">
            <h2 className="section-title">8. Disposições Gerais</h2>
            <ul className="list-decimal list-inside text-gray-300 space-y-2 section-list">
              <li>Os termos seguem as legislações vigentes aplicáveis ao território nacional.</li>
              <li>Eventuais conflitos poderão ser resolvidos via arbitragem.</li>
              <li>Se qualquer cláusula for considerada inválida, as demais permanecem válidas.</li>
              <li>Este documento constitui o acordo integral entre usuário e plataforma.</li>
            </ul>
          </section>

          {/* Rodapé */}
          <footer className="text-center text-sm text-gray-400 mt-20 fade-up animation-delay-1000">
            Última atualização: 18 de Novembro de 2025
          </footer>

        </div>
      </main>
    </div>
  );
};

export { Termos };
