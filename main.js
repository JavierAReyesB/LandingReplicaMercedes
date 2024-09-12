// main.js
import { createHeader } from './src/components/Header.js'
import { renderMain } from './src/components/Main.js'
import { createFooter } from './src/components/Footer.js'

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')

  app.appendChild(createHeader())
  app.appendChild(renderMain())
  app.appendChild(createFooter())
})
