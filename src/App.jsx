import { useState } from 'react';

function App() {
  const [busca, setBusca] = useState("");
  const [musicaAtual, setMusicaAtual] = useState(null);

  // LISTA DE MÚSICAS: Adicione todas as suas músicas aqui
  const playlist = [
    { nome: "Oração de Alívio", id: "1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS" },
    // { nome: "Nome da outra musica", id: "ID_AQUI" },
  ];

  const musicasFiltradas = playlist.filter((m) =>
    m.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="main-container">
      <img src="/arte-pequena.jpg" alt="Banner" className="banner-image" />
      
      <div className="music-library">
        <h2>🎵 Biblioteca de Músicas</h2>
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
      </div>

      {musicaAtual && (
        <div className="player-sticky">
          <h3>Tocando: {musicaAtual.nome}</h3>
          <audio controls autoPlay key={musicaAtual.url} src={`https://drive.google.com/uc?export=download&id=${musicaAtual.id}`} />
        </div>
      )}

      <style>{`
        body { margin: 0; background: #f4e4bc; font-family: 'Segoe UI', sans-serif; }
        .main-container { display: flex; flex-direction: column; align-items: center; padding: 20px; padding-bottom: 150px; }
        .banner-image { width: 90%; max-width: 400px; height: auto; border-radius: 10px; margin-bottom: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
        .music-library { width: 100%; max-width: 400px; }
        .search-bar { width: 100%; padding: 12px; margin-bottom: 20px; border: 2px solid #8b4513; border-radius: 8px; box-sizing: border-box; }
        .playlist-grid { display: flex; flex-direction: column; gap: 10px; }
        .song-btn { padding: 15px; border: 1px solid #8b4513; border-radius: 8px; background: #fff; cursor: pointer; text-align: left; font-weight: bold; }
        .song-btn:hover { background: #e0d0a0; }
        .player-sticky { position: fixed; bottom: 0; width: 100%; background: #333; color: white; padding: 15px; text-align: center; border-top: 5px solid #d4af37; }
      `}</style>
    </div>
  );
}
export default App;