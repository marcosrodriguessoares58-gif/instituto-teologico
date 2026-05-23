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
    <div className="app-wrapper">
      <header className="banner-area">
        <img src="/arte-pequena.jpg" alt="Banner" className="banner-image" />
      </header>

      <main className="content-area">
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
      </main>

      {musicaAtual && (
        <div className="player-sticky">
          <p>Tocando agora: <strong>{musicaAtual.nome}</strong></p>
          <audio controls autoPlay key={musicaAtual.id} src={`https://drive.google.com/uc?export=download&id=${musicaAtual.id}`} />
        </div>
      )}

      <style>{`
        body { margin: 0; background: #f4e4bc; font-family: sans-serif; }
        .app-wrapper { display: flex; flex-direction: column; min-height: 100vh; padding-bottom: 100px; }
        
        /* Layout Computador */
        .banner-area { width: 100%; display: flex; justify-content: center; background: #333; }
        .banner-image { width: 100%; max-width: 800px; height: auto; }
        
        .content-area { width: 90%; max-width: 800px; margin: 20px auto; }
        .search-bar { width: 100%; padding: 15px; border-radius: 8px; border: 2px solid #8b4513; margin-bottom: 20px; }
        
        .playlist-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; }
        .song-btn { padding: 20px; border: 1px solid #8b4513; border-radius: 8px; background: #fff; cursor: pointer; font-weight: bold; }
        
        .player-sticky { position: fixed; bottom: 0; width: 100%; background: #333; color: white; padding: 20px; text-align: center; border-top: 5px solid #d4af37; }

        /* Ajuste para Celular */
        @media (max-width: 600px) {
          .playlist-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}
export default App;