var first = prompt("Hello and Welcome. Please Enter your first name: ");
var last = prompt("Please Enter your last name: ");
var age = prompt("How old are you: ");
var height = prompt("How tall are you: ");
var pet = prompt("What is the name of your pet: ");
alert("Thank You for the information")

if ((first[0] == last[0]) && (height >= 170) && (21 < age < 30) && (pet[(pet.length)- 1] == "y" )){
    console.log("Welcome spy!");
} else {
    console.log("Nothing to see here");
}