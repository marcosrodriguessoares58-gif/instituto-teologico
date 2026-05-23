import { useState } from 'react';

function App() {
  const [busca, setBusca] = useState("");
  const [musicaAtual, setMusicaAtual] = useState({
    nome: "Oração de Alívio",
    url: "https://drive.google.com/uc?export=download&id=1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS"
  });

  const playlist = [
    { nome: "Oração de Alívio", id: "1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS" },
    // Adicione novas músicas aqui seguindo o modelo abaixo:
    // { nome: "Nome da Musica", id: "ID_DO_DRIVE" },
  ];

  const musicasFiltradas = playlist.filter((m) =>
    m.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="main-container">
      <img src="/arte-pequena.jpg" alt="Banner" className="banner-image" />
      
      <input 
        type="text" 
        placeholder="🔍 Pesquisar música..." 
        className="search-bar"
        onChange={(e) => setBusca(e.target.value)}
      />

      <div className="playlist">
        {musicasFiltradas.map((musica, index) => (
          <button key={index} onClick={() => setMusicaAtual({nome: musica.nome, url: `https://drive.google.com/uc?export=download&id=${musica.id}`})}>
            {musica.nome}
          </button>
        ))}
      </div>

      <div className="player-container">
        <h3>Tocando: {musicaAtual.nome}</h3>
        <audio controls key={musicaAtual.url} src={musicaAtual.url} />
      </div>

      <style>{`
        body { margin: 0; background: #f4e4bc; font-family: sans-serif; }
        .main-container { display: flex; flex-direction: column; align-items: center; padding: 20px; }
        .banner-image { width: 90%; max-width: 400px; height: auto; border-radius: 10px; margin-bottom: 20px; }
        .search-bar { width: 90%; max-width: 400px; padding: 12px; margin-bottom: 20px; border: 1px solid #ccc; border-radius: 8px; }
        .playlist { display: flex; flex-direction: column; gap: 10px; width: 90%; max-width: 400px; margin-bottom: 20px; }
        button { padding: 15px; border: none; border-radius: 8px; background: #333; color: #fff; cursor: pointer; }
        .player-container { width: 90%; max-width: 400px; text-align: center; }
      `}</style>
    </div>
  );
}
export default App;