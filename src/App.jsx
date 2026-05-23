import { useState } from 'react';

function App() {
  const [musicaAtual, setMusicaAtual] = useState(null);

  // LISTA DE MÚSICAS: Adicione suas músicas aqui seguindo o padrão
  const playlist = [
    { nome: "Oração de Alívio", id: "1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS" },
    // Adicione mais linhas abaixo se precisar:
    // { nome: "Nome da Música", id: "ID_DO_DRIVE" },
  ];

  return (
    <div style={{ background: '#f4e4bc', minHeight: '100vh', paddingBottom: '150px', fontFamily: 'sans-serif' }}>
      
      {/* Imagem de Capa (Certifique-se de que o arquivo na pasta public chama-se arte-principal.jpg) */}
      <div style={{ textAlign: 'center', background: '#000', marginBottom: '30px' }}>
        <img 
          src="/arte-principal.jpg" 
          alt="Capa do Instituto Teológico" 
          style={{ width: '100%', maxWidth: '900px', display: 'block', margin: '0 auto' }} 
        />
      </div>

      {/* Área da Biblioteca de Músicas */}
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#8b4513' }}>🎵 Biblioteca de Músicas</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {playlist.map((musica, index) => (
            <button 
              key={index} 
              onClick={() => setMusicaAtual(musica)}
              style={{ 
                width: '100%', padding: '20px', fontSize: '18px', cursor: 'pointer', 
                borderRadius: '12px', border: '1px solid #8b4513', background: '#fff', 
                textAlign: 'left', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
              }}
            >
              💿 {musica.nome}
            </button>
          ))}
        </div>
      </div>

      {/* Player Fixo na Parte Inferior */}
      {musicaAtual && (
        <div style={{ 
          position: 'fixed', bottom: 0, width: '100%', background: '#333', 
          color: '#fff', padding: '20px', textAlign: 'center', 
          borderTop: '5px solid #d4af37', boxSizing: 'border-box' 
        }}>
          <p style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Tocando: <strong>{musicaAtual.nome}</strong></p>
          <audio 
            controls 
            autoPlay 
            key={musicaAtual.id} 
            src={`https://drive.google.com/uc?export=download&id=${musicaAtual.id}`} 
            style={{ width: '100%', maxWidth: '500px' }}
          />
        </div>
      )}
    </div>
  );
}

export default App;