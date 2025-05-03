const data = [
    { id: 1, type: 'book', title: 'React' },
    { id: 2, type: 'video', title: 'JS Crash Course' },
    { id: 3, type: 'book', title: 'Advanced JS' },
  ];


// Shallow Copy Example

  // const shalloCopyFun =  (project) => {
  //   return [...project]
  // }


  // const projectNew = shalloCopyFun(data);
  //   // console.log(projectNew);
    
  // projectNew[0].type = "note Book";

  // console.log("original data", data);
  // console.log("updated data", projectNew);



  // deep copy function


  const deepCopyFun =  (project) => {
    return structuredClone([...project]);
    // return JSON.parse(JSON.stringify([...project]));   
  }


  const projectNew1 = deepCopyFun(data);
    // console.log(projectNew1);
    
  projectNew1[0].type = "note Book";

  console.log("original data", data);
  console.log("updated data", projectNew1);
  
  


  // const project1 = {
  //   name: "Website Redesign",
  //   tasks: ["Design UI", "Write content", "Deploy"]
  // };


//   const shallowCopyObj = (project) => {
//     return {...project}
//   }

//   const project2 = shallowCopyObj(project1);
 
//   project2.tasks.push("write function")
  
//   console.log(project1);
//   console.log(project2);


// const deepCopyObj = (project) => {
//         return structuredClone({...project});
//       }
    
//       const project2 = deepCopyObj(project1);
     
//       project2.tasks.push("write function")
      
//       console.log(project1);
//       console.log(project2);
  
  