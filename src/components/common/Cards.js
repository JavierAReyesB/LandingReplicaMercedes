export function createCard({
  title,
  imageSrc = '',
  imageAlt = '',
  description = '',
  colors = [],
  button = null,
  classes = [],
  includeColors = true
} = {}) {
  const card = document.createElement('div')
  card.className = classes.join(' ').trim()

  const imageHTML = imageSrc
    ? `<img src="${imageSrc}" alt="${imageAlt}" class="card-image">`
    : ''

  const colorsHTML =
    includeColors && colors.length
      ? `<div class="card-colors">
        ${colors
          .map(
            (color) =>
              `<span class="color-dot" style="background-color: ${color};"></span>`
          )
          .join('')}
      </div>`
      : ''

  card.innerHTML = `
    ${imageHTML}
    <div class="card-content">
        <h3 class="card-title">${title}</h3>
        ${description ? `<p class="card-description">${description}</p>` : ''}
        ${colorsHTML}
    </div>
  `

  if (button) {
    const content = card.querySelector('.card-content')
    content.appendChild(button)
  }

  loadStylesheet('src/styles/common/Cards.css')

  return card
}

// Función para agregar dinámicamente el CSS al <head>
function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
