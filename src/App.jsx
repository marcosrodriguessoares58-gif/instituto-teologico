function App() {
  return (
    <div className="main-container">
      {/* Imagem com proporção preservada */}
      <img src="/arte-pequena.jpg" alt="Banner" className="banner-image" />
      
      {/* Player de música */}
      <div className="player-container">
        <audio 
          controls 
          src="https://drive.google.com/uc?export=download&id=1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS"
        >
          Seu navegador não suporta a reprodução de áudio.
        </audio>
      </div>

      <style>{`
        body, html { margin: 0; padding: 0; width: 100%; min-height: 100%; background: #f4e4bc; }
        .main-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 10px;
        }
        .banner-image {
          width: 90%;          /* A imagem ocupa 90% da largura da tela */
          max-width: 400px;    /* Mantém um limite para não ficar distorcida */
          height: auto;        /* A altura ajusta sozinha */
          object-fit: contain; /* Garante que a proporção original seja mantida */
          border-radius: 10px;
          margin-bottom: 20px;
        }
        .player-container { width: 90%; max-width: 400px; }
      `}</style>
    </div>
  );
}

export default App;