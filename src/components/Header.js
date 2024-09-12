// src/components/Header.js
export function createHeader() {
  const header = document.createElement('header')
  header.className = 'header'

  const logoContainer = document.createElement('div')
  logoContainer.className = 'logo-container'
  logoContainer.innerHTML = `
        <img src="src/assets/mercedesbenzlogo.png" alt="Mercedes Logo" class="logo">
    `

  const menuToggle = document.createElement('button')
  menuToggle.className = 'menu-toggle'
  menuToggle.innerHTML = `<i class="fas fa-bars"></i>`

  const navContainer = document.createElement('nav')
  navContainer.className = 'nav-container'
  navContainer.innerHTML = `
        <ul class="nav-list">
            <li><a href="#electric">Electric</a></li>
            <li><a href="#maybach">Maybach</a></li>
            <li><a href="#accessories">Accessories</a></li>
            <li><a href="#stores">Stores</a></li>
        </ul>
    `

  const iconsContainer = document.createElement('div')
  iconsContainer.className = 'icons-container'
  iconsContainer.innerHTML = `
        <span class="icon user-icon"><i class="fas fa-user"></i></span>
        <span class="icon cart-icon"><i class="fas fa-shopping-cart"></i></span>
    `

  header.appendChild(logoContainer)
  header.appendChild(menuToggle)
  header.appendChild(navContainer)
  header.appendChild(iconsContainer)

  menuToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active')
  })

  loadStylesheet('src/styles/Header.css')

  return header
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
