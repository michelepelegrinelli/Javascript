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


//exercise 3
//Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function customError(value){

    if(!Number.isInteger(value)){
        console.log("The value is not an integer");
    }else{
        console.log("The value is an Integer")
    }
}

//test the function
customError(3)


//exercise 4
//Write a JavaScript function that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.

function HandleError(){

    try {
        const undefinedObject = undefined;
        console.log(undefinedObject.property); // Accessing property of undefined object
      } catch (error) {
        if (error instanceof TypeError) 
        {
          console.log('Error: Property access to undefined object');
        } 
        else 
        {
          throw error; // Rethrow the error if it's not a TypeError
        }
      }
}

//function call
HandleError()

//exercise 5 
//Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.

function checkNumbers(a, b){
     
    if(b==0){
       console.error("the second value is zero, try again")
    }else{
        console.log("the second number is ok")
    }
}

//function call
checkNumbers(2,1)

//exercise 6
//Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is negative.

function checkIfNegative(num){
    if(num<0){
        console.error("the value is negative")
    }else{
        console.log("the value is ok")
    }
}

//function call
checkIfNegative(-2)

//exercise 7
//Write a JavaScript function that takes an array as a parameter and throws a custom 'Error' if the array is empty.

function checkIfEmpty(arr){
    if(arr.length==0){
        console.error("the array is empty, try again")
    }else{
        console.log("the array is good")
    }
}

//function call
checkIfEmpty([4])

//exercise 8
//Write a JavaScript program to calculate the factorial of a number.  In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

function ricursive(num){
   if(num==1){
    return 1
   }
    return num*ricursive(num-1)
}

console.log(ricursive(5))


//next