import React, { useState } from 'react';

function App() {
  const [abaAtual, setAbaAtual] = useState('INÍCIO');
  
  // Controles da Galeria de Fotos Ampliada
  const [fotoAmpliada, setFotoAmpliada] = useState(null);
  const [indexFotoAtiva, setIndexFotoAtiva] = useState(0);

  // Lista de imagens (Natureza/Superação/União)
  const fotosGaleria = [
    "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1632&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499244015948-ac754399834b?q=80&w=1632&auto=format&fit=crop"
  ];

  // Função para abrir o Modal com a foto clicada
  const abrirFoto = (index) => {
    setIndexFotoAtiva(index);
    setFotoAmpliada(fotosGaleria[index]);
  };

  // Função para fechar o Modal
  const fecharFoto = () => {
    setFotoAmpliada(null);
  };

  // Funções para mudar de foto dentro do Modal
  const proximaFoto = (e) => {
    e.stopPropagation(); // Impede que o modal feche ao clicar no botão
    const novoIndex = (indexFotoAtiva + 1) % fotosGaleria.length;
    abrirFoto(novoIndex);
  };

  const anteriorFoto = (e) => {
    e.stopPropagation(); // Impede que o modal feche ao clicar no botão
    const novoIndex = (indexFotoAtiva - 1 + fotosGaleria.length) % fotosGaleria.length;
    abrirFoto(novoIndex);
  };

  return (
    <div style={{ 
      background: '#0a0a0a', minHeight: '100vh', width: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', 
      justifyContent: 'space-between', padding: '25px 15px', fontFamily: 'Arial, sans-serif' 
    }}>
      
      {/* MENU DE ABAS */}
      <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', width: '100%', marginBottom: '20px' }}>
        {['INÍCIO', 'FOTOS', 'VÍDEOS', 'DOAÇÕES'].map(aba => (
          <button 
            key={aba} 
            onClick={() => setAbaAtual(aba)}
            style={{ 
              padding: '15px 20px', fontSize: '18px', fontWeight: 'bold', 
              background: abaAtual === aba ? '#d4af37' : '#1a4d2e',
              color: 'white', border: 'none', cursor: 'pointer', borderRadius: '8px' 
            }}
          >
            {aba}
          </button>
        ))}
      </nav>

      {/* CONTEÚDO */}
      <div style={{ 
        textAlign: 'center', color: 'white', width: '100%', padding: '30px',
        border: abaAtual === 'FOTOS' ? 'none' : '3px solid #1a4d2e', 
        borderRadius: '15px', display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', flexGrow: 1
      }}>
        
        {abaAtual === 'INÍCIO' && (
          <div>
            <h1 style={{ fontSize: '32px' }}>ASSOCIAÇÃO E PROJETO</h1>
            <h1 style={{ fontSize: '36px', color: '#1a4d2e', margin: '20px 0' }}>ENCONTRO COM A VIDA</h1>
            <p style={{ fontSize: '22px' }}>DEPENDENTES QUÍMICOS (MASCULINO)</p>
            <div style={{ marginTop: '30px' }}>
              <p style={{ fontSize: '20px' }}>AV. BRASÍLIA, 9 - SERRA DOURADA II - SERRA/ES</p>
              <p style={{ fontSize: '28px', fontWeight: 'bold', color: '#d4af37', marginTop: '15px' }}>TEL: (27) 99998-5514</p>
            </div>
          </div>
        )}

        {/* ABA FOTOS ATUALIZADA (COM CLIQUE E MODAL) */}
        {abaAtual === 'FOTOS' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', height: '100%' }}>
            {fotosGaleria.map((url, index) => (
              <div 
                key={index} 
                onClick={() => abrirFoto(index)} // Abre a foto ao clicar
                style={{ 
                  backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center',
                  borderRadius: '12px', height: '30vh', border: '3px solid #1a4d2e',
                  cursor: 'pointer' // Muda o cursor para indicar que é clicável
              }} />
            ))}
          </div>
        )}

        {abaAtual === 'VÍDEOS' && <h1 style={{ fontSize: '28px' }}>Vídeos do Projeto (Em breve...)</h1>}

        {abaAtual === 'DOAÇÕES' && (
          <div>
            <h1 style={{ fontSize: '28px' }}>FAÇA SUA DOAÇÃO</h1>
            <p style={{ fontSize: '20px' }}>BANCO SICOOB</p>
            <p style={{ fontSize: '26px', fontWeight: 'bold', color: '#d4af37', margin: '20px 0' }}>PIX: 0859513200014</p>
            <p style={{ fontSize: '20px' }}>Agradecemos sua colaboração.</p>
          </div>
        )}
      </div>

      <footer style={{ padding: '15px', color: '#888', fontSize: '14px' }}>
        Encontro com a Vida © 2026
      </footer>

      {/* JANELA FLUTUANTE (MODAL) PARA A FOTO GRANDE */}
      {fotoAmpliada && (
        <div 
          onClick={fecharFoto} // Fecha se clicar no fundo
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', 
            justifyContent: 'center', zIndex: 1000, cursor: 'zoom-out'
        }}>
          {/* Botão Anterior */}
          <button 
            onClick={anteriorFoto}
            style={{
              position: 'absolute', left: '20px', background: 'rgba(255,255,255,0.2)',
              color: 'white', border: 'none', fontSize: '40px', padding: '10px 20px',
              cursor: 'pointer', borderRadius: '50%', zIndex: 1010
          }}>‹</button>

          {/* Imagem Ampliada */}
          <img 
            src={fotoAmpliada} 
            alt="Foto Ampliada" 
            style={{
              maxWidth: '90%', maxHeight: '80%', 
              borderRadius: '10px', border: '4px solid #1a4d2e',
              cursor: 'default'
          }} />

          {/* Botão Próximo */}
          <button 
            onClick={proximaFoto}
            style={{
              position: 'absolute', right: '20px', background: 'rgba(255,255,255,0.2)',
              color: 'white', border: 'none', fontSize: '40px', padding: '10px 20px',
              cursor: 'pointer', borderRadius: '50%', zIndex: 1010
          }}>›</button>

          {/* Botão Fechar (X) */}
          <button 
            onClick={fecharFoto}
            style={{
              position: 'absolute', top: '20px', right: '20px', 
              background: 'none', color: 'white', border: 'none', 
              fontSize: '30px', cursor: 'pointer', fontWeight: 'bold'
          }}>X</button>
        </div>
      )}
    </div>
  );
}

export default App;