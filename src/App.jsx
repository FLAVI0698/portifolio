import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/sectionHeader/Header'
import { Main } from './components/sectionMain/Main'

function App() {

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App

// import { useRef } from "react";
// import Header from "./components/sectionHeader/navBar/Header";
// import SectionMain from "./components/sectionMain/SectionMain";

// function App() {
//   const homeRef = useRef(null);
//   const sobreRef = useRef(null);
//   const projetoRef = useRef(null);
//   const habilidadesRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <>
//       <Header
//         scrollToSection={scrollToSection}
//         homeRef={homeRef}
//         sobreRef={sobreRef}
//         projetoRef={projetoRef}
//         habilidadesRef={habilidadesRef}
//       />

//       <SectionMain
//         homeRef={homeRef}
//         sobreRef={sobreRef}
//         projetoRef={projetoRef}
//         habilidadesRef={habilidadesRef}
//       />
//     </>
//   );
// }

//   useEffect(() => {
//     // simulação de carregamento (ex: fonts, dados, etc.)
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return <div className="loading-screen">Carregando...</div>;
//   }

//   return (
//     <div className="app">
//       <h1>Minha Página</h1>
//       <p>Conteúdo pronto!</p>
//     </div>
//   );
// }

// export default App;
