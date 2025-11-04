const Footer = () => {
  return (
    <>
      <footer>
        <div className="mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 bg-minha-cor-terciaria-black text-white  ">
            <div className="flex gap-5 justify-center">
                <a href="">
                    <img src="/instagran-white.png" alt="Instagram" 
                    className="w-10 h-10 "
                    />
                </a>
                                <a href="">
                    <img src="/linkedin-white.png" alt="GitHub" 
                    className="w-10 h-10"
                    />
                </a>
                                <a href="">
                    <img src="/github-white.png" alt="GitHub" 
                    className="w-10 h-10"
                    />
                </a>
            </div>
          <div className="flex flex-col items-center">
            <ul>
              <li>
                <a href="#home" class="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" class="hover:underline">
                  Sobre Mim
                </a>
              </li>
              <li>
                <a href="#projetos" class="hover:underline">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#habilidades" class="hover:underline">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#contato" class="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-4">Conecte-se</h3>
            <p>
              Email:
              <a href="juliodeolino07@gmail.com" class="hover:underline">
                juliodeolino07@gmail.com
              </a>
            </p>
            <p>
              Telefone{" "}
              <a href="88997669444" class="hover:underline">
                +55 99766-9444
              </a>
            </p>
          </div>
        </div>
        <div className="text-center text-sm pt-8 py-4 border-t border-gray-700 bg-minha-cor-terciaria-black text-white">
          <p>&copy; 2025 Júlio César. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
