const initialDisplay = document.querySelector("#initial-display");
const keyCode = document.querySelector("#keycode");

const eventInfo = document.querySelector("eventinfo");
const eventKey = document.querySelector("#eventkey");
const eventCode = document.querySelector("#eventcode");
const eventWhich = document.querySelector("#eventwhich");

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
})


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