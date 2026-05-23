import React from 'react';

function App() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* SEÇÃO INICIAL E MENU */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '50px' }}>
        {['INÍCIO', 'FOTOS', 'VÍDEOS', 'DOAÇÕES'].map(aba => (
          <button key={aba} style={{ padding: '20px 40px', fontSize: '30px', fontWeight: 'bold', background: '#1a4d2e', color: 'white', border: 'none', cursor: 'pointer' }}>
            {aba}
          </button>
        ))}
      </nav>

      {/* ARTE E DADOS GIGANTES */}
      <div style={{ textAlign: 'center', color: 'white', padding: '100px' }}>
        <h1 style={{ fontSize: '120px', margin: '0' }}>ASSOCIAÇÃO E PROJETO</h1>
        <h1 style={{ fontSize: '150px', color: '#1a4d2e', margin: '20px 0' }}>ENCONTRO COM A VIDA</h1>
        <p style={{ fontSize: '60px', marginTop: '40px' }}>DEPENDENTES QUÍMICOS (MASCULINO)</p>
        
        <div style={{ marginTop: '80px', border: '5px solid #1a4d2e', padding: '40px' }}>
          <p style={{ fontSize: '50px' }}>AV. BRASÍLIA, 9 - SERRA DOURADA II - SERRA/ES</p>
          <p style={{ fontSize: '80px', fontWeight: 'bold', color: '#d4af37' }}>TEL: (27) 99998-5514</p>
        </div>
      </div>
    </div>
  );
}

export default App;