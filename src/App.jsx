function App() {
  return (
    <>
      {/* Container do Banner */}
      <div className="banner-container"></div>

      {/* Estilos CSS */}
      <style>{`
        body, html { 
          margin: 0; 
          padding: 0; 
          width: 100%; 
          min-height: 100%; 
        }
        .banner-container {
          width: 100%;
          height: 90vh;
          background-image: url('/arte-pequena.jpg');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}

export default App;