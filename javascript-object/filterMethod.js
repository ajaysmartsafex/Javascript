const data = [
    { id: 1, type: 'book', title: 'React' },
    { id: 2, type: 'video', title: 'JS Crash Course' },
    { id: 3, type: 'book', title: 'Advanced JS' },
  ];
   
  //  WAP name it "groupByKey(arr, key)" to make below output
   
  // {
  //   book: [
  //     { id: 1, type: 'book', title: 'React' },
  //     { id: 3, type: 'book', title:     'Advanced JS' }
  //   ],
  //   video: [
  //     { id: 2, type: 'video', title: 'JS Crash Course' }
  //   ]
  // }.
  
  // first Method filter
  
  // function filterData(data){
  
  //   let book = data.filter((item) => item.type === "book")
  //   let video = data.filter((item) => item.type === "video")
    
  //   return {book, video};
    
  // }
  
  // const result = filterData(data);
  // console.log(result)



  // first Method reduce

  function filterData(data){
 
    return data.reduce((acc, curEle) => {       
        if(!acc[curEle.type]){
            acc[curEle.type] = [];            
        }
        acc[curEle.type].push(curEle);        
        return acc;        
    },{})
    
}
 
const result = filterData(data);
console.log(result)



// third method groupByKey with reduce


// function groupByKey(arr, key) {
//     return arr.reduce((result, item) => {
//       const group = item[key];
//       if (!result[group]) {
//         result[group] = [];
//       }
//       result[group].push(item);
//       return result;
//     }, {});
//   }


//   const grouped = groupByKey(data, 'type');
// console.log(grouped);