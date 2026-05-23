import React, { useState } from 'react';

function App() {
  const [abaAtual, setAbaAtual] = useState('INÍCIO');

  const fotosGaleria = [
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1632&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499244015948-ac754399834b?q=80&w=1632&auto=format&fit=crop"
  ];

  return (
    <div style={{ 
      background: '#0a0a0a', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'space-between', padding: '25px 15px', fontFamily: 'Arial, sans-serif' 
    }}>
      
      {/* MENU DE ABAS - Fontes maiores */}
      <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', width: '100%', marginBottom: '20px' }}>
        {['INÍCIO', 'FOTOS', 'VÍDEOS', 'DOAÇÕES'].map(aba => (
          <button 
            key={aba} 
            onClick={() => setAbaAtual(aba)}
            style={{ 
              padding: '15px 20px', fontSize: '18px', fontWeight: 'bold', 
              background: abaAtual === aba ? '#d4af37' : '#1a4d2e',
              color: 'white', border: 'none', cursor: 'pointer', borderRadius: '8px' 
            }}
          >
            {aba}
          </button>
        ))}
      </nav>

      {/* CONTEÚDO - Fontes maiores */}
      <div style={{ 
        textAlign: 'center', color: 'white', width: '100%', padding: '30px',
        border: abaAtual === 'FOTOS' ? 'none' : '3px solid #1a4d2e', 
        borderRadius: '15px', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', flexGrow: 1
      }}>
        
        {abaAtual === 'INÍCIO' && (
          <div>
            <h1 style={{ fontSize: '32px' }}>ASSOCIAÇÃO E PROJETO</h1>
            <h1 style={{ fontSize: '36px', color: '#1a4d2e', margin: '20px 0' }}>ENCONTRO COM A VIDA</h1>
            <p style={{ fontSize: '22px' }}>DEPENDENTES QUÍMICOS (MASCULINO)</p>
            <div style={{ marginTop: '30px' }}>
              <p style={{ fontSize: '20px' }}>AV. BRASÍLIA, 9 - SERRA DOURADA II - SERRA/ES</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#d4af37', marginTop: '15px' }}>TEL: (27) 99998-5514</p>
            </div>
          </div>
        )}

        {abaAtual === 'FOTOS' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', height: '100%' }}>
            {fotosGaleria.map((url, index) => (
              <div key={index} style={{ 
                backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center',
                borderRadius: '12px', height: '30vh', border: '3px solid #1a4d2e'
              }} />
            ))}
          </div>
        )}

        {abaAtual === 'VÍDEOS' && <h1 style={{ fontSize: '28px' }}>Vídeos do Projeto (Em breve...)</h1>}

        {abaAtual === 'DOAÇÕES' && (
          <div>
            <h1 style={{ fontSize: '28px' }}>FAÇA SUA DOAÇÃO</h1>
            <p style={{ fontSize: '20px' }}>BANCO SICOOB</p>
            <p style={{ fontSize: '26px', fontWeight: 'bold', color: '#d4af37', margin: '20px 0' }}>PIX: 0859513200014</p>
            <p style={{ fontSize: '20px' }}>Agradecemos sua colaboração.</p>
          </div>
        )}
      </div>

      <footer style={{ padding: '15px', color: '#888', fontSize: '14px' }}>
        Encontro com a Vida © 2026
      </footer>
    </div>
  );
}

export default App;