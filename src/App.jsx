import React, { useState, useRef, useEffect } from "react";

// --- MAPEAMENTO DAS MÍDIAS ---
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
  const extrairTitulo = (caminho) => decodeURIComponent(String(caminho).split("/").pop()).replace(/\.(mp3|wav|mp4|jpg|jpeg|png|pdf)(\?.*)?$/i, "").trim();

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', width: '100vw', fontFamily: 'sans-serif' }}>
      <header style={{ position: 'fixed', top: 0, width: '100%', zIndex: 9999, backgroundColor: 'rgba(0,0,0,0.9)', padding: '15px 0', display: 'flex', justifyContent: 'center' }}>
        <nav style={{ display: 'flex', gap: isMobile ? '8px' : '25px', fontSize: isMobile ? '10px' : '14px', fontWeight: 'bold' }}>
          {['inicio', 'fotos', 'videos', 'musicas', 'apostilas', 'doacoes'].map((id) => (
            <span key={id} onClick={() => setAbaAtiva(id)} style={{ cursor: 'pointer', color: abaAtiva === id ? '#4caf50' : (id === 'doacoes' ? '#ff4444' : '#fff') }}>
              {id.toUpperCase()}
            </span>
          ))}
        </nav>
      </header>

      <main style={{ paddingTop: '80px', paddingBottom: '20px' }}>
        {abaAtiva === "inicio" && <div style={{ display: 'flex', justifyContent: 'center', height: '80vh' }}><img src="/meu-fundo.png.png" style={{ width: '100%', objectFit: isMobile ? 'contain' : 'cover' }} /></div>}
        {abaAtiva === "fotos" && <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '10px' }}>{fotosAutomaticas.map((f, i) => <img key={i} src={f} style={{ width: '100%', borderRadius: '5px' }} />)}</div>}
        {abaAtiva === "videos" && <div style={{ padding: '20px' }}>{midiasAutomaticas.map((v, i) => <video key={i} src={v} controls style={{ width: '100%', marginBottom: '20px' }} />)}</div>}
        {abaAtiva === "musicas" && <div style={{ padding: '20px' }}>{musicasAutomaticas.map((m, i) => <div key={i} style={{ marginBottom: '15px' }}><p>{extrairTitulo(m)}</p><audio src={m} controls style={{ width: '100%' }} /></div>)}</div>}
        {abaAtiva === "apostilas" && <div style={{ padding: '20px' }}>{apostilasAutomaticas.map((a, i) => <div key={i} style={{ marginBottom: '20px' }}><p>{extrairTitulo(a)}</p><a href={a} target="_blank" style={{ color: '#4caf50' }}>BAIXAR APOSTILA</a></div>)}</div>}
        {abaAtiva === "doacoes" && <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}><img src="/banner-doacao.png.png" style={{ maxWidth: '100%' }} /></div>}
      </main>
    </div>
  );
}