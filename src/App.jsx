import { useState, useEffect } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'

function App() {

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App

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
