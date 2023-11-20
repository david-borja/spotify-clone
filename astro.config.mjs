import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server', // tiene sentido que las páginas se rendericen en el servidor porque las playlists son infinitas, sería imposible generarlas todas de manera estática
})
