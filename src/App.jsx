{/* LÓGICA DA ABA MÚSICAS */}
          {abaAtiva === 'Músicas' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
              <h3>Minhas Músicas</h3>
              
              {/* Exemplo de player de áudio */}
              <div>
                <p>Nome da Música 01</p>
                <audio controls style={{ width: '100%' }}>
                  <source src="/musicas/musica1.mp3" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>

              <div>
                <p>Nome da Música 02</p>
                <audio controls style={{ width: '100%' }}>
                  <source src="/musicas/musica2.mp3" type="audio/mpeg" />
                  Seu navegador não suporta o elemento de áudio.
                </audio>
              </div>
            </div>
          )}export default App;