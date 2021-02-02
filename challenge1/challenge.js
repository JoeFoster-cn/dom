//cycle over the list items and apply colors from the array called colours

//creating variable called colours with list of colours
const colours = ['red', 'blue', 'yellow', 'blue'];
const listItems = document.querySelectorAll("li");
// creating variable called listItems that contains all of the "li" tags in the HTML doc


//index = 0, so if index is less than the length of the list (Which is 6), then add another
// listItems variable targets the HTML li tags, [i] is the index (which number in the list) listItems[i] and colours [i] allow the colours from first array to be 
//added to the items in the second array
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = colours[i];
    
}



