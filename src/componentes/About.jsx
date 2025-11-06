const About = () => {
    return (
        <section 
            // 1. Estrutura Principal: Padding vertical grande e altura mínima
            className="w-full min-h-screen bg-minha-cor-secundaria py-20 lg:py-32 font-roboto"
            id="sobre-min"
        >
            <div 
                // 2. Container: Centraliza o conteúdo e define padding responsivo
                className="max-w-7xl mx-32 px-6 md:px-12 lg:px-16"
            >
                {/* Título e Subtítulo */}
                <h2 className="pb-2 text-xl md:text-3xl font-bold text-minha-cor-terciaria-black">
                    Sobre Mim
                </h2>
                <p className="pb-8 font-medium text-minha-cor-secundaria-light">
                    #Desenvolvedor-FullStack
                </p>

                {/* 3. Conteúdo Principal: Seção de Texto (Ocupa largura total no mobile) */}
                <div 
                    // No desktop (LG), o texto ocupa 50% da largura, mas 100% no mobile.
                    className="lg:w-1/2 w-full mt-4"
                >
                    <p className="mb-4 text-gray-800 text-lg leading-relaxed">
                        Desenvolvedor full-stack.
                    </p>
                    
                    <p className="text-gray-800 md:text-lg leading-relaxed text-base">
                        Sou estudante de Engenharia de Software na UFC - Campus Russas, com previsão de conclusão em 2025. Tenho experiência em projetos acadêmicos e gosto de explorar soluções criativas para problemas reais. Valorizando sempre o aprendizado contínuo e acredito que a colaboração é essencial para o crescimento profissional e a entrega de bons resultados.
                    </p>
                    {/* Aqui você pode adicionar um botão de CV, se quiser */}
                </div>

            </div>
        </section>
    );
};

export default About;