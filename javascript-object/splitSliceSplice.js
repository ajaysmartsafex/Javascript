// function firstLetterSmall(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toLowerCase() + word.slice(1))
//     .join(" ");
// }

// let str = "Hello, World!";
// let result = firstLetterSmall(str);
// console.log(result);  // Output: "hello, world!"

let str = "Hello, World!";

let newStr = str
  .split(" ")
  .map((word) => {
    if (word.length < 2) return word; // Skip short words
    return (
      word.charAt(0).toLowerCase() + // First char as-is
      word.charAt(1).toUpperCase() + // Second char uppercased
      word.slice(2) // Rest of the word
    );
  })
  .join(" ");

console.log(newStr); // Output: "HEllo, WOrld!"

// let str = "apple";

// // let arr = str.split("")

// function createObj(str){
// let obj = {}

// let output = ""

// for(let item of str){

//   if(!obj[item]){
//     obj[item] = 1
//   }else{
//     obj[item]++
//   }

// }
// // return obj;
//   // console.log(obj)

// output = Object.entries({...obj}).map(([key, value]) => key + value).join("")

// return output

// }

// console.log(createObj(str))

let fruits = ["apple", "banana", "cherry", "date"];

// Remove 1 item at index 1 ("banana"), and insert "blueberry" and "blackberry"
fruits.splice(1, 1, "blueberry", "blackberry");

console.log(fruits);
// Output: ["apple", "blueberry", "blackberry", "cherry", "date"]
