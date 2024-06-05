import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import dotenv from 'dotenv';
// https://vitejs.dev/config/

dotenv.config()
export default defineConfig({
    plugins: [react()],
    base: "./",
    build:{
        outDir: "build",
    },
    css:{
        postcss:{
            plugins:[tailwindcss(), autoprefixer()]
        }
    },
    define:{
        "process.env": process.env
    }

})
