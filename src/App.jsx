import React, { useState, useRef, useEffect } from "react";

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("inicio");
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setLarguraTela(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = larguraTela < 768;

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#000000', height: '100vh', width: '100vw', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden' }}>
      <header style={{ 
        position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 9999, 
        backgroundColor: 'rgba(0, 0, 0, 0.9)', display: 'flex', justifyContent: 'center', 
        alignItems: 'center', height: '60px' 
      }}>
        <nav style={{ 
          display: 'flex', gap: isMobile ? '10px' : '30px', 
          fontWeight: 'bold', fontSize: isMobile ? '11px' : '14px', 
          whiteSpace: 'nowrap' 
        }}>
          {[
            { id: "inicio", label: "INÍCIO" },
            { id: "fotos", label: "FOTOS" },
            { id: "videos", label: "VÍDEOS" },
            { id: "musicas", label: "MÚSICAS" },
            { id: "apostilas", label: "APOSTILAS" },
            { id: "doacoes", label: "DOAÇÕES", cor: "#ff4444" }
          ].map((aba) => (
            <span key={aba.id} onClick={() => setAbaAtiva(aba.id)} style={{ cursor: 'pointer', color: aba.cor ? aba.cor : (abaAtiva === aba.id ? '#4caf50' : '#ffffff') }}>
              {aba.label}
            </span>
          ))}
        </nav>
      </header>

      <main style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {abaAtiva === "inicio" && (
          <img src="/meu-fundo.png.png" style={{ width: '100%', height: '100%', objectFit: isMobile ? 'contain' : 'cover' }} />
        )}
        {abaAtiva === "doacoes" && (
           <img src="/banner-doacao.png.png" style={{ maxWidth: '100%', maxHeight: '85%', objectFit: 'contain', marginTop: '60px' }} />
        )}
      </main>
    </div>
  );
}