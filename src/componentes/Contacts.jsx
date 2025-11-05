const Contacts = () => {
  return (
    <>
      <section id="contatos">
        <div className="bg-minha-cor-secundaria w-full min-h-[100vh] flex items-center justify-center font-roboto relative  ">
          <div className="absolute top-10 left-32">
            <h2 className="text-minha-cor-terciaria-black font-bold text-xl">
              Contatos
            </h2>
            <p className="text-minha-cor-secundaria-light">#Links</p>
          </div>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
              <a href="mailto:juliodeolino07@gmail.com">
                <img src="/mail.png" alt="E-mail"
                  className="w-20 h-20"
                />
              </a>
              <a href="https://github.com/juliodeolino">
                <img src="/github.png" alt="E-mail"
                  className="w-20 h-20"
                />
              </a>
              <a href="https://www.linkedin.com/in/juliodeolino/">
                <img src="/linkedin.png" alt="E-mail"
                  className="w-20 h-20"
                />
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Contacts;
