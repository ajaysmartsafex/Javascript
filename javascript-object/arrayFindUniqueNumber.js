  
let arr = [1, 2, 2, 3, 4, 4];
  
// let arr = [2, 8, 6, 10, 1, 15, 8, 5];

let uniqueArr = new Set(arr);

console.log(uniqueArr);

let stringChange = arr.join();

console.log(stringChange);

let sortArray = [...new Set(arr)].sort((a, b) => a - b);

let minNumber = sortArray[0];
let maxNumber = sortArray[sortArray.length - 1];
console.log(minNumber);
console.log(maxNumber);

let missingNmber = [];
for (let i = 0; i <= sortArray[sortArray.length - 1]; i++) {
  if (!sortArray.includes(i)) missingNmber.push(i);
}

let missing = [];
for (let i = minNumber; i <= maxNumber; i++) {
  if (!sortedArr.includes(i)) {
    missing.push(i);
  }
}

console.log(missingNmber);
console.log(missing);





  
  // let UniqueArr = new Set(arr);
  
  // console.log([...UniqueArr]);
  
  
  // let RemoveDuplicateNum = arr.filter((items, index) => arr.indexOf(items) === index);
  
  // console.log(RemoveDuplicateNum);
  
  // function UniqueNum(arr){
    
  //   return arr.reduce((acc, curEle) => {
  //     if (!acc.includes(curEle)) {
  //       acc.push(curEle)
  //     }
  //     return acc;
      
  //   },[])
    
   
    
  // }
  
  // console.log(UniqueNum(arr));
  
  
  // function UniqueNumbers(arr){
    
  //   let UniqueN = [];
  //   let DuplicateN = [];
  //   for(let i =0; i < arr.length; i++){
  //     // console.log(arr)
  //     if(UniqueN.indexOf(arr[i]) === -1){
  //       UniqueN.push(arr[i])
  //     }else{
  //       DuplicateN.push(arr[i]);
  //     }
  //   }
    
   
  //  console.log(UniqueN)
  //  console.log(DuplicateN)
  // }
  
  // UniqueNumbers(arr)