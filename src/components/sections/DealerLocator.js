// src/components/sections/DealerLocator.js

import { createCard } from '../common/Cards.js'
import { createButton } from '../common/Button.js'

export function createDealerLocatorSection() {
  const section = document.createElement('section')
  section.className = 'dealer-locator-section'
  section.id = 'stores'

  const textContainer = document.createElement('div')
  textContainer.className = 'dealer-locator-text'

  const title = document.createElement('h2')
  title.className = 'dealer-locator-title'
  title.textContent = 'Find your nearest Mercedes dealer you.'

  const subtitle = document.createElement('p')
  subtitle.className = 'dealer-locator-subtitle'
  subtitle.textContent =
    'Browse over 1000 dealers worldwide, and find the one that best suits your situation.'

  textContainer.appendChild(title)
  textContainer.appendChild(subtitle)

  const imageContainer = document.createElement('div')
  imageContainer.className = 'dealer-locator-image'

  const card = createCard({
    title: 'Discover your local Mercedes partner store',
    description: '',
    button: createButton({
      text: 'Find a partner store near you',
      classes: ['button', 'primary'],
      onClick: () => {
        console.log('Finding nearest Mercedes store')
      }
    }),
    classes: ['dealer-card']
  })

  imageContainer.appendChild(card)

  section.appendChild(textContainer)
  section.appendChild(imageContainer)

  loadStylesheet('src/styles/sections/DealerLocator.css')

  return section
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
