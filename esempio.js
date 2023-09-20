//exercise 1
//Write a node.js program to replace two or more a's with the letter b on the given string using Regular Expression.

stringa = "saalve"

console.log(stringa.replace(new RegExp("[Aa]{2,}"), "Ciao"));


//exercise 2
//There is a given object, write node.js program to print the given object's properties, delete the second property and get length of the object.
var user = {
first_name: "John",
last_name: "Smith",
age: "38",
department: "Software"
};

//object property
console.log(user)

//delete second property
delete user.last_name

//len of the object
console.log(Object.keys(user).length);
