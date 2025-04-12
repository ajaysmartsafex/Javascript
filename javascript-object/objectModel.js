// async function fetchApiData () {


//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data = await response.json();
//         return data;
//         // console.log(data);
//     } catch (error) {
//         console.log("error not get the data");
        
//     }
    
// }

// // fetchApiData()

// fetchApiData().then((data) => {
//     console.log(data);
    
// }).catch((error) => {
//     console.log(`data not got yet now ${error}`);
// })



function promiceFun() {
    return new Promise((resolved, rejected) => {
      const success = true;
  
      if (success) {
        // Using async/await to handle the fetch call
        try {
          // Fetch data asynchronously
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())  // Parse the JSON from the response
            .then(data => resolved(data))       // Resolve the promise with the fetched data
            .catch(err => rejected("Error fetching data: " + err)); // Reject if fetch fails
        } catch (e) {
          rejected("Error in try-catch: " + e); // Handle any other errors
        }
      } else {
        rejected("Data not available now");
      }
    });
  }
  
  promiceFun().then((data) => {
    console.log(data);
  }).catch((error) => {
    console.error(error);
  });




//   function promiceFun(){
  
//     const promise = new Promise((resolved, rejected) => {
      
//       const succes = true;
     
//         if (succes) {
//           resolved({name: "ajay"})
//         }else{
//           rejected("data not get now")
//         }
      
//     });
    
//     return promise;
    
//   }
  
//   promiceFun().then((data) => {
//     console.log(data)
//   }).catch((error) => {
//     console.error(error)
//   })


