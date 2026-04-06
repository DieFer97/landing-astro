import { defineConfig } from 'astro/config';

export default defineConfig({
  build: {
    inlineStylesheets: 'always', 
  },
  vite: {
    build: {
      // Este límite de 4KB permite que tu CSS entre al HTML, 
      // pero deja las fuentes (.woff2) afuera porque pesan más de 10KB.
      assetsInlineLimit: 4096, 
    }
  }
});