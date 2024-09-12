// src/components/sections/Features.js

import { createCard } from '../common/Cards.js'

export function createFeaturesSection() {
  const section = document.createElement('section')
  section.className = 'features-section'
  section.id = 'accessories'

  const features = [
    {
      title: 'Comfort',
      imageSrc: 'src/assets/interior-mercedes-eqs.webp',
      imageAlt: 'Comfort Feature',
      description: 'Experience ultimate comfort in every journey.'
    },
    {
      title: 'Technology',
      imageSrc: 'src/assets/faros-futuro-mercedes.jpeg',
      imageAlt: 'Technology Feature',
      description: 'Innovative technology for a smarter drive.'
    },
    {
      title: 'Accessories',
      imageSrc: 'src/assets/asientos-interiores.jpg',
      imageAlt: 'Accessories Feature',
      description: 'Personalize your car with premium accessories.'
    }
  ]

  features.forEach((feature) => {
    const card = createCard({
      title: feature.title,
      imageSrc: feature.imageSrc,
      imageAlt: feature.imageAlt,
      description: feature.description,
      classes: ['feature-card']
    })

    section.appendChild(card)
  })

  loadStylesheet('src/styles/sections/Features.css')

  return section
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
