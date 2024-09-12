export function createFooter() {
  const footer = document.createElement('footer')
  footer.className = 'footer'
  footer.innerHTML = `
        <div class="newsletter-section">
            <h2>Join the power.</h2>
            <p>Sign up for our newsletter.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email address here" required>
                <button type="submit">Subscribe</button>
            </form>
            <div class="privacy-policy">
                <input type="checkbox" id="privacy-checkbox" required>
                <label for="privacy-checkbox">By signing up, I agree to the <a href="#privacy">privacy policy</a> of Veloretti.</label>
            </div>
            <!-- Redes sociales movidas aquí -->
            <div class="social-icons">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
            </div>
        </div>
        <div class="footer-links">
            <ul class="footer-section">
                <li class="footer-title">Explorer</li>
                <li>Electric bikes</li>
                <li>City bikes</li>
                <li>Kids bikes</li>
                <li>Accessories</li>
                <li>Guide</li>
                <li>Business</li>
                <li>Insurance Electric</li>
                <li>Size guide</li>
            </ul>
            <ul class="footer-section">
                <li class="footer-title">About</li>
                <li>About us</li>
                <li>Journal</li>
                <li>Reviews</li>
                <li>Press</li>
                <li>Jobs</li>
            </ul>
            <ul class="footer-section">
                <li class="footer-title">Help</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li>Delivery</li>
                <li>Assembly & manuals</li>
                <li>Payment options</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
            </ul>
        </div>
        <!-- Botón para volver arriba -->
        <a href="#" class="back-to-top" aria-label="Back to top">
            <i class="fas fa-arrow-up"></i>
        </a>
    `

  loadStylesheet('src/styles/Footer.css')

  return footer
}

function loadStylesheet(href) {
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  document.head.appendChild(link)
}
