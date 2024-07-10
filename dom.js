const test = document.getElementById("test");
test.innerHTML = "My name is Afeloh"; 

//creating new elements

const newItem = document.createElement("h1");
const headingTitle = document.createTextNode("This is a new element");


newItem.appendChild(headingTitle);

const printToDom = document.getElementById("newElement");
printToDom.appendChild(newItem);

//ASSIGNMENT
// - Create new element that prints out your favorite dish, pets, colors
// - Make sure to push this code in Github  


const food = document.createElement("h2");
const foodtitle = document.createTextNode("My favorite: biriani, bull dog and blue");

food.appendChild(foodtitle);

const printToDom2 = document.getElementById("food");
printToDom2.appendChild(food);
