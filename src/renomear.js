import fs from 'fs';
import path from 'path';

// Caminho absoluto para a pasta de músicas baseado no seu terminal
const diretorioMusicas = 'C:/Users/pregr/instituto-teologico/public/musicas-reserva';

try {
  if (!fs.existsSync(diretorioMusicas)) {
    console.error(`A pasta não foi encontrada no caminho: ${diretorioMusicas}`);
    process.exit(1);
  }

  const arquivos = fs.readdirSync(diretorioMusicas);
  let contador = 0;

  arquivos.forEach((arquivo) => {
    // Se o arquivo contiver o caractere #
    if (arquivo.includes('#')) {
      const caminhoAntigo = path.join(diretorioMusicas, arquivo);
      // Remove todas as hashtags do nome do arquivo físico
      const novoNome = arquivo.replace(/#/g, '');
      const caminhoNovo = path.join(diretorioMusicas, novoNome);

      fs.renameSync(caminhoAntigo, caminhoNovo);
      console.log(`✓ Renomeado: "${arquivo}" ➔ "${novoNome}"`);
      contador++;
    }
  });

  if (contador === 0) {
    console.log("Nenhum arquivo com '#' precisou ser renomeado.");
  } else {
    console.log(`Sucesso! ${contador} arquivos foram corrigidos.`);
  }
} catch (erro) {
  console.error("Ocorreu um erro ao processar os arquivos:", erro.message);
}