import React, { useState } from 'react';

function App() {
  const [abaAtual, setAbaAtual] = useState('INÍCIO');
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [indexFotoAtiva, setIndexFotoAtiva] = useState(0);

  // LISTA DE FOTOS REAIS (Baseada na sua pasta public/galeria)
  // Certifique-se de que a extensão é .jpeg ou .jpg igual está na pasta
  const fotosGaleria = [
    "/galeria/WhatsApp Image 2026-05-18 at 08.30.32 (1).jpeg",
    "/galeria/WhatsApp Image 2026-05-18 at 08.30.32 (2).jpeg",
    "/galeria/WhatsApp Image 2026-05-18 at 08.30.32 (3).jpeg",
    "/galeria/WhatsApp Image 2026-05-18 at 08.30.32.jpeg",
    "/galeria/WhatsApp Image 2026-05-20 at 12.29.32.jpeg",
    "/galeria/WhatsApp Image 2026-05-20 at 12.29.28.jpeg",
    "/galeria/WhatsApp Image 2026-05-20 at 12.29.27.jpeg",
    "/galeria/WhatsApp Image 2026-05-20 at 12.29.25.jpeg",
    "/galeria/WhatsApp Image 2026-05-20 at 12.29.26.jpeg"
  ];

  const abrirFoto = (index) => {
    setIndexFotoAtiva(index);
    setFotoAmpliada(fotosGaleria[index]);
  };

  const fecharFoto = () => setFotoAmpliada(null);

  const proximaFoto = (e) => {
    e.stopPropagation();
    const novoIndex = (indexFotoAtiva + 1) % fotosGaleria.length;
    abrirFoto(novoIndex);
  };

  const anteriorFoto = (e) => {
    e.stopPropagation();
    const novoIndex = (indexFotoAtiva - 1 + fotosGaleria.length) % fotosGaleria.length;
    abrirFoto(novoIndex);
  };

  return (
    <div style={{ 
      background: '#0a0a0a', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'center', padding: '25px 15px', fontFamily: 'Arial, sans-serif' 
    }}>
      
      {/* MENU */}
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

      {/* CONTEÚDO CENTRAL */}
      <div style={{ 
        textAlign: 'center', color: 'white', width: '100%', padding: '20px',
        border: abaAtual === 'FOTOS' ? 'none' : '3px solid #1a4d2e', 
        borderRadius: '15px', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', minHeight: '60vh'
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
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
            gap: '10px', 
            width: '100%' 
          }}>
            {fotosGaleria.map((url, index) => (
              <div 
                key={index} 
                onClick={() => abrirFoto(index)}
                style={{ 
                  backgroundImage: `url("${url}")`, // Importante usar aspas duplas por causa dos espaços
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center',
                  borderRadius: '10px', 
                  height: '150px', 
                  border: '2px solid #1a4d2e',
                  cursor: 'pointer'
                }} 
              />
            ))}
          </div>
        )}

        {abaAtual === 'VÍDEOS' && <h1 style={{ fontSize: '28px' }}>Vídeos do Projeto (Em breve...)</h1>}

        {abaAtual === 'DOAÇÕES' && (
          <div>
            <h1 style={{ fontSize: '28px' }}>FAÇA SUA DOAÇÃO</h1>
            <p style={{ fontSize: '20px' }}>BANCO SICOOB - PIX</p>
            <p style={{ fontSize: '26px', fontWeight: 'bold', color: '#d4af37', margin: '20px 0' }}>0859513200014</p>
          </div>
        )}
      </div>

      {/* MODAL DA FOTO AMPLIADA */}
      {fotoAmpliada && (
        <div 
          onClick={fecharFoto} 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', zIndex: 1000
        }}>
          <button onClick={anteriorFoto} style={btnNavStyle}>‹</button>
          <img src={fotoAmpliada} alt="Zoom" style={{ maxWidth: '95%', maxHeight: '80%', borderRadius: '10px', border: '3px solid #1a4d2e' }} />
          <button onClick={proximaFoto} style={btnNavStyle}>›</button>
          <button onClick={fecharFoto} style={{ position: 'absolute', top: '20px', right: '20px', color: 'white', background: 'none', border: 'none', fontSize: '30px' }}>X</button>
        </div>
      )}

      <footer style={{ marginTop: '20px', color: '#555', fontSize: '14px' }}>Encontro com a Vida © 2026</footer>
    </div>
  );
}

const btnNavStyle = {
  background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', 
  fontSize: '50px', padding: '0 20px', cursor: 'pointer', height: '100%'
};

export default App;