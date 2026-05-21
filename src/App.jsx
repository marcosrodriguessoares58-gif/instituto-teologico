import React, { useState, useRef } from "react";

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
  const [fotoExpandida, setFotoExpandida] = useState(null);
  const [limiteMusicas, setLimiteMusicas] = useState(20);
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

  const pararArraste = () => { estaArrastando.current = false; };

  const movendoArraste = (e) => {
    if (!estaArrastando.current) return;
    e.preventDefault();
    const paginaX = e.pageX || e.touches[0].pageX;
    const paginaY = e.pageY || e.touches[0].pageY;
    const x = paginaX - modalRef.current.offsetLeft;
    const y = paginaY - modalRef.current.offsetTop;
    modalRef.current.scrollLeft = scrollEsquerda.current - (x - inicioX.current);
    modalRef.current.scrollTop = scrollTopo.current - (y - inicioY.current);
  };

  const extrairTituloLimpo = (caminhoDoArquivo) => {
    try {
      const nomeComExtensao = String(caminhoDoArquivo).split("/").pop();
      return decodeURIComponent(nomeComExtensao).replace(/\.(mp3|wav|mp4|jpg|jpeg|png|pdf)(\?.*)?$/i, "").trim();
    } catch (erro) { return "Arquivo sem título"; }
  };

  const musicasFiltradas = musicasAutomaticas.filter(m => extrairTituloLimpo(m).toLowerCase().includes(buscaMusica.toLowerCase()));
  const videosFiltrados = midiasAutomaticas.filter(v => extrairTituloLimpo(v).toLowerCase().includes(buscaVideo.toLowerCase()));
  const fotosFiltradas = fotosAutomaticas.filter(f => extrairTituloLimpo(f).toLowerCase().includes(buscaFoto.toLowerCase()));
  const apostilasFiltradas = apostilasAutomaticas.filter(a => extrairTituloLimpo(a).toLowerCase().includes(buscaApostila.toLowerCase()));

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: '#000000', height: '100vh', width: '100vw', color: '#fff', fontFamily: 'sans-serif', overflow: 'hidden', position: 'relative' }}>
      <header style={{ position: 'absolute', top: 0, left: 0, width: '100vw', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.9)', padding: '10px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px' }}>
        <nav style={{ display: 'flex', gap: '8px', fontWeight: 'bold', fontSize: '11px', whiteSpace: 'nowrap' }}>
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

      <main style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        {abaAtiva === "inicio" && (
          <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/meu-fundo.png.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        )}
        {/* Adicione aqui as outras abas (fotos, videos, etc) mantendo a estrutura original... */}
        {abaAtiva === "doacoes" && (
           <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '60px' }}>
             <img src="/banner-doacao.png.png" style={{ maxWidth: '100%', maxHeight: '90%', objectFit: 'contain' }} />
           </div>
        )}
      </main>
    </div>
  );
}