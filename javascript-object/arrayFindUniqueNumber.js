function TriangleFun (num) {
  
    for(let i = 0; i < num; i++){
      // console.log(i)
      let row = "";
      for(let j = 1; j <= i; j++){
        row += j + "";
      }
      
      console.log(row);
    }
    
  }
  
  TriangleFun(10);
  
  
  
  let arr = [1,2,2,3,4,4];
  
  let UniqueArr = new Set(arr);
  
  console.log([...UniqueArr]);
  
  
  let RemoveDuplicateNum = arr.filter((items, index) => arr.indexOf(items) === index);
  
  console.log(RemoveDuplicateNum);
  
  function UniqueNum(arr){
    
    return arr.reduce((acc, curEle) => {
      if (!acc.includes(curEle)) {
        acc.push(curEle)
      }
      return acc;
      
    },[])
    
   
    
  }
  
  console.log(UniqueNum(arr));
  
  
  function UniqueNumbers(arr){
    
    let UniqueN = [];
    let DuplicateN = [];
    for(let i =0; i < arr.length; i++){
      // console.log(arr)
      if(UniqueN.indexOf(arr[i]) === -1){
        UniqueN.push(arr[i])
      }else{
        DuplicateN.push(arr[i]);
      }
    }
    
   
   console.log(UniqueN)
   console.log(DuplicateN)
  }
  
  UniqueNumbers(arr)