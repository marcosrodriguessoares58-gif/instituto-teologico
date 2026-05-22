import { useState } from 'react';

function App() {
  const [abaAtiva, setAbaAtiva] = useState(null);

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', minHeight: '100vh', position: 'relative' }}>
      
      <img 
        src="/arte-principal.jpg" 
        alt="Banner" 
        style={{ display: 'block', width: '100%', height: 'auto', zIndex: 0 }} 
      />

      <div style={{ position: 'fixed', bottom: '30px', width: '100%', display: 'flex', justifyContent: 'center', gap: '15px', zIndex: 10 }}>
        <button onClick={() => setAbaAtiva('Músicas')} style={{ fontSize: '20px', cursor: 'pointer' }}>🖐️ Músicas</button>
        <button onClick={() => setAbaAtiva('Vídeos')} style={{ fontSize: '20px', cursor: 'pointer' }}>🖐️ Vídeos</button>
        <button onClick={() => setAbaAtiva('Fotos')} style={{ fontSize: '20px', cursor: 'pointer' }}>🖐️ Fotos</button>
        <button onClick={() => setAbaAtiva('Apostilas')} style={{ fontSize: '20px', cursor: 'pointer' }}>🖐️ Apostilas</button>
        <button onClick={() => setAbaAtiva('Doações')} style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', fontSize: '20px', cursor: 'pointer' }}>
          🖐️ Doações
        </button>
      </div>

      {abaAtiva && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          background: 'white', zIndex: 100, padding: '40px', boxSizing: 'border-box', overflowY: 'auto' 
        }}>
          <button onClick={() => setAbaAtiva(null)} style={{ fontSize: '18px', cursor: 'pointer' }}>X Fechar</button>
          <h1>{abaAtiva}</h1>
          <hr />
          
          {abaAtiva === 'Apostilas' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '20px' }}>
              <a href="/apostilas/APOSTILA CURSO DE CAPELANIA NOVO.pdf" target="_blank">📄 Apostila Curso de Capelania</a>
              <a href="/apostilas/APOSTILA DE FORMAÇÃO PARA OBREIR.pdf" target="_blank">📄 Apostila de Formação para Obreiros</a>
              {/* Adicione o restante dos seus links aqui */}
            </div>
          )}

          {abaAtiva !== 'Apostilas' && <p>Conteúdo da aba {abaAtiva} em desenvolvimento.</p>}
        </div>
      )}
    </div>
  );
}

export default App;