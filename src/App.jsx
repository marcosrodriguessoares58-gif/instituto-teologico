import { useState } from 'react'

function App() {
  const [tela, setTela] = useState('home')

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Instituto Teológico</h1>
      
      {/* Menu de Navegação */}
      <nav>
        <button onClick={() => setTela('home')}>Início</button>
        <button onClick={() => setTela('cursos')}>Nossos Cursos</button>
      </nav>

      <hr />

      {/* Conteúdo que muda conforme o botão clicado */}
      {tela === 'home' && (
        <div>
          <h2>Bem-vindo!</h2>
          <p>Esta é a página principal do nosso instituto.</p>
        </div>
      )}

      {tela === 'cursos' && (
        <div>
          <h2>Nossos Cursos</h2>
          <p>Aqui você encontrará a lista de cursos teológicos.</p>
        </div>
      )}
    </div>
  )
}
export default App