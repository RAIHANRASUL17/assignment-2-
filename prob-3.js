// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
let arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];

let e = {}
arr.map((item)=>{
    // console.log(item)
    e[item] = e[item]+1 || 1
})
// console.log(e)

const property = Object.keys(e)
// console.log(property)

const value = Object.values(e)
// console.log(value)

let max = Math.max(...value)
// console.log(max)
let index = value.findIndex((item)=>{ return item === max })
console.log(property[index])


