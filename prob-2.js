// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
const num = [2, -5, 10, -3, 7];

function sumOfNum() {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    const item = num[i];
    if (item >= 0) {
      sum = sum + item;
    //   console.log(sum);
    }
  }
  return sum
}

// call function
const totalForReturn = sumOfNum();
console.log("The total value: ", totalForReturn)
