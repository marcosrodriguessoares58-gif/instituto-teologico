function App() {
  return (
    <div className="container-principal">
      {/* Aqui você chama a div com a classe do banner */}
      <div className="banner-container"></div>
      
      {/* Resto do seu conteúdo abaixo... */}

      <style>{`
        .banner-container {
          width: 100%;
          height: 50vh;
          background-image: url('/arte-pequena.jpg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }

        @media (min-width: 768px) {
          .banner-container {
            height: 80vh;
            background-image: url('/arte-principal.jpg');
          }
        }
      `}</style>
    </div>
  );
}