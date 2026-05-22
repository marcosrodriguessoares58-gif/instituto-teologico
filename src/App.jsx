import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* 1. Header com Logo e Menu */}
      <header className="header-bar">
        <div className="logo-container">
          <div className="logo-icon">Ρ+</div> {/* Simplified logo Ρ for Rho */}
          <h1>INSTITUTO TEOLÓGICO RHO</h1>
        </div>
        <nav className="main-nav">
          <a href="#inicio">Início</a>
          <a href="#matriculas">Matrículas</a>
          <a href="#cursos">Cursos</a>
          <a href="#eventos">Eventos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      {/* 2. Banner Principal */}
      <section className="hero-banner">
        <h2>Bem-vindo ao Novo Portal de Fé</h2>
        <p>Formação Teológica Profunda e Sistema de Matrículas.</p>
      </section>

      {/* 3. Seções do Sistema */}
      <main className="system-sections">
        {/* Card de Matrículas */}
        <div id="matriculas" className="system-card">
          <h3>SISTEMA DE MATRÍCULAS</h3>
          <p>Inicie sua jornada teológica conosco.</p>
          <a href="https://link-sistema-matriculas.com" target="_blank" rel="noopener noreferrer" className="main-button">
            Fazer Matrícula: Clique Aqui
          </a>
        </div>

        {/* Card de Cursos */}
        <div id="cursos" className="system-card">
          <h3>NOSSOS CURSOS</h3>
          <p>Explore os programas e disciplinas atuais.</p>
          <a href="#lista-cursos" className="main-button">
            Nossos Cursos: Clique Aqui
          </a>
        </div>
      </main>

      {/* Rodapé Simples */}
      <footer style={{ backgroundColor: '#0A1931', color: '#FFFFFF', padding: '20px', textAlign: 'center' }}>
        <p>&copy; 2026 Instituto Teológico Rho. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;