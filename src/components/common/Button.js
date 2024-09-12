export function createButton({
  text,
  type = 'button',
  classes = [],
  onClick
} = {}) {
  const button = document.createElement('button')
  button.type = type
  button.textContent = text

  if (classes.length) {
    button.classList.add(...classes)
  }

  if (onClick && typeof onClick === 'function') {
    button.addEventListener('click', onClick)
  }

  loadStylesheet('src/styles/common/Button.css')

  return button
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
