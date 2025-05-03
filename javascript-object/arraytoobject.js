const array = [1, 2, 1, 3, 5, 2];

// function frequency(array) {
//     const frequency = array.reduce((acc, curEle) => {
//         if (!acc[curEle]) {
//             acc[curEle] = 0;
//         }
//         acc[curEle]++;
//         return acc;
//     }, {});
//     console.log(frequency); 
    
// }
// frequency(array)


function frequency(array) {
    const frequency = array.reduce((acc, curEle) => { 
        acc[curEle] = (acc[curEle] || 0) + 1; 
        return acc;
    }, {});
        
    console.log(frequency); 
    
}
frequency(array)