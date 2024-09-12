// src/components/Main.js

import { createHeroSection } from './sections/Hero.js'
import { createProductsSection } from './sections/Products.js'
import { createDealerLocatorSection } from './sections/DealerLocator.js'
import { createFeaturesSection } from './sections/Features.js'
import { createWheelProgramSection } from './sections/WheelProgram.js'
import { createContactSection } from './sections/ContactSection.js'

export function renderMain() {
  const main = document.createElement('main')
  main.className = 'main-content'

  main.appendChild(createHeroSection())
  main.appendChild(createProductsSection())
  main.appendChild(createDealerLocatorSection())
  main.appendChild(createFeaturesSection())
  main.appendChild(createWheelProgramSection())
  main.appendChild(createContactSection())

  return main
}
