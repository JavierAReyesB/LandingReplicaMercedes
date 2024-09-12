// src/components/sections/WheelProgram.js

export function createWheelProgramSection() {
  const section = document.createElement('section')
  section.className = 'wheel-program-section'
  section.id = 'maybach'

  const redContainer = document.createElement('div')
  redContainer.className = 'wheel-program-red-container'
  redContainer.style.backgroundImage = "url('src/assets/mercedes-benz-red.jpg')"
  redContainer.onclick = () => {
    window.open('https://www.mercedes-benz.com', '_blank')
  }

  const redContent = document.createElement('div')
  redContent.className = 'wheel-program-content'

  const redTitle = document.createElement('h3')
  redTitle.className = 'wheel-program-title'
  redTitle.textContent = 'Red as Temptation'

  const redDescription = document.createElement('p')
  redDescription.className = 'wheel-program-description'
  redDescription.textContent =
    'Good design is what drives us, and we’re proud to share that Mercedes-Maybach has already won the prestigious Best Design Award 2023, as judged by the world’s best product designers.'

  redContent.appendChild(redTitle)
  redContent.appendChild(redDescription)
  redContainer.appendChild(redContent)

  const secondContainer = document.createElement('div')
  secondContainer.className = 'wheel-program-second-container'
  secondContainer.onclick = () => {
    window.open(
      'https://www.mbofsmithtown.com/tire-wheel-program-page123/',
      '_blank'
    )
  }

  const secondImage = document.createElement('img')
  secondImage.src = 'src/assets/mercedes-benz-a-sedan-rojo.jpeg'
  secondImage.alt = 'Wheel Program'
  secondImage.className = 'wheel-program-second-image'

  const secondContent = document.createElement('div')
  secondContent.className = 'wheel-program-second-content'

  const secondTitle = document.createElement('h3')
  secondTitle.className = 'wheel-program-second-title'
  secondTitle.textContent = 'The Mercedes-Maybach wheel programme'

  const secondDescription = document.createElement('p')
  secondDescription.className = 'wheel-program-second-description'
  secondDescription.textContent =
    'The exclusive Mercedes-Maybach wheel programme, e.g. with optional 53.3 cm (21”) Maybach forged wheels in multi-spoke design.'

  secondContent.appendChild(secondTitle)
  secondContent.appendChild(secondDescription)

  secondContainer.appendChild(secondImage)
  secondContainer.appendChild(secondContent)

  section.appendChild(redContainer)
  section.appendChild(secondContainer)

  loadStylesheet('src/styles/sections/WheelProgram.css')

  return section
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
