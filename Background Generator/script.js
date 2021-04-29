var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
const css = document.querySelector(".css");



function background() {
   body.style.background =
      "radial-gradient(circle, "
      + color1.value +
      ", "
      + color2.value + ")";

   const info = `radial-gradient(circle , ${color1.value}, ${color2.value})`;
   body.style.background = info;
   css.textContent = `background: ${info};`;
}

color1.addEventListener("input", background)

color2.addEventListener("input", background)

