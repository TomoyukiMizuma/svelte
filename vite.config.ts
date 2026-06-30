// https://vite.dev/config/
// https://github.com/kododake/PrintTools/blob/main/vite.config.ts

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
  plugins: [svelte()],
})
