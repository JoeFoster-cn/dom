const colors = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const listItems = document.querySelectorAll("li:nth-child(even)");
console.log(listItems);

for (const listItem of listItems) {
    console.log(listItem);
    listItem.style.color = "lightgreen";
}

console.log(listItems);
console.log(listItems.length);