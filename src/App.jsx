import { useState } from 'react';

function App() {
  const [musicaAtual, setMusicaAtual] = useState(null);

  // É AQUI QUE VOCÊ LISTA AS MÚSICAS!
  // Se a lista estiver vazia, o site não mostra nada.
  const playlist = [
    { nome: "Oração de Alívio", id: "1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS" },
    // Adicione novas linhas aqui para cada música nova
  ];

  return (
    <div className="main-container">
      <header>
        {/* Verifique se este nome de arquivo existe na sua pasta /public */}
        <img src="/arte-pequena.jpg" alt="Banner" style={{width: '100%', maxWidth: '800px'}} />
      </header>

      <div style={{padding: '20px'}}>
        <h2>🎵 Minhas Músicas</h2>
        <div className="lista-de-musicas">
          {playlist.map((musica, index) => (
            <button 
              key={index} 
              onClick={() => setMusicaAtual(musica)}
              style={{display: 'block', width: '100%', padding: '15px', margin: '10px 0', cursor: 'pointer'}}
            >
              💿 {musica.nome}
            </button>
          ))}
        </div>
      </div>

      {musicaAtual && (
        <div style={{position: 'fixed', bottom: 0, width: '100%', background: '#333', color: '#fff', padding: '20px', textAlign: 'center'}}>
          <p>Tocando: {musicaAtual.nome}</p>
          <audio controls autoPlay src={`https://drive.google.com/uc?export=download&id=${musicaAtual.id}`} />
        </div>
      )}
    </div>
  );
}

export default App;