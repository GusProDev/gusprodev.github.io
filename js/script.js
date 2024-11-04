// JavaScript to move the glow cursor with the mouse
document.addEventListener("mousemove", (e) => {
  const body = document.querySelector("body");
  body.style.setProperty("--cursor-x", e.clientX + "px");
  body.style.setProperty("--cursor-y", e.clientY + "px");
  body.classList.add("add-glow");
});
