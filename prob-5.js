function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        return "Invalid operator";
    }
  
    return result;
  }

//call function
const sum = calculator(2, 4, '+')
console.log("The sum: ", sum);  

const subtraction = calculator(4, 2, '-')
console.log("The subtraction: ", subtraction);

const multiply = calculator(3, 5, '*')
console.log("The multiplication: ", multiply); 

const division = calculator(0, 0, '/')
console.log("The division: ", division);  

const square = calculator(2, 4, '^')
console.log("The power function: ", square); 
