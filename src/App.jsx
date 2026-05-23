import React, { useState } from 'react';

function App() {
  const [abaAtual, setAbaAtual] = useState('INÍCIO');

  // Links das imagens para a Galeria (Papel de Parede)
  const fotosGaleria = [
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop", // Natureza/Acampamento
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop", // Montanhas/Superação
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1632&auto=format&fit=crop", // União/Amizade
    "https://images.unsplash.com/photo-1499244015948-ac754399834b?q=80&w=1632&auto=format&fit=crop"  // Caminho/Esperança
  ];

  return (
    <div style={{ 
      background: '#0a0a0a', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'space-between', padding: '20px 10px', fontFamily: 'Arial, sans-serif' 
    }}>
      
      {/* MENU DE ABAS */}
      <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', width: '100%', zIndex: 10 }}>
        {['INÍCIO', 'FOTOS', 'VÍDEOS', 'DOAÇÕES'].map(aba => (
          <button 
            key={aba} 
            onClick={() => setAbaAtual(aba)}
            style={{ 
              padding: '10px 12px', fontSize: '13px', fontWeight: 'bold', 
              background: abaAtual === aba ? '#d4af37' : '#1a4d2e',
              color: 'white', border: 'none', cursor: 'pointer', borderRadius: '5px' 
            }}
          >
            {aba}
          </button>
        ))}
      </nav>

      {/* CONTEÚDO DINÂMICO */}
      <div style={{ 
        textAlign: 'center', color: 'white', width: '100%', padding: '15px',
        border: abaAtual === 'FOTOS' ? 'none' : '2px solid #1a4d2e', 
        borderRadius: '10px', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', flexGrow: 1, marginTop: '10px'
      }}>
        
        {/* ABA INÍCIO */}
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

        {/* ABA FOTOS (PAPEL DE PAREDE / GALERIA) */}
        {abaAtual === 'FOTOS' && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '10px', 
            height: '100%',
            width: '100%' 
          }}>
            {fotosGaleria.map((url, index) => (
              <div key={index} style={{ 
                backgroundImage: `url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '8px',
                height: '35vh', // Faz as fotos ocuparem boa parte da altura
                border: '2px solid #1a4d2e'
              }} />
            ))}
          </div>
        )}

        {/* ABA VÍDEOS */}
        {abaAtual === 'VÍDEOS' && <h1 style={{ fontSize: '22px' }}>Vídeos do Projeto (Em breve...)</h1>}

        {/* ABA DOAÇÕES */}
        {abaAtual === 'DOAÇÕES' && (
          <div>
            <h1 style={{ fontSize: '22px' }}>FAÇA SUA DOAÇÃO</h1>
            <p style={{ fontSize: '16px' }}>BANCO SICOOB</p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#d4af37', margin: '15px 0', wordBreak: 'break-all' }}>PIX: 0859513200014</p>
            <p style={{ fontSize: '16px' }}>Agradecemos sua colaboração.</p>
          </div>
        )}
      </div>

      <footer style={{ padding: '10px', color: '#555', fontSize: '12px' }}>
        Encontro com a Vida © 2026
      </footer>
    </div>
  );
}

export default App;