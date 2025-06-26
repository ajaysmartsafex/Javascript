const array = [1, 2, 1, 3, 5, 2];

// function frequency(array) {
//     return array.reduce((acc, curEle) => {
//         if (!acc[curEle]) {
//             acc[curEle] = 0;
//         }
//         acc[curEle]++;
//         return acc;
//     }, {});
//     console.log(frequency); 
    
// }
// console.log(Object.entries(frequency(array)));
// console.log(Object.keys(frequency(array)))
// console.log(Object.values(frequency(array)))


function frequency(array) {
    const frequency = array.reduce((acc, curEle) => {
        acc[curEle] = (acc[curEle] || 0) + 1;
        return acc;
    }, {});
        
    console.log(frequency); 
const flatArray = Object.entries(frequency).flat();
console.log(flatArray);
    
}
frequency(array)