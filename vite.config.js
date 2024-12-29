import { defineConfig } from 'vite'
import {resolve} from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@heatCalendar": resolve(__dirname, "./lib/main"),
    },
  },
  build: {
    //library entry and output settings
    lib: {
      entry: resolve(__dirname, "lib/main.js"),
      name: "simple-react-HeatCalendar",
      formats: ["es", "cjs"],
      fileName: (format) => `heatCalendar.${format}.js`,
    },
    //bundler options
    //externalized react-related imports
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
