import { useState } from 'react';

function App() {
  const [abaAtiva, setAbaAtiva] = useState(null);

  return (
    <div style={{ margin: 0, padding: 0, width: '100%', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      
      <img 
        src="/arte-principal.jpg" 
        alt="Banner" 
        style={{ display: 'block', width: '100%', height: 'auto', objectFit: 'cover' }} 
      />

      <div style={{ position: 'absolute', bottom: '5%', width: '100%', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', zIndex: 10 }}>
        <button onClick={() => setAbaAtiva('Músicas')} style={{ cursor: 'pointer', padding: '10px 15px', fontSize: '16px' }}>🖐️ Músicas</button>
        <button onClick={() => setAbaAtiva('Vídeos')} style={{ cursor: 'pointer', padding: '10px 15px', fontSize: '16px' }}>🖐️ Vídeos</button>
        <button onClick={() => setAbaAtiva('Fotos')} style={{ cursor: 'pointer', padding: '10px 15px', fontSize: '16px' }}>🖐️ Fotos</button>
        <button onClick={() => setAbaAtiva('Apostilas')} style={{ cursor: 'pointer', padding: '10px 15px', fontSize: '16px' }}>🖐️ Apostilas</button>
        <button onClick={() => setAbaAtiva('Doações')} style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 15px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>🖐️ Doações</button>
      </div>

      {abaAtiva && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'white', zIndex: 100, padding: '40px', boxSizing: 'border-box', overflowY: 'auto' }}>
          <button onClick={() => setAbaAtiva(null)} style={{ backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 25px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px' }}>
            ❌ Fechar {abaAtiva}
          </button>
          <h1>{abaAtiva}</h1>
          <hr />
          <p>Conteúdo da aba {abaAtiva} em desenvolvimento.</p>
        </div>
      )}
    </div>
  );
}

export default App;