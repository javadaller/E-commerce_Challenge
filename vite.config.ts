// vite.config.ts

import { defineConfig } from 'vite';

export default defineConfig({
  // Configuration de base
  root: './', // Dossier racine du projet
  build: {
    outDir: 'dist' // Dossier de sortie pour les fichiers de build
  }
});