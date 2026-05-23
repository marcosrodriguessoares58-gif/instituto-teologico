import React, { useState } from 'react';

function App() {
  const [abaAtual, setAbaAtual] = useState('INÍCIO');

  return (
    <div style={{ 
      background: '#0a0a0a', minHeight: '100vh', width: '100vw',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: '2vw', fontFamily: 'Arial, sans-serif' 
    }}>
      
      {/* MENU DE ABAS FUNCIONAL */}
      <nav style={{ display: 'flex', gap: '2vw', marginBottom: '3vw' }}>
        {['INÍCIO', 'FOTOS', 'VÍDEOS', 'DOAÇÕES'].map(aba => (
          <button 
            key={aba} 
            onClick={() => setAbaAtual(aba)}
            style={{ 
              padding: '1vw 3vw', fontSize: '1.8vw', fontWeight: 'bold', 
              background: abaAtual === aba ? '#d4af37' : '#1a4d2e',
              color: 'white', border: 'none', cursor: 'pointer', borderRadius: '0.5vw' 
            }}
          >
            {aba}
          </button>
        ))}
      </nav>

      {/* CONTEÚDO CENTRALIZADO */}
      <div style={{ 
        textAlign: 'center', color: 'white', width: '90vw', padding: '3vw',
        border: '0.3vw solid #1a4d2e', borderRadius: '1vw'
      }}>
        
        {abaAtual === 'INÍCIO' && (
          <div>
            <h1 style={{ fontSize: '3vw' }}>ASSOCIAÇÃO E PROJETO</h1>
            <h1 style={{ fontSize: '4vw', color: '#1a4d2e', margin: '1vw 0' }}>ENCONTRO COM A VIDA</h1>
            <p style={{ fontSize: '2vw' }}>DEPENDENTES QUÍMICOS (MASCULINO)</p>
            <div style={{ marginTop: '3vw' }}>
              <p style={{ fontSize: '1.8vw' }}>AV. BRASÍLIA, 9 - SERRA DOURADA II - SERRA/ES</p>
              <p style={{ fontSize: '3vw', fontWeight: 'bold', color: '#d4af37', marginTop: '1vw' }}>TEL: (27) 99998-5514</p>
            </div>
          </div>
        )}

        {abaAtual === 'FOTOS' && <h1 style={{ fontSize: '4vw' }}>Galeria de Fotos (Em breve...)</h1>}
        {abaAtual === 'VÍDEOS' && <h1 style={{ fontSize: '4vw' }}>Vídeos do Projeto (Em breve...)</h1>}
        {abaAtual === 'DOAÇÕES' && (
          <div>
            <h1 style={{ fontSize: '3vw' }}>FAÇA SUA DOAÇÃO</h1>
            <p style={{ fontSize: '2vw' }}>BANCO SICOOB</p>
            <p style={{ fontSize: '4vw', fontWeight: 'bold', color: '#d4af37', margin: '2vw 0' }}>PIX: 0859513200014</p>
            <p style={{ fontSize: '2vw' }}>Agradecemos sua colaboração.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;