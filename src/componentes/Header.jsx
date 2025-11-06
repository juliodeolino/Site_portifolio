import { useState, useEffect } from "react";

const Header = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const navLinks = [
        { id: "home", label: "Home" },
        { id: "sobre-min", label: "Sobre Mim" },
        { id: "skills", label: "Skills" },
        { id: "projetos", label: "Projetos" },
        { id: "contatos", label: "Contatos" },
    ];


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
    
    // Função para fechar o menu após o clique nos links do menu mobile
    const handleMobileNavClick = (e, sectionId) => {
        handleNavLinkClick(e, sectionId);
        setIsMenuOpen(false); // Fecha o menu depois de clicar em um link
    };

    // Função para gerar as classes (ativa/hover)
    const getLinkClasses = (sectionId, isMobile = false) => {
        const baseClasses = `px-2 py-1 rounded-lg font-bold transition-all duration-300 ${
            isMobile ? 'block py-3 text-lg' : 'text-minha-cor-secundaria-light'
        }`;
        
        const activeClasses = isMobile 
            ? "text-minha-cor-terciaria-black bg-white/90" 
            : "text-minha-cor-terciaria-black bg-white shadow-md";

        const hoverClasses = isMobile 
            ? "text-white hover:bg-white/10" 
            : "hover:text-minha-cor-secundaria";

        // Ajuste a cor do último hover no desktop, se necessário
        const desktopHoverClasses = sectionId === "contatos" && !isMobile
            ? "hover:text-white" 
            : hoverClasses;

        if (activeSection === sectionId) {
            return `${baseClasses} ${activeClasses}`;
        }
        
        return `${baseClasses} ${desktopHoverClasses}`;
    }


    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null, 
            rootMargin: "0px", 
            threshold: 0.1,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((section) => {
            observer.observe(section);
        });

        // Função de limpeza
        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []); 

    return (
        <>
            {/* 1. HEADER PRINCIPAL (Fixo no Topo) */}
            <div className="fixed top-0 left-0 w-full bg-minha-cor-primaria z-50">
                <div className="flex justify-between items-center h-20 px-6 md:px-12">
                    
                    {/* Logotipo/Título */}
                    <div className="text-2xl font-extrabold text-white">Julio</div>

                    {/* Botão Hambúrguer (Visível apenas no Mobile) */}
                    <button 
                        className="md:hidden text-white text-3xl z-[100]" 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>

                    {/* Menu DESKTOP (Visível apenas no MD e acima) */}
                    <nav className="hidden md:block">
                        <ul className="flex justify-center space-x-6">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={`#${link.id}`}
                                        onClick={(e) => handleNavLinkClick(e, link.id)}
                                        className={getLinkClasses(link.id, false)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            
            {/* 2. MENU LATERAL FIXO (OFF-CANVAS) */}
            <nav 
                className={`
                    fixed top-0 right-0 h-screen w-full sm:w-80 // w-full para mobile pequeno, w-80 para tablets
                    bg-minha-cor-primaria/95                      
                    pt-20                                        
                    transform transition-transform duration-300 ease-in-out 
                    md:hidden                                    
                    z-40                                         
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} // Controla a transição
                `}
            >
                <ul className="flex flex-col space-y-2 p-4 pt-8">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => handleMobileNavClick(e, link.id)} // Usa a função que FECHA o menu
                                className={getLinkClasses(link.id, true)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            
            {/* 3. OVERLAY ESCURO (Fundo) */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" 
                    onClick={() => setIsMenuOpen(false)} // Fecha ao clicar no fundo
                />
            )}
        </>
    );
};

export default Header;