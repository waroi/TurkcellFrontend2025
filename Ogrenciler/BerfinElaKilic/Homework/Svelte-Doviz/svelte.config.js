import path from 'path';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  kit: {
    alias: {
      $lib: path.resolve('src/lib'),
    },
  },
  preprocess: vitePreprocess(),
};