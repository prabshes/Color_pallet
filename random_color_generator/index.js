// Whole-script strict mode syntax
"use strict";

// Random number(1 - 255) function
const randomNumberFunc = () => Math.trunc(Math.random() * 255) + 1;

// Random Color Function In rgb format
const randomColor = function () {
  let r, g, b;

  r = randomNumberFunc();
  g = randomNumberFunc();
  b = randomNumberFunc();

  const randomColorRgb = `rgb(${r},${g},${b})`;
  // console.log(randomColorRgb);
  return randomColorRgb;
};
randomColor();

const rgbToHex = (rgb) =>
  "#" +
  rgb
    .slice(4, -1)
    .split(",")
    .map((x) => (+x).toString(16).padStart(2, 0))
    .join("")
    .toUpperCase();
// console.log(rgbToHex(randomColor()));

const allBtns = document.querySelectorAll(".btn");
const colorBox = document.querySelectorAll(".color_box");
// console.log(allBtns);
allBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // console.log("button was clicked ");

    const currentColor = randomColor();

    btn.previousElementSibling.style.backgroundColor = `${currentColor}`;

    btn.previousElementSibling.children[0].innerText = `${rgbToHex(
      currentColor
    )}`;

    // console.log(btn.previousElementSibling.children);
    btn.nextElementSibling.textContent = `Color: ${currentColor}`;
  });
});
