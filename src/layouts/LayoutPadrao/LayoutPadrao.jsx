import { Outlet } from 'react-router-dom';
import { Cabecalho, Conteudo, Rodape } from '../../components';

const LayoutPadrao = () => {

  return (
<div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-[#0097B2] via-[#002C36] to-[#00404C] animate-fundo">
         <Cabecalho />
      <main className="flex-grow space-y-20">
        <Conteudo>
          <Outlet />
        </Conteudo>
      </main>
      <Rodape/>
    </div>
  );
};

export { LayoutPadrao };
