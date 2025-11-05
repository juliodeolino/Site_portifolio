import React from 'react';
import Header from './componentes/Header';
import HeroSection from './componentes/HeroSection';
import Skills from './componentes/Skills';
import Footer from './componentes/Footer';
import Project from './componentes/Project';
import About from './componentes/About';
import Contacts from './componentes/Contacts';

const App = () => {
  return (
    <>
        <Header />
        <main className='pt-20'>
        <HeroSection />
        <About />
        <Skills />
        <Project />
        <Contacts />
        <Footer />
        </main>
    </>
  );
}

export default  App;