import React from 'react';
import Header from './componentes/Header';
import HeroSection from './componentes/HeroSection';
import SobreMin from './componentes/SobreMin';
import Skills from './componentes/Skills';
import Projetos from './componentes/Projetos';
import Contatos from './componentes/Contatos';
import Footer from './componentes/Footer';

const App = () => {
  return (
    <>
        <Header />
        <main className='pt-20'>
        <HeroSection />
        <SobreMin />
        <Skills />
        <Projetos />
        <Contatos />
        <Footer />
        </main>
    </>
  );
}

export default  App;