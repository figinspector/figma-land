export function initMenu() {
  document.body.addEventListener("click", (e) => {
    const evMenu = e.target.closest(".menu") || e.target.closest('.menu__item')

    if (evMenu) closeMenu()    
  })
}

// Close menu function
function closeMenu() {
  const burger = document.querySelector('.burger');
  burger?.classList.remove("is-active")

  const menu = document.querySelector('.menu')
  menu?.classList.remove('is-open')

  document.body.classList.remove('no-scroll')
}