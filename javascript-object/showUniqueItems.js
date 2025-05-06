const array  = [1,2,1,3,5,2];

// console.log(DublicateItem = [...new Set(array)]); 


function removeDublicateElement(array) {    
     return array.reduce((acc, CurEle) => {      
      if(!acc.includes(CurEle)){
        acc.push(CurEle)        
      }      
      return acc;      
    }, [])
 }

console.log(removeDublicateElement(array));


//  console.log(array.filter((item, index) => array.indexOf(item) === index)); 