export default class MobileMenu {
  constructor() {
    this.toggleBtn = document.querySelector('.navbar__toggle')
    this.menu = document.querySelector('.navbar__menu')

    if (!this.toggleBtn || !this.menu) return

    this.init()
  }

  init() {
    this.toggleBtn.addEventListener('click', () => this.toggleMenu())

    // đóng menu khi click link
    this.menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.closeMenu())
    })

    const tabEl = document.querySelector('#pills-tab');
    if(tabEl) {
      new bootstrap.Tab(tabEl);
    }
  }

  toggleMenu() {
    const isOpen = this.menu.classList.toggle('is-open')
    this.toggleBtn.classList.toggle('is-active', isOpen)
    this.toggleBtn.setAttribute('aria-expanded', isOpen)
  }

  closeMenu() {
    this.menu.classList.remove('is-open')
    this.toggleBtn.classList.remove('is-active')
    this.toggleBtn.setAttribute('aria-expanded', 'false')
  }
}

// init
new MobileMenu()
