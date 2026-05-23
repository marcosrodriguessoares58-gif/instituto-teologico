import { useState } from 'react';

function App() {
  const [busca, setBusca] = useState("");
  const [musicaAtual, setMusicaAtual] = useState(null);

  const playlist = [
    { nome: "Oração de Alívio", id: "1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS" },
  ];

  const musicasFiltradas = playlist.filter((m) =>
    m.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Arte Principal no Topo */}
      <div className="hero-banner">
        <img src="/arte-pequena.jpg" alt="Capa Principal" className="main-art" />
      </div>

      {/* Conteúdo Abaixo */}
      <main className="content-box">
        <h2 className="title">🎵 Biblioteca de Músicas</h2>
        <input 
          type="text" 
          placeholder="🔍 Pesquisar música..." 
          className="search-bar"
          onChange={(e) => setBusca(e.target.value)}
        />

        <div className="playlist-grid">
          {musicasFiltradas.map((musica, index) => (
            <button key={index} className="song-btn" onClick={() => setMusicaAtual(musica)}>
              💿 {musica.nome}
            </button>
          ))}
        </div>
      </main>

      {musicaAtual && (
        <div className="player-sticky">
          <p className="playing-text">Tocando agora: <strong>{musicaAtual.nome}</strong></p>
          <audio controls autoPlay key={musicaAtual.id} src={`https://drive.google.com/uc?export=download&id=${musicaAtual.id}`} />
        </div>
      )}

      <style>{`
        body { margin: 0; background: #f4e4bc; font-family: 'Segoe UI', sans-serif; }
        .app-container { min-height: 100vh; display: flex; flex-direction: column; align-items: center; padding-bottom: 120px; }
        
        /* Destaque da Arte Principal */
        .hero-banner { width: 100%; display: flex; justify-content: center; background: #1a1a1a; margin-bottom: 30px; }
        .main-art { width: 100%; max-width: 900px; height: auto; display: block; }
        
        .content-box { width: 90%; max-width: 800px; }
        .title { color: #8b4513; text-align: center; }
        .search-bar { width: 100%; padding: 15px; border-radius: 8px; border: 2px solid #8b4513; margin-bottom: 25px; box-sizing: border-box; }
        
        .playlist-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 15px; }
        .song-btn { padding: 20px; border: none; border-radius: 12px; background: #fff; cursor: pointer; font-weight: bold; font-size: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: 0.3s; }
        .song-btn:hover { background: #d4af37; color: white; }
        
        .player-sticky { position: fixed; bottom: 0; width: 100%; background: #333; color: white; padding: 15px; text-align: center; border-top: 5px solid #d4af37; box-sizing: border-box; }
        .playing-text { margin: 0 0 10px 0; }
      `}</style>
    </div>
  );
}
export default App;