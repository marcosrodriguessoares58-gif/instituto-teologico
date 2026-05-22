import fs from 'fs';
import path from 'path';

// Caminho para a sua pasta de fotos
const pastaGaleria = path.join(process.cwd(), 'public', 'galeria');
const arquivoSaida = path.join(process.cwd(), 'src', 'fotos-auto.json');

try {
  // Lê todos os arquivos da pasta 'public/galeria'
  const arquivos = fs.readdirSync(pastaGaleria);
  
  // Filtra imagens (jpg, jpeg, png, gif) correndo riscos de extensões maiúsculas
  const imagens = arquivos.filter(arq => 
    /\.(jpg|jpeg|png|gif)$/i.test(arq)
  ).map(arq => {
    // Corrige os espaços no nome do arquivo para o padrão de URL da Web
    const urlSegura = `/galeria/${encodeURIComponent(arq)}`;
    
    // Cria uma legenda limpa baseada no nome do arquivo
    let legendaSemExtensao = arq.substring(0, arq.lastIndexOf('.')) || arq;
    
    // Se for imagem do WhatsApp, simplifica a legenda para não ficar um texto gigante
    if (legendaSemExtensao.toLowerCase().includes('whatsapp image')) {
      legendaSemExtensao = 'Momento Encontro com a Vida';
    }

    return {
      url: urlSegura,
      legenda: legendaSemExtensao
    };
  });

  // Grava a lista formatada para o React ler
  fs.writeFileSync(arquivoSaida, JSON.stringify(imagens, null, 2));
  console.log(`\n==================================================`);
  console.log(`✅ SUCESSO! ${imagens.length} fotos foram catalogadas automaticamente.`);
  console.log(`==================================================\n`);
} catch (erro) {
  console.error("Erro ao ler a pasta de fotos:", erro);
}