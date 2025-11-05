const About = () => {
    return (
        <>
            <section className="w-full min-h-[100vh] bg-minha-cor-secundaria flex items-center font-roboto"
            id="sobre-min"
            >
                <div className="w-[500px] h-[400px] ml-32 flex flex-col ">
                    <h2 className="pb-2 text-xl font-semibold text-minha-cor-terciaria-black">Sobre Min</h2>
                    <p className="pb-2 text-md text-minha-cor-secundaria-light flex">#Desenvolvedor-FullStack</p>
                    <p className="pb-2">Desenvolvedor full-stack.</p>
                    <p>Sou estudante de Engenharia de Software na UFC – Campus Russas, com previsão de conclusão em 2025. Tenho experiência em projetos acadêmicos e gosto de explorar soluções criativas para problemas reais. Valoriznado sempre o aprendizado contínuo e acredito que a colaboração é essencial para o crescimento profissional e a entrega de bons resultados.</p>
                </div>
            </section>
        </>
    );
};

export default About;