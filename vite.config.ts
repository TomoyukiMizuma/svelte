// https://vite.dev/config/
// https://vite.dev/config/shared-options#base
// https://vite.dev/guide/build#public-base-path
// https://github.com/kododake/PrintTools/blob/main/vite.config.ts
// https://github.com/shuji-bonji/svelte5-blog-example/blob/main/svelte.config.js

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'github-pages' ? "/svelte/" : "/",
  // base: process.argv.includes('dev') ? '/' : process.env.BASE_PATH,

  plugins: [svelte()],
})
