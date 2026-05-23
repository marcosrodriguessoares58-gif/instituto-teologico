import { useState } from 'react';

function App() {
  const [musicaAtual, setMusicaAtual] = useState(null);

  const playlist = [
    { nome: "Oração de Alívio", id: "1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS" },
    // Adicione mais músicas aqui
  ];

  return (
    <div style={{ background: '#f4e4bc', minHeight: '100vh', paddingBottom: '120px', fontFamily: 'sans-serif' }}>
      
      {/* Aqui não temos mais o bloco da imagem */}

      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#8b4513' }}>🎵 Minhas Músicas</h2>
        
        {playlist.map((musica, index) => (
          <button 
            key={index} 
            onClick={() => setMusicaAtual(musica)}
            style={{ 
              width: '100%', padding: '20px', marginBottom: '10px', 
              fontSize: '18px', cursor: 'pointer', borderRadius: '8px', 
              border: '1px solid #8b4513', background: '#fff', textAlign: 'left' 
            }}
          >
            💿 {musica.nome}
          </button>
        ))}
      </div>

      {musicaAtual && (
        <div style={{ position: 'fixed', bottom: 0, width: '100%', background: '#333', color: '#fff', padding: '15px', textAlign: 'center', borderTop: '5px solid #d4af37' }}>
          <p style={{ margin: '0 0 10px 0' }}>Tocando: {musicaAtual.nome}</p>
          <audio controls autoPlay src={`https://drive.google.com/uc?export=download&id=${musicaAtual.id}`} />
        </div>
      )}
    </div>
  );
}

export default App;