import React, { useState, useRef, useEffect } from "react";

// --- MANTENDO SEU MAPEAMENTO DE MÍDIAS ---
const arquivosDeVideo = import.meta.glob("/public/midias/*.mp4", { eager: true, query: "?url", import: "default" });
const midiasAutomaticas = Object.values(arquivosDeVideo).map(url => String(url).replace("/public", ""));
const arquivosDeFoto = import.meta.glob("/public/galeria/*.{jpg,jpeg,png}", { eager: true, query: "?url", import: "default" });
const fotosAutomaticas = Object.values(arquivosDeFoto).map(url => String(url).replace("/public", ""));
const arquivosDeApostilas = import.meta.glob("/public/apostilas/*.pdf", { eager: true, query: "?url", import: "default" });
const apostilasAutomaticas = Object.values(arquivosDeApostilas).map(url => String(url).replace("/public", ""));
const arquivosDeMusica = import.meta.glob("/public/musicas-reserva/*.{mp3,wav}", { eager: true, query: "?url", import: "default" });
const musicasAutomaticas = Object.values(arquivosDeMusica).map(url => String(url).replace("/public", ""));

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("inicio");
  const [larguraTela, setLarguraTela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setLarguraTela(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = larguraTela < 768;

  const extrairTituloLimpo = (caminho) => decodeURIComponent(String(caminho).split("/").pop()).replace(/\.(mp3|wav|mp4|jpg|jpeg|png|pdf)(\?.*)?$/i, "").trim();

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', width: '100vw', fontFamily: 'sans-serif' }}>
      {/* MENU */}
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.9)', padding: '15px 0', display: 'flex', justifyContent: 'center' }}>
        <nav style={{ display: 'flex', gap: isMobile ? '8px' : '25px', fontSize: isMobile ? '10px' : '14px', fontWeight: 'bold' }}>
          {['inicio', 'fotos', 'videos', 'musicas', 'apostilas', 'doacoes'].map((id) => (
            <span key={id} onClick={() => setAbaAtiva(id)} style={{ cursor: 'pointer', color: abaAtiva === id ? '#4caf50' : (id === 'doacoes' ? '#ff4444' : '#fff') }}>
              {id.toUpperCase()}
            </span>
          ))}
        </nav>
      </header>

      {/* CONTEÚDO */}
      <main style={{ paddingTop: '60px' }}>
        {abaAtiva === "inicio" && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)' }}>
            <img src="/meu-fundo.png.png" style={{ width: '100%', height: '100%', objectFit: isMobile ? 'contain' : 'cover' }} />
          </div>
        )}
        
        {abaAtiva === "fotos" && (
          <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>
            {fotosAutomaticas.map((f, i) => <img key={i} src={f} style={{ width: '100%', borderRadius: '5px' }} />)}
          </div>
        )}

        {abaAtiva === "videos" && (
          <div style={{ padding: '20px' }}>
            {midiasAutomaticas.map((v, i) => <video key={i} src={v} controls style={{ width: '100%', marginBottom: '10px' }} />)}
          </div>
        )}

        {abaAtiva === "doacoes" && (
           <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
             <img src="/banner-doacao.png.png" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
           </div>
        )}
      </main>
    </div>
  );
}