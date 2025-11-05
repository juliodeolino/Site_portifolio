import { CiCircleInfo } from "react-icons/ci";

const Skills = () => {
  return (
    <>
      <section className="relative flex w-full min-h-[100vh] bg-minha-cor-secundaria font-roboto justify-center"
      id="skills">
        <div className="absolute top-10 left-32">
          <h2 className="pb-2 text-xl font-semibold text-minha-cor-terciaria-black">
            Skills
          </h2>
          <p className="pb-2 text-md text-minha-cor-secundaria-light">
            #Hard-Skills
          </p>
        </div>
        <div className="mt-42 max-w-7xl mx auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="w-72  h-[50%]">
            <div className="flex itens-center gap-5 font-bold">
              <CiCircleInfo className="text-xl" />
              JavaScript
            </div>
            <p className="pl-10 justify-between text-md text-minha-cor-secundaria-light">
              Tenho domínio da linguagem JavaScript, utilizando-a tanto no
              front-end quanto no back-end para desenvolver aplicações dinâmicas
              e interativas.
            </p>
          </div>
          <div className="w-72 h-[50%] ">
            <div className="flex items-center gap-5 font-semibold">
              <CiCircleInfo className="text-xl" />
              React
            </div>
            <p className="pl-10 justify-between text-md text-minha-cor-secundaria-light">
              Utilizo React para criar interfaces modernas, responsivas e
              reutilizáveis, aplicando conceitos como componentização, hooks e
              gerenciamento de estado.
            </p>
          </div>
          <div className="w-72 h-[50%]">
            <div className="flex items-center gap-5 font-semibold">
              <CiCircleInfo className="text-xl" />
              Node.js
            </div>
            <p className="pl-10 justify-between text-md text-minha-cor-secundaria-light">
              Com Node.js, desenvolvo APIs e serviços back-end escaláveis,
              integrando bancos de dados e aplicando boas práticas de
              desenvolvimento.
            </p>
          </div>
          <div className="w-72 h-[50%]">
            <div className="flex items-center gap-5 font-semibold">
              <CiCircleInfo className="text-xl" />
              Python
            </div>
            <p className="pl-10 justify-between text-md text-minha-cor-secundaria-light">
              Uso Python para automações, scripts, análise de dados e
              desenvolvimento de aplicações, aproveitando sua legibilidade e
              vasto ecossistema.
            </p>
          </div>
          <div className="w-72 h-[50%]">
            <div className="flex items-center gap-5 font-semibold">
              <CiCircleInfo className="text-xl" />
              MySQL
            </div>
            <p className="pl-10 justify-between text-md text-minha-cor-secundaria-light">
              Trabalho com modelagem de dados e consultas SQL em bancos
              relacionais, garantindo integridade e desempenho na manipulação de
              dados.
            </p>
          </div>
          <div className="w-72 h-[50%]">
            <div className="flex items-center gap-5 font-semibold">
              <CiCircleInfo className="text-xl" />
              MongoDB
            </div>
            <p className="pl-10 justify-between text-md text-minha-cor-secundaria-light">
              Utilizo MongoDB em projetos que exigem flexibilidade com dados não
              estruturados, aplicando operações CRUD e integração com back-ends
              Node.js.
            </p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
