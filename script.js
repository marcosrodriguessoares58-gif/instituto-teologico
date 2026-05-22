const minhasMusicas = [
  { nome: '01 A Glória é Tua.mp3', id: '1XTtehdDUJv3Lh6HASJIm9JDCrXjVAYcS' }
];

const container = document.getElementById('container-musicas');

if (container) {
  minhasMusicas.forEach(m => {
    container.innerHTML += `
      <div class="card">
        <p>${m.nome}</p>
        <audio controls>
          <source src="https://drive.google.com/uc?export=open&id=${m.id}" type="audio/mpeg">
          Seu navegador não suporta o áudio.
        </audio>
      </div>
      <hr>
    `;
  });
}