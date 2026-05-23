function App() {
  return (
    <>
      <div className="banner-container"></div>
      <style>{`
        body, html { margin: 0; padding: 0; width: 100%; min-height: 100%; }
        .banner-container {
          width: 100%;
          height: 50vh;
          background-image: url('/arte-pequena.jpg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}
export default App;