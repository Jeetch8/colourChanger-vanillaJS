const canvas = document.getElementById("canvas");
const btn = document.getElementById("button");

btn.addEventListener("click", () => onClickHandler());

function onClickHandler() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  canvas.style.backgroundColor = `rgb(${red}, ${green} , ${blue})`;
}
