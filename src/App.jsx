import React, { useState } from 'react';
import './App.css';

function App() {
  const [aba, setAba] = useState('inicio');

  return (
    <div className="App">
      <header className="header-bar">
        <h1>Instituto Teológico RHO</h1>
        <nav className="main-nav">
          <button onClick={() => setAba('inicio')}>Início</button>
          <button onClick={() => setAba('fotos')}>Fotos</button>
          <button onClick={() => setAba('videos')}>Vídeos</button>
          <button onClick={() => setAba('musicas')}>Músicas</button>
          <button onClick={() => setAba('apostilas')}>Apostilas</button>
          <button onClick={() => setAba('doacoes')}>Doações</button>
        </nav>
      </header>

      <main className="conteudo">
        {aba === 'inicio' && <h2>Bem-vindo ao Instituto Teológico RHO</h2>}
        
        {aba === 'fotos' && (
          <div className="galeria">
            <h3>Galeria de Fotos</h3>
            <p>Implementar Slider com setas aqui.</p>
          </div>
        )}

        {aba === 'videos' && (
          <div className="lista">
            <h3>Lista de Vídeos</h3>
            <ul>
              <li>Vídeo 01: Aula de Teologia Sistemática</li>
              <li>Vídeo 02: História da Igreja</li>
            </ul>
          </div>
        )}

        {aba === 'musicas' && (
          <div className="lista">
            <h3>Biblioteca de Músicas</h3>
            <ul>
              <li>Louvor 01 - Nome da Música</li>
              <li>Louvor 02 - Nome da Música</li>
            </ul>
          </div>
        )}

        {aba === 'apostilas' && (
          <div className="grid-apostilas">
            <h3>Nossas Apostilas</h3>
            <div className="card-apostila">
              <img src="capa-apostila.jpg" alt="Capa" />
              <h4>Título do Cabeçalho da Apostila</h4>
            </div>
          </div>
        )}

        {aba === 'doacoes' && (
          <div className="doacao">
            <h3>Faça sua Doação</h3>
            <img 
              src="qrcode-pix.jpg" 
              alt="QR Code" 
              style={{ width: '200px', cursor: 'pointer' }}
              onClick={(e) => e.target.style.width = e.target.style.width === '200px' ? '400px' : '200px'}
            />
            <p>Clique na imagem para aumentar/diminuir</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;