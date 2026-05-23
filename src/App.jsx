import React, { useState } from 'react';

function App() {
  const [abaAtual, setAbaAtual] = useState('INÍCIO');

  return (
    <div style={{ 
      background: '#0a0a0a', 
      minHeight: '100vh', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', /* ISSO VAI JOGAR TUDO PARA O CENTRO VERTICAL */
      padding: '15px', 
      fontFamily: 'Arial, sans-serif' 
    }}>
      
      {/* MENU DE ABAS */}
      <nav style={{ 
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center', 
        gap: '10px', marginBottom: '20px', width: '100%' 
      }}>
        {['INÍCIO', 'FOTOS', 'VÍDEOS', 'DOAÇÕES'].map(aba => (
          <button 
            key={aba} 
            onClick={() => setAbaAtual(aba)}
            style={{ 
              padding: '12px 15px', fontSize: '14px', fontWeight: 'bold', 
              background: abaAtual === aba ? '#d4af37' : '#1a4d2e',
              color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' 
            }}
          >
            {aba}
          </button>
        ))}
      </nav>

      {/* CONTEÚDO CENTRAL */}
      <div style={{ 
        textAlign: 'center', color: 'white', width: '100%', padding: '20px',
        border: '2px solid #1a4d2e', borderRadius: '10px'
      }}>
        
        {abaAtual === 'INÍCIO' && (
          <div>
            <h1 style={{ fontSize: '24px' }}>ASSOCIAÇÃO E PROJETO</h1>
            <h1 style={{ fontSize: '28px', color: '#1a4d2e', margin: '15px 0' }}>ENCONTRO COM A VIDA</h1>
            <p style={{ fontSize: '18px' }}>DEPENDENTES QUÍMICOS (MASCULINO)</p>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '16px' }}>AV. BRASÍLIA, 9 - SERRA DOURADA II - SERRA/ES</p>
              <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#d4af37', marginTop: '10px' }}>TEL: (27) 99998-5514</p>
            </div>
          </div>
        )}

        {abaAtual === 'FOTOS' && <h1 style={{ fontSize: '22px' }}>Galeria de Fotos (Em breve...)</h1>}
        {abaAtual === 'VÍDEOS' && <h1 style={{ fontSize: '22px' }}>Vídeos do Projeto (Em breve...)</h1>}
        {abaAtual === 'DOAÇÕES' && (
          <div>
            <h1 style={{ fontSize: '22px' }}>FAÇA SUA DOAÇÃO</h1>
            <p style={{ fontSize: '16px' }}>BANCO SICOOB</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#d4af37', margin: '15px 0', wordBreak: 'break-all' }}>PIX: 0859513200014</p>
            <p style={{ fontSize: '16px' }}>Agradecemos sua colaboração.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;