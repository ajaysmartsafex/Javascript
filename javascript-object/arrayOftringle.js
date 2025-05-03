const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getTriangleArray(arr) {
   
    for (let i = 0; i < arr.length; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row += arr[j] + " ";           
        }
        console.log(row);
    }

}
getTriangleArray(arr);