// src/components/sections/Hero.js

export function createHeroSection() {
  const hero = document.createElement('section')
  hero.className = 'hero-section'

  hero.innerHTML = `
      <a href="https://www.mercedesocasion.com/coches-nuevos/mercedes-benz/cls/mercedes-benz-cls-cls-220-d-455439" target="_blank" class="hero-link" aria-label="Visit Mercedes-Benz CLS page">
          <div class="hero-image-container">
              <img src="src/assets/mercedescls.jpg" alt="New Mercedes CLS" class="hero-image">
          </div>
          <div class="hero-content">
              <h1 class="hero-title">New Mercedes CLS</h1>
              <p class="hero-subtitle">The Power In Your Hands</p>
          </div>
      </a>
  `

  loadStylesheet('src/styles/sections/Hero.css')

  return hero
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
