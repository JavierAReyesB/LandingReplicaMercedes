// src/components/sections/ContactSection.js

import { createButton } from '../common/Button.js'

export function createContactSection() {
  const section = document.createElement('section')
  section.className = 'contact-section'

  const textContainer = document.createElement('div')
  textContainer.className = 'contact-text'
  textContainer.textContent =
    'Ready to own the car of your dreams? Mercedes-Maybach are now available in selected dealers by appointment only.'

  const contactButton = createButton({
    text: 'CONTACT NOW',
    classes: ['contact-button'],
    onClick: () => {
      window.open('https://www.mercedes-benz.com', '_blank')
    }
  })

  section.appendChild(textContainer)
  section.appendChild(contactButton)

  loadStylesheet('src/styles/sections/ContactSection.css')

  return section
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
