import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

declare const process: {
  env?: Record<string, string | undefined>;
};

const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";

// https://vite.dev/config/
export default defineConfig({
  base: isGithubPages ? "/svelte/" : "/",
  plugins: [svelte()],
})
