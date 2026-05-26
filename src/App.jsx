import { useState } from 'react';

function App() {
  const [aba, setAba] = useState('');
  const [indexFoto, setIndexFoto] = useState(null);
  const [vIndex, setVIndex] = useState(0);

  const galeriaFotos = ["Image1.jpg", "Image2.jpg", "Image3.jpg", "Image4.jpg", "Image5.jpg", "Image6.jpg", "Image7.jpg", "Image8.jpg", "Image9.jpg", "Image10.jpg"];
  const listaVideos = ["video1.mp4", "video2.mp4", "video3.mp4"];

  // Detectar se é mobile
  const isMobile = window.innerWidth <= 768;

  return (
    <div style={container}>
      <img src="https://i.ibb.co/B5NR6SXt/projeto.png?v=7" alt="Projeto" style={imagem} />
      
      {/* MENU CENTRALIZADO */}
      <div style={menu}>
        <button style={botao} onClick={() => setAba('foto')}>Fotos</button>
        <button style={botao} onClick={() => setAba('video')}>Vídeos</button>
      </div>

      {/* ABA FOTOS */}
      {aba === 'foto' && (
        <div style={janela}>
          <div style={topo}><h1>Galeria</h1><button style={fechar} onClick={() => setAba('')}>X</button></div>
          <div style={galeria}>
            {galeriaFotos.map((nome, i) => (
              <img key={i} src={`/galeria/${nome}`} style={foto} alt="foto" onClick={() => setIndexFoto(i)} />
            ))}
          </div>
        </div>
      )}

      {/* MODAL FOTOS */}
      {indexFoto !== null && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 99999 }}>
          <button style={{...fechar, position: 'absolute', top: '20px', right: '20px'}} onClick={() => setIndexFoto(null)}>Fechar</button>
          <img src={`/galeria/${galeriaFotos[indexFoto]}`} style={{ maxWidth: '90%', maxHeight: '80%', borderRadius: '10px' }} alt="zoom" />
        </div>
      )}

      {/* ABA VÍDEOS RESPONSIVA */}
      {aba === 'video' && (
        <div style={janela}>
          <div style={topo}><h1>Vídeos</h1><button style={fechar} onClick={() => setAba('')}>X</button></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
            {listaVideos.map((video, i) => (
              <div key={i} onClick={() => setVIndex(i)} style={{ cursor: 'pointer', background: '#333', borderRadius: '10px', padding: '15px', textAlign: 'center', border: vIndex === i ? '2px solid #7b1e7a' : 'none' }}>
                <div style={{ fontSize: isMobile ? '50px' : '40px' }}>▶</div>
                <p style={{ margin: 0, fontSize: '14px' }}>Vídeo {i + 1}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '20px' }}>
            <video key={listaVideos[vIndex]} style={{ width: '100%', borderRadius: '10px', background: '#000' }} controls autoPlay>
              <source src={`/galeria/${listaVideos[vIndex]}`} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

// ESTILOS RESPONSIVOS
const container = { width: '100vw', height: '100vh', background: '#000', overflowY: 'auto', position: 'relative' };
const imagem = { width: '100%', minHeight: '140vh', objectFit: 'cover', display: 'block' };

const menu = { 
  position: 'fixed', top: window.innerWidth <= 768 ? '50px' : '150px', 
  width: '100%', display: 'flex', justifyContent: 'center', gap: '20px', zIndex: 9999 
};

const botao = { 
  padding: window.innerWidth <= 768 ? '20px 40px' : '18px 40px', 
  fontSize: window.innerWidth <= 768 ? '24px' : '22px', 
  background: 'linear-gradient(135deg,#5b1a55,#7b1e7a,#3d0c3d)', color: '#fff', border: 'none', borderRadius: '15px', cursor: 'pointer', fontWeight: 'bold' 
};

const janela = { 
  position: 'fixed', top: '10%', left: window.innerWidth <= 768 ? '5%' : '15%', 
  width: window.innerWidth <= 768 ? '90%' : '70%', height: '80vh', 
  background: 'rgba(0,0,0,0.95)', borderRadius: '20px', padding: '20px', zIndex: 9999, overflowY: 'auto', color: '#fff' 
};

const topo = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' };
const fechar = { background: '#8b0000', color: '#fff', border: 'none', borderRadius: '10px', padding: '10px 20px', cursor: 'pointer', fontSize: '18px' };
const galeria = { display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' };
const foto = { width: window.innerWidth <= 768 ? '45%' : '200px', height: '150px', objectFit: 'cover', borderRadius: '15px', cursor: 'pointer' };

export default App;