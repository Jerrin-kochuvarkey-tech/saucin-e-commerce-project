import { defineConfig } from 'vite';

// Export Vite configuration with alias to polyfill 'crypto' with 'crypto-browserify'
export default defineConfig({
  resolve: {
    alias: {
      crypto: 'crypto-browserify',  // Add this line to polyfill the crypto module
    },
  },
});

