document.addEventListener("DOMContentLoaded", () => {


let canvas = document.getElementById("canvas");
let chosenColor = "white";

for(let i = 0; i < 256 ; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel")
  canvas.appendChild(pixel);
}

canvas.addEventListener("mouseover", (event) => {
  
  console.log("click occurred on", event.target);
  event.target.id = chosenColor;

})


let palette = document.getElementById("palette");

palette.addEventListener("click", (event) => {
  console.log("click occurred on", event.target);
  chosenColor = event.target.id;
})


})
