let image = document.querySelector("#image");
console.log(image);

const input = document.querySelector("#input");
const button = document.querySelector("#submit");

button.addEventListener("click", () => {
    image.src = input.value;
});