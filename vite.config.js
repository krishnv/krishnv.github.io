import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import matter from 'gray-matter'
import fs from 'fs'

function portfolioMdPlugin() {
  return {
    name: 'portfolio-md',
    transform(_code, id) {
      if (!id.endsWith('portfolio.md')) return
      const raw = fs.readFileSync(id, 'utf-8')
      const { data, content } = matter(raw)
      return `export default ${JSON.stringify({ ...data, content })}`
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), portfolioMdPlugin()],
  base: '/',
  server: {
    watch: {
      ignored: ['**/*.docx', '**/*.doc', '**/*.pdf'],
    },
  },
})
