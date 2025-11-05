import Card from "./Card";

const Projetos = () => {
  return (
    <>
      <section className="w-full min-h-[100vh] bg-minha-cor-secundaria flex items-start justify-center font-roboto relative"
      id="projetos">
        <div className="absolute top-10 left-32">
          <h2 className="text-minha-cor-terciaria-black font-bold text-xl">
            Projetos
          </h2>
          <p className="text-minha-cor-secundaria-light">#GitHub</p>
        </div>
        <div className="mt-42 max-w-7xl mx auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <Card 
             imgSrc = "./Image.png" 
             title = "Ecommerce"
             bodyText= "Loja de materiais esportivos"
             />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;
