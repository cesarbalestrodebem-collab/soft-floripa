import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import node from '@astrojs/node'

export default defineConfig({
  site: 'https://softfloripa.com.br',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    sitemap(),
  ],
})