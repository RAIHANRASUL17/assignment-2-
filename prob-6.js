// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

let arr = [1, 3, 5, 4, 6, 1, 4, 5, 7, 9]

arr = arr.sort((a, b)=> a-b).reverse();
console.log(arr[1])