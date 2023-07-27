// Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
const string = "hello world"

function applyReverse(string){
    const storeString = string.toLowerCase()
    const reversedString = storeString.split("").reverse().join("")
    console.log(reversedString)
}

// call function
applyReverse(string)