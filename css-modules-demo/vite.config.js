import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // CSS Modules work out of the box in Vite — no extra config needed.
  // This block is here only to show what you CAN configure:
  css: {
    modules: {
      // Transform class names: 'camelCase' lets you write
      //   styles.myClass  instead of  styles['my-class']
      localsConvention: 'camelCase',
    },
  },
});
