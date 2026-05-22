import React, { useState } from 'react';
import './App.css'; // Vamos criar esse CSS já já

function App() {
  const [aba, setAba] = useState('inicio');

  return (
    <div className="container-principal">
      <header className="menu-topo">
        <button onClick={() => setAba('inicio')}>INICIO</button>
        <button onClick={() => setAba('fotos')}>FOTOS</button>
        <button onClick={() => setAba('videos')}>VIDEOS</button>
        <button onClick={() => setAba('musicas')}>MUSICAS</button>
        <button onClick={() => setAba('apostilas')}>APOSTILAS</button>
        <button onClick={() => setAba('doacoes')}>DOACOES</button>
      </header>

      <div className="conteudo">
        {aba === 'inicio' && (
          <div className="secao-inicio">
            <h1>ASSOCIACAO E PROJETO ENCONTRO COM A VIDA</h1>
            <p>Vinde A Mim, Todos Os Que Estais Cansados E Oprimidos, E Eu Vos Aliviarei - MATEUS 11:28</p>
          </div>
        )}
        {/* Aqui entraremos com a lógica de fotos, vídeos, etc. */}
      </div>
    </div>
  );
}
export default App;