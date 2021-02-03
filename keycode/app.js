const initialDisplay = document.querySelector("#initial-display");

//initialDisplay.addEventListener("keypress", event => {
//    event.target.textContent = event.target.textContent.hide();
//    console.log(event);
//})


//initialDisplay.addEventListener("keypress", event => {
//    console.log(event);
//})

window.addEventListener("keydown", (event) => {
        initialDisplay.style.display = "none"; 
 //       initialDisplay.textContent = "show";
 //       list.style.display = "block";
    
});

// window.addEventListener("keydown", function(event) {
//     const p = document.createElement("p");
//     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
//     document.querySelector("#initial-display").appendChild(p);
//   }, true);


//function keyEvent(event) {
//    console.log("KeyboardEvent" + event.location);
//}