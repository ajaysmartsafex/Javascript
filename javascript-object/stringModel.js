const nameString = "aaaccvdddryyca";



// function createObject(){

//     let output = {};
//     let stringOutput = "";

//     for (let element of nameString) {
//         // console.log(element);
//         if (output[element]) {
//             output[element]++
//             }else{
//                 output[element] = 1
//             }
        
//     }
//     console.log(output); //output: { a: 3, c: 3, v: 1, d: 3, r: 1, y: 2 }

//     for (const [key, value] of Object.entries(output)) {        
//         const charKey = key;        
//         const charValue = value;      
//         stringOutput += charKey + charValue
// }  
    
// return stringOutput;    
    
// }
// const result = createObject(nameString);

// console.log(result);



// we can use reduce method


//[...] (spread syntax) turns the string into an array of individual characters:


//✅ 1. Using reduce()

// function createObject() {
//   const output = [...nameString].reduce((acc, char) => {
//     acc[char] = (acc[char] || 0) + 1;
//     return acc;
//   }, {});

//   console.log(output); // { a: 3, c: 3, v: 1, d: 3, r: 1, y: 2 }

//   // Optional string output:
//   let stringOutput = '';
//   for (const [key, value] of Object.entries(output)) {
//     stringOutput += key + value;
//   }

//   return stringOutput;
// }

// const result = createObject();
// console.log(result); // "a3c3v1d3r1y2"


// 2. Using Map instead of plain object

// function createObject() {
//     const map = new Map();
  
//     for (const char of nameString) {
//       map.set(char, (map.get(char) || 0) + 1);
//     }
  
//     const output = Object.fromEntries(map);
//     console.log(output); // { a: 3, c: 3, v: 1, d: 3, r: 1, y: 2 }
  
//     let stringOutput = '';
//     for (const [key, value] of map) {
//       stringOutput += key + value;
//     }
  
//     return stringOutput;
//   }
  
//   const result = createObject();
//   console.log(result); // "a3c3v1d3r1y2"
  

//✅ 3. One-liner with chaining (advanced & compact)



const result = Object.entries(
  [...nameString].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {})
).map(([k, v]) => k + v).join('');

console.log(result); // "a3c3v1d3r1y2"



let str = "bkjhkhcnjkndkjkhwfe";

function frequency(str) {
  const frequencyItem = {};

  for (let char of str) {
    frequencyItem[char] = (frequencyItem[char] || 0) + 1;
  }

  console.log(frequencyItem);

  let stringOutput = '';

  for (let [k, v] of Object.entries(frequencyItem)) {
    stringOutput += k + v;
  }

  console.log(stringOutput);
}

frequency(str);
