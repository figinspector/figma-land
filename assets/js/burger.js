export function initBurger() {
  document.body.addEventListener("click", (e) => {
    const evBurger = e.target.closest(".burger");
    if (evBurger) toggleMenu()
  });
}

// Toggle menu function
function toggleMenu() {
  const burger = document.querySelector(".burger");
  burger?.classList.toggle("is-active");

  const menu = document.querySelector(".menu");
  menu?.classList.toggle("is-open");

  document.body.classList.toggle("no-scroll");
}
