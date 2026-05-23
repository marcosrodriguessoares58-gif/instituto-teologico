{/* SEÇÃO DA ARTE: Tela cheia sem bordas */}
<div style={{ 
  width: '100vw',
  height: '100vh',
  margin: 0,
  padding: 0,
  overflow: 'hidden',
  position: 'relative'
}}>
  <img 
    src="/arte-principal.jpg" 
    alt="Capa do Instituto Teológico" 
    style={{ 
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }} 
  />
</div>