import { useState, useEffect } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home"); // Inicia com 'home'

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null, // O viewport é o root
      rootMargin: "0px", // Detecta quando o centro da seção cruza o centro da viewport
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Quando uma seção entra no ponto de interseção (o meio da tela), define-a como ativa
          console.log('Active Section:', entry.target.id);
          setActiveSection(entry.target.id);
          
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Função de limpeza para parar de observar quando o componente é desmontado
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []); // O array vazio garante que o efeito rode apenas uma vez (ao montar)

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault(); // Impede o comportamento padrão do link de âncora
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const headerOffset = 80; 
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-20 bg-minha-cor-primaria items-center flex justify-center z-50">
        <nav>
          <ul className="flex justify-center space-x-6">
                        <li>
              <a
                href="#home"
                onClick={(e) => handleNavLinkClick(e, "home")}
                className={`text-minha-cor-secundaria-light px-2 py-1 rounded-lg font-bold transition-all duration-300
                ${
                  activeSection === "home"
                    ? "text-minha-cor-terciaria-black bg-white shadow-md"
                    : "hover:text-minha-cor-secundaria"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#sobre-min"
                onClick={(e) => handleNavLinkClick(e, "sobre-min")}
                className={`text-minha-cor-secundaria-light px-2 py-1 rounded-lg font-bold transition-all duration-300
                ${
                  activeSection === "sobre-min"
                    ? "text-minha-cor-terciaria-black bg-white shadow-md"
                    : "hover:text-minha-cor-secundaria"
                }`}
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => handleNavLinkClick(e, "skills")}
                className={`text-minha-cor-secundaria-light px-2 py-1 rounded-lg font-bold transition-all duration-300
                ${
                  // ✨ AQUI ESTÁ A CORREÇÃO: "skills" deve ser comparado com "skills" ✨
                  activeSection === "skills"
                    ? "text-minha-cor-terciaria-black bg-white shadow-md"
                    : "hover:text-minha-cor-secundaria"
                }`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                onClick={(e) => handleNavLinkClick(e, "projetos")}
                className={`text-minha-cor-secundaria-light px-2 py-1 rounded-lg font-bold transition-all duration-300
                ${
                  activeSection === "projetos"
                    ? "text-minha-cor-terciaria-black bg-white shadow-md"
                    : "hover:text-minha-cor-secundaria"
                }`}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contatos"
                onClick={(e) => handleNavLinkClick(e, "contatos")}
                className={`text-minha-cor-secundaria-light px-2 py-1 rounded-lg font-bold transition-all duration-300
                ${
                  activeSection === "contatos"
                    ? "text-minha-cor-terciaria-black bg-white shadow-md"
                    : "hover:text-white" // Verifique a consistência do hover aqui, se quiser igual aos outros
                }`}
              >
                Contatos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;