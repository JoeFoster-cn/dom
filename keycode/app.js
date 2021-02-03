const initialDisplay = document.querySelector("#initial-display");
const keyCode = document.querySelector("#keycode");

const eventInfo = document.querySelector("eventinfo");
const eventKey = document.querySelector("#eventkey");
const eventCode = document.querySelector("#eventcode");
const eventWhich = document.querySelector("#eventwhich");
const keyText = document.querySelector("#keytext");
const codeText = document.querySelector("#codetext");
const whichText = document.querySelector("#whichtext");

//const location = KeyboardEvent.location;

//hide event info when page opens


//hide initial text on keydown
window.addEventListener("keydown", (event) => {
    initialDisplay.style.display = "none"; 
});

window.addEventListener("keyup", (event) => {
if (initialDisplay.style.display == "none");
    keyCode.style.display = "block";
    eventKey.style.display = "block";
    eventCode.style.display = "block";
    eventWhich.style.display = "block";
    keyText.style.display = "block";
    codeText.style.display = "block";
    whichText.style.display = "block";
})

//event parameter is equal to whatever key is pressed on keydown
//event stores the information relating to the key thats pressed
window.addEventListener("keydown", (event) => {
    document.querySelector("#keycode").innerHTML = event.keyCode;
});

window.addEventListener("keydown", (event) => {
    document.querySelector("#eventkey").innerHTML = event.key;
});

window.addEventListener("keydown", (event) => {
    document.querySelector("#eventcode").innerHTML = event.code;
});

window.addEventListener("keydown", (event) => {
    document.querySelector("#eventwhich").innerHTML = event.keyCode;
});

// function input(event) {
//     console.log("input.value" + KeyboardEevent.location);
// }
//initialDisplay.addEventListener("keypress", event => {
//    event.target.textContent = event.target.textContent.hide();
//    console.log(event);
//})


//initialDisplay.addEventListener("keypress", event => {
//    console.log(event);
//})



// window.addEventListener("keydown", function(event) {
//     const p = document.createElement("p");
//     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//     document.querySelector("#initial-display").appendChild(p);
//   }, true);


//function keyEvent(event) {
//    console.log("KeyboardEvent" + event.location);
//}