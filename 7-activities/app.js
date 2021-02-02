const image = document.querySelector("#cat"); 
const button = document.querySelector("#submit");

button.addEventListener("click", () => {
    if (image.style.display == "none") {
        image.style.display = "block";
        button.textContent = "hide";
    } else {
        image.style.display = "none";
        button.textContent = "show";
    }
});