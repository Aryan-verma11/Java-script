
function getRandomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
document.querySelectorAll(".box").forEach(e=>e.style.backgroundColor=getRandomRGB());
document.body.style.backgroundColor = getRandomRGB();