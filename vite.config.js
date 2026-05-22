import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Plugin customizado para ler as pastas de fotos e mídias em tempo real
const buscadorDeMidiasAutomaticas = () => ({
  name: 'buscador-de-midias-automaticas',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      // Endpoint para ler as fotos da galeria
      if (req.url === '/api/obter-fotos-galeria') {
        const pastaGaleria = path.join(process.cwd(), 'public', 'galeria');
        try {
          if (!fs.existsSync(pastaGaleria)) fs.mkdirSync(pastaGaleria, { recursive: true });
          const arquivos = fs.readdirSync(pastaGaleria);
          const fotos = arquivos.filter(arq => /\.(jpg|jpeg|png|gif|webp)$/i.test(arq)).map(arq => ({
            url: `/galeria/${arq}`,
            legenda: arq.substring(0, arq.lastIndexOf('.')) || arq
          }));
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify(fotos));
        } catch (e) {
          res.statusCode = 500;
          return res.end(JSON.stringify([]));
        }
      }

      // Endpoint para ler os vídeos e áudios
      if (req.url === '/api/obter-midias-audiovisuais') {
        const pastaMidias = path.join(process.cwd(), 'public', 'midias');
        try {
          if (!fs.existsSync(pastaMidias)) fs.mkdirSync(pastaMidias, { recursive: true });
          const arquivos = fs.readdirSync(pastaMidias);
          const midias = arquivos.filter(arq => /\.(mp4|mp3|wav|ogg)$/i.test(arq)).map(arq => ({
            url: `/midias/${arq}`,
            titulo: arq.substring(0, arq.lastIndexOf('.')) || arq,
            tipo: /\.(mp4)$/i.test(arq) ? 'video' : 'audio'
          }));
          res.setHeader('Content-Type', 'application/json');
          return res.end(JSON.stringify(midias));
        } catch (e) {
          res.statusCode = 500;
          return res.end(JSON.stringify([]));
        }
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), buscadorDeMidiasAutomaticas()],
  server: {
    port: 8080,
    host: true
  }
});import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Esta linha força os caminhos dos arquivos a serem relativos
})