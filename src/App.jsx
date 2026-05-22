import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container-principal">
      <header className="caixa-conteudo">
        <h1>Associação e Projeto Encontro com a Vida</h1>
        <p className="subtitulo">Acolhendo vidas, restaurando esperanças.</p>
        
        <div className="info-local">
          <p><strong>Endereço:</strong> Avenida Brasília, 2 - Serra Dourada II, Serra - ES</p>
          <p className="versiculo">"Ide, fazei discípulos..." - Mateus 28</p>
        </div>

        <a 
          href="https://wa.me/5527998863582" 
          className="botao-whatsapp" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Falar com a equipe (WhatsApp)
        </a>
      </header>
    </div>
  );
}

export default App;