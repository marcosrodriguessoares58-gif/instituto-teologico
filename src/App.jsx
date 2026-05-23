import React from 'react';

function App() {
  return (
    <div style={{ 
      background: '#0a0a0a', 
      minHeight: '100vh', 
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2vw',
      fontFamily: 'Arial, sans-serif' 
    }}>
      {/* MENU DE ABAS - Adaptável */}
      <nav style={{ display: 'flex', gap: '2vw', marginBottom: '3vw' }}>
        {['INÍCIO', 'FOTOS', 'VÍDEOS', 'DOAÇÕES'].map(aba => (
          <button key={aba} style={{ 
            padding: '1vw 3vw', 
            fontSize: '1.8vw', 
            fontWeight: 'bold', 
            background: '#1a4d2e', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer', 
            borderRadius: '0.5vw' 
          }}>
            {aba}
          </button>
        ))}
      </nav>

      {/* CONTEÚDO CENTRALIZADO */}
      <div style={{ 
        textAlign: 'center', 
        color: 'white', 
        width: '90vw', 
        padding: '3vw',
        border: '0.3vw solid #1a4d2e',
        borderRadius: '1vw'
      }}>
        <h1 style={{ fontSize: '3vw', margin: '0' }}>ASSOCIAÇÃO E PROJETO</h1>
        <h1 style={{ fontSize: '4vw', color: '#1a4d2e', margin: '1vw 0' }}>ENCONTRO COM A VIDA</h1>
        <p style={{ fontSize: '2vw', marginTop: '1vw' }}>DEPENDENTES QUÍMICOS (MASCULINO)</p>
        
        <div style={{ marginTop: '3vw', padding: '2vw' }}>
          <p style={{ fontSize: '1.8vw' }}>AV. BRASÍLIA, 9 - SERRA DOURADA II - SERRA/ES</p>
          <p style={{ fontSize: '3vw', fontWeight: 'bold', color: '#d4af37', marginTop: '1vw' }}>TEL: (27) 99998-5514</p>
        </div>
      </div>
    </div>
  );
}

export default App;