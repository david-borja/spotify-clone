import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: 'server' // tiene sentido que las páginas se rendericen en el servidor porque las playlists son infinitas, sería imposible generarlas todas de manera estática
});