function initAll() {
  import("./burger.js").then(m => m.initBurger());
  import("./menu.js").then(m => m.initMenu());
  // додавати інші тут
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;

let loadedCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedCount++;
  if (loadedCount === totalPartials) initAll();
});
