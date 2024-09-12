// src/components/sections/Products.js

import { createCard } from '../common/Cards.js'
import { createButton } from '../common/Button.js'

export function createProductsSection() {
  const section = document.createElement('section')
  section.className = 'products-section'
  section.id = 'electric'

  const products = [
    {
      title: 'Electric',
      imageSrc: 'src/assets/E-450-4MATIC-Cabriolet.png',
      imageAlt: 'Electric Car 1',
      description: 'Merces E450 Cabriolet',
      colors: ['#000', '#fff', '#f00', '#00f'],
      url: 'https://www.mercedes-benz.ca/en/vehicles/model/e-class/cabriolet/e450a4'
    },
    {
      title: 'Hybrid',
      imageSrc: 'src/assets/mercedes-benz-glc-suv.avif',
      imageAlt: 'Hybrid Car 2',
      description: 'Merces GLC SUV',
      colors: ['#000', '#fff', '#ff0'],
      url: 'https://www.mercedes-benz.es/passengercars/models/suv/glc/overview.html'
    },
    {
      title: 'Hybrid',
      imageSrc: 'src/assets/Grey_Mercedes_Benz_G_Class.png',
      imageAlt: 'Hybrid Car 3',
      description: 'Merces Benz-G-Class',
      colors: ['#000', '#00f', '#0f0', '#f00'],
      url: 'https://www.mercedes-benz.es/passengercars/models/suv/g-class/overview.html'
    },
    {
      title: 'Electric',
      imageSrc: 'src/assets/mercedes-amg-gt-coupe.avif',
      imageAlt: 'Electric Car 4',
      description: 'Merces GLC SUV',
      colors: ['#000', '#888', '#aaa'],
      url: 'https://www.mercedes-benz.es/passengercars/models/coupe/amg-gt-4-door/overview.html'
    }
  ]

  products.forEach((product) => {
    const card = createCard({
      title: product.title,
      imageSrc: product.imageSrc,
      imageAlt: product.imageAlt,
      description: product.description,
      colors: product.colors,
      classes: ['product-card'],
      includeColors: false
    })

    const actionContainer = document.createElement('div')
    actionContainer.className = 'product-action-container'

    const colorsContainer = document.createElement('div')
    colorsContainer.className = 'colors-container'

    product.colors.forEach((color) => {
      const colorDot = document.createElement('span')
      colorDot.className = 'color-dot'
      colorDot.style.backgroundColor = color
      colorsContainer.appendChild(colorDot)
    })

    const detailsButton = createButton({
      text: 'More Info',
      classes: ['button', 'primary'],
      onClick: () => {
        window.open(product.url, '_blank')
      }
    })

    actionContainer.appendChild(detailsButton)
    actionContainer.appendChild(colorsContainer)

    card.appendChild(actionContainer)

    section.appendChild(card)
  })

  loadStylesheet('src/styles/sections/Products.css')

  return section
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
