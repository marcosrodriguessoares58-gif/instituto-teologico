import React, { useState, useRef } from "react";

// --- MAPEAMENTO SEGURO E DIRETO DE MÍDIAS ---
const arquivosDeVideo = import.meta.glob("/public/midias/*.mp4", { eager: true, query: "?url", import: "default" });
const midiasAutomaticas = Object.values(arquivosDeVideo).map(url => String(url).replace("/public", ""));

const arquivosDeFoto = import.meta.glob("/public/galeria/*.{jpg,jpeg,png}", { eager: true, query: "?url", import: "default" });
const fotosAutomaticas = Object.values(arquivosDeFoto).map(url => String(url).replace("/public", ""));

const arquivosDeApostilas = import.meta.glob("/public/apostilas/*.pdf", { eager: true, query: "?url", import: "default" });
const apostilasAutomaticas = Object.values(arquivosDeApostilas).map(url => String(url).replace("/public", ""));

const arquivosDeMusica = import.meta.glob("/public/musicas-reserva/*.{mp3,wav}", { eager: true, query: "?url", import: "default" });
const musicasAutomaticas = Object.values(arquivosDeMusica).map(url => String(url).replace("/public", ""));

export default function App() {
  const [abaAtiva, setAbaAtiva] = useState("doacoes");
  const [fotoExpandida, setFotoExpandida] = useState(null);
  const [limiteMusicas, setLimiteMusicas] = useState(20);
  
  // --- ESTADOS DE PESQUISA ---
  const [buscaMusica, setBuscaMusica] = useState("");
  const [buscaVideo, setBuscaVideo] = useState("");
  const [buscaFoto, setBuscaFoto] = useState("");
  const [buscaApostila, setBuscaApostila] = useState("");

  const modalRef = useRef(null);
  const estaArrastando = useRef(false);
  const inicioX = useRef(0);
  const inicioY = useRef(0);
  const scrollEsquerda = useRef(0);
  const scrollTopo = useRef(0);

  const iniciarArraste = (e) => {
    estaArrastando.current = true;
    const paginaX = e.pageX || e.touches[0].pageX;
    const paginaY = e.pageY || e.touches[0].pageY;
    inicioX.current = paginaX - modalRef.current.offsetLeft;
    inicioY.current = paginaY - modalRef.current.offsetTop;
    scrollEsquerda.current = modalRef.current.scrollLeft;
    scrollTopo.current = modalRef.current.scrollTop;
  };

  const pararArraste = () => {
    estaArrastando.current = false;
  };

  const movendoArraste = (e) => {
    if (!estaArrastando.current) return;
    e.preventDefault();
    const paginaX = e.pageX || e.touches[0].pageX;
    const paginaY = e.pageY || e.touches[0].pageY;
    const x = paginaX - modalRef.current.offsetLeft;
    const y = paginaY - modalRef.current.offsetTop;
    const andarX = x - inicioX.current;
    const andarY = y - inicioY.current;
    modalRef.current.scrollLeft = scrollEsquerda.current - andarX;
    modalRef.current.scrollTop = scrollTopo.current - andarY;
  };

  const extrairTituloLimpo = (caminhoDoArquivo) => {
    try {
      const nomeComExtensao = String(caminhoDoArquivo).split("/").pop();
      return decodeURIComponent(nomeComExtensao).replace(/\.(mp3|wav|mp4|jpg|jpeg|png|pdf)(\?.*)?$/i, "").trim();
    } catch (erro) {
      return "Arquivo sem título";
    }
  };

  // --- FILTROS DE MÍDIA ---
  const musicasFiltradas = musicasAutomaticas.filter(m => 
    extrairTituloLimpo(m).toLowerCase().includes(buscaMusica.toLowerCase())
  );

  const videosFiltrados = midiasAutomaticas.filter(v => 
    extrairTituloLimpo(v).toLowerCase().includes(buscaVideo.toLowerCase())
  );

  const fotosFiltradas = fotosAutomaticas.filter(f => 
    extrairTituloLimpo(f).toLowerCase().includes(buscaFoto.toLowerCase())
  );

  const apostilasFiltradas = apostilasAutomaticas.filter(a =>
    extrairTituloLimpo(a).toLowerCase().includes(buscaApostila.toLowerCase())
  );

  // --- LÓGICA DE NAVEGAÇÃO DAS SETAS (FOTOS) ---
  const avancarFoto = (e) => {
    e.stopPropagation();
    const indexAtual = fotosFiltradas.indexOf(fotoExpandida);
    if (indexAtual !== -1 && indexAtual < fotosFiltradas.length - 1) {
      setFotoExpandida(fotosFiltradas[indexAtual + 1]);
    } else {
      setFotoExpandida(fotosFiltradas[0]);
    }
  };

  const voltarFoto = (e) => {
    e.stopPropagation();
    const indexAtual = fotosFiltradas.indexOf(fotoExpandida);
    if (indexAtual > 0) {
      setFotoExpandida(fotosFiltradas[indexAtual - 1]);
    } else {
      setFotoExpandida(fotosFiltradas[fotosFiltradas.length - 1]);
    }
  };

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#000000', height: '100vh', width: '100vw', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden', position: 'relative' }}>
      
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; } 
        body, html, #root { background-color: #000000; overflow: hidden; width: 100vw; height: 100vh; }
        .caixa-modal::-webkit-scrollbar { display: none; } 
        .caixa-modal { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* MENU SUPERIOR */}
      <header style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '20px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
        <nav style={{ display: 'flex', gap: '35px', fontWeight: 'bold', fontSize: '15px' }}>
          {[
            { id: "inicio", label: "INÍCIO" },
            { id: "fotos", label: "FOTOS ➔" },
            { id: "videos", label: "VÍDEOS ➔" },
            { id: "musicas", label: "MÚSICAS ➔" },
            { id: "apostilas", label: "APOSTILAS ➔" },
            { id: "doacoes", label: "DOAÇÕES ❤️", cor: "#ff4444" }
          ].map((aba) => (
            <span key={aba.id} onClick={() => setAbaAtiva(aba.id)} style={{ cursor: 'pointer', color: aba.cor ? aba.cor : (abaAtiva === aba.id ? '#4caf50' : '#ffffff'), transition: 'color 0.2s' }}>
              {aba.label}
            </span>
          ))}
        </nav>
      </header>

      <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        
        {/* ABA INÍCIO */}
        {abaAtiva === "inicio" && (
          <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/meu-fundo.png.png" style={{ position: 'absolute', top: '50%', left: '52%', transform: 'translate(-50%, -50%)', width: '82vw', height: '100vh', objectFit: 'fill' }} />
          </div>
        )}

        {/* ABA FOTOS */}
        {abaAtiva === "fotos" && (
          <div style={{ padding: '120px 40px', height: '100vh', overflowY: 'auto' }}>
            <h2 style={{ color: '#d4af37', marginBottom: '15px' }}>Galeria de Fotos</h2>
            <div style={{ marginBottom: '25px', display: 'flex', gap: '10px', maxWidth: '500px' }}>
              <input 
                type="text"
                placeholder="🔍 Pesquisar foto pelo nome..."
                value={buscaFoto}
                onChange={(e) => setBuscaFoto(e.target.value)}
                style={{ flex: 1, padding: '12px 15px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#111', color: '#fff', fontSize: '15px', outline: 'none' }}
              />
              {buscaFoto && <button onClick={() => setBuscaFoto("")} style={{ backgroundColor: '#333', color: '#ccc', border: 'none', padding: '0 15px', borderRadius: '6px', cursor: 'pointer' }}>Limpar</button>}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
              {fotosFiltradas.map((foto, i) => (
                <div key={i} onClick={() => setFotoExpandida(foto)} style={{ backgroundColor: '#111', borderRadius: '8px', overflow: 'hidden', border: '1px solid #333', paddingBottom: '10px', cursor: 'pointer' }}>
                  <img src={foto} style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }} />
                  <p style={{ textAlign: 'center', padding: '10px', fontSize: '14px', fontWeight: 'bold', color: '#eee' }}>{extrairTituloLimpo(foto)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA VÍDEOS */}
        {abaAtiva === "videos" && (
          <div style={{ padding: '120px 40px', height: '100vh', overflowY: 'auto' }}>
            <h2 style={{ color: '#d4af37', marginBottom: '15px' }}>Vídeos</h2>
            <div style={{ marginBottom: '25px', display: 'flex', gap: '10px', maxWidth: '500px' }}>
              <input 
                type="text"
                placeholder="🔍 Pesquisar vídeo pelo título..."
                value={buscaVideo}
                onChange={(e) => setBuscaVideo(e.target.value)}
                style={{ flex: 1, padding: '12px 15px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#111', color: '#fff', fontSize: '15px', outline: 'none' }}
              />
              {buscaVideo && <button onClick={() => setBuscaVideo("")} style={{ backgroundColor: '#333', color: '#ccc', border: 'none', padding: '0 15px', borderRadius: '6px', cursor: 'pointer' }}>Limpar</button>}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '25px' }}>
              {videosFiltrados.map((v, i) => (
                <div key={i} style={{ backgroundColor: '#111', borderRadius: '8px', border: '1px solid #333', paddingBottom: '10px' }}>
                  <video src={v} controls style={{ width: '100%', height: '200px' }} />
                  <p style={{ textAlign: 'center', padding: '10px', fontSize: '14px', fontWeight: 'bold' }}>{extrairTituloLimpo(v)}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA MÚSICAS */}
        {abaAtiva === "musicas" && (
          <div style={{ padding: '120px 40px', height: '100vh', overflowY: 'auto' }}>
            <h2 style={{ color: '#d4af37', marginBottom: '10px' }}>Hinos e Músicas ({musicasAutomaticas.length} disponíveis)</h2>
            <div style={{ marginBottom: '25px', display: 'flex', gap: '10px', maxWidth: '500px' }}>
              <input 
                type="text"
                placeholder="🔍 Digite o nome do hino ou cantor..."
                value={buscaMusica}
                onChange={(e) => { setBuscaMusica(e.target.value); setLimiteMusicas(20); }}
                style={{ flex: 1, padding: '12px 15px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#111', color: '#fff', fontSize: '15px', outline: 'none' }}
              />
              {buscaMusica && <button onClick={() => setBuscaMusica("")} style={{ backgroundColor: '#333', color: '#ccc', border: 'none', padding: '0 15px', borderRadius: '6px', cursor: 'pointer' }}>Limpar</button>}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {musicasFiltradas.slice(0, limiteMusicas).map((audio, i) => (
                <div key={i} style={{ backgroundColor: '#111', padding: '20px', borderRadius: '10px', border: '1px solid #333', textAlign: 'center' }}>
                  <div style={{ fontSize: '40px', marginBottom: '10px' }}>🎵</div>
                  <p style={{ fontWeight: 'bold', marginBottom: '15px', fontSize: '14px', height: '45px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis', color: '#fff' }}>
                    {extrairTituloLimpo(audio)}
                  </p>
                  <audio src={audio} controls style={{ width: '100%' }} preload="none" />
                </div>
              ))}
            </div>
            {limiteMusicas < musicasFiltradas.length && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
                <button onClick={() => setLimiteMusicas(prev => prev + 40)} style={{ backgroundColor: '#4caf50', color: '#fff', border: 'none', padding: '12px 30px', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                  CARREGAR MAIS MÚSICAS ➔
                </button>
              </div>
            )}
          </div>
        )}

        {/* ABA APOSTILAS (USANDO EMBED NATIVO DO NAVEGADOR - RÁPIDO E FLUIDO) */}
        {abaAtiva === "apostilas" && (
          <div style={{ padding: '120px 40px', height: '100vh', overflowY: 'auto' }}>
            <h2 style={{ color: '#d4af37', marginBottom: '15px' }}>Apostilas para Download</h2>
            
            <div style={{ marginBottom: '25px', display: 'flex', gap: '10px', maxWidth: '500px' }}>
              <input 
                type="text"
                placeholder="🔍 Pesquisar apostila pelo título..."
                value={buscaApostila}
                onChange={(e) => setBuscaApostila(e.target.value)}
                style={{ flex: 1, padding: '12px 15px', borderRadius: '6px', border: '1px solid #444', backgroundColor: '#111', color: '#fff', fontSize: '15px', outline: 'none' }}
              />
              {buscaApostila && <button onClick={() => setBuscaApostila("")} style={{ backgroundColor: '#333', color: '#ccc', border: 'none', padding: '0 15px', borderRadius: '6px', cursor: 'pointer' }}>Limpar</button>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '25px' }}>
              {apostilasFiltradas.map((pdf, i) => (
                <div key={i} style={{ backgroundColor: '#111', borderRadius: '10px', border: '1px solid #333', textAlign: 'center', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '20px' }}>
                  
                  {/* Incorpora a visualização em tempo real do próprio PDF (Capa e primeiras páginas) */}
                  <div style={{ width: '100%', height: '280px', backgroundColor: '#222' }}>
                    <object 
                      data={`${pdf}#page=1&navpanes=0&toolbar=0&statusbar=0&view=FitH`} 
                      type="application/pdf" 
                      style={{ width: '100%', height: '100%', overflow: 'hidden' }}
                    >
                      {/* Caso o navegador bloqueie o preview, ele mostra o ícone de folha elegante */}
                      <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center', fontSize: '50px' }}>📄</div>
                    </object>
                  </div>

                  <div style={{ padding: '15px' }}>
                    <p style={{ fontWeight: 'bold', marginBottom: '20px', fontSize: '14px', color: '#fff', height: '42px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', textOverflow: 'ellipsis' }}>
                      {extrairTituloLimpo(pdf)}
                    </p>
                    <a href={pdf} target="_blank" rel="noreferrer" style={{ backgroundColor: '#4caf50', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', fontSize: '13px', width: '100%' }}>
                      ABRIR APOSTILA ➔
                    </a>
                  </div>
                </div>
              ))}
            </div>
            {apostilasFiltradas.length === 0 && <p style={{ color: '#ff4444', marginTop: '20px' }}>Nenhuma apostila encontrada.</p>}
          </div>
        )}

        {/* ABA DOAÇÕES */}
        {abaAtiva === "doacoes" && (
          <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '60px', boxSizing: 'border-box' }}>
            <img 
              src="/banner-doacao.png.png" 
              alt="Cartaz Oficial de Doação"
              onClick={() => setFotoExpandida("/banner-doacao.png.png")} 
              onError={(e) => { if(e.target.src.indexOf('.png.png') !== -1) e.target.src = '/banner-doacao.png'; }}
              style={{ width: '82vw', height: '100vh', objectFit: 'fill', display: 'block', cursor: 'zoom-in' }} 
            />
          </div>
        )}

      </main>

      {/* MODAL IMAGEM EXPANDIDA */}
      {fotoExpandida && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.96)', zIndex: 10000, display: 'flex', flexDirection: 'column' }}>
          <button onClick={() => setFotoExpandida(null)} style={{ position: 'absolute', top: '20px', right: '20px', backgroundColor: '#ff4444', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', zIndex: 10001 }}>FECHAR ✕</button>
          {fotosFiltradas.length > 1 && <button onClick={voltarFoto} style={{ position: 'absolute', top: '50%', left: '30px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', borderRadius: '50%', width: '60px', height: '60px', fontSize: '28px', cursor: 'pointer', zIndex: 10002 }}>◀</button>}
          {fotosFiltradas.length > 1 && <button onClick={avancarFoto} style={{ position: 'absolute', top: '50%', right: '30px', transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', borderRadius: '50%', width: '60px', height: '60px', fontSize: '28px', cursor: 'pointer', zIndex: 10002 }}>▶</button>}
          <div ref={modalRef} className="caixa-modal" onMouseDown={iniciarArraste} onMouseLeave={pararArraste} onMouseUp={pararArraste} onMouseMove={movendoArraste} onTouchStart={iniciarArraste} onTouchEnd={pararArraste} onTouchMove={movendoArraste} style={{ width: '100%', height: '100%', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: estaArrastando.current ? 'grabbing' : 'grab', padding: '40px' }}>
            <img src={fotoExpandida} draggable="false" onError={{ index: true }} style={{ maxWidth: '85%', maxHeight: '85%', userSelect: 'none', pointerEvents: 'auto', display: 'block', objectFit: 'contain' }} />
          </div>
        </div>
      )}

    </div>
  );
}