
import React,  {useState} from "react";

const App = ()  => {
const [addLists, setAddLists] = useState([]);
const[inputChange, setInputChange] = useState("")

    const OnChangeHandler = (e) => {
    setInputChange(e.target.value);
}

    const AddInputList = (e) => {
          e.preventDefault();
        if(inputChange.trim() !== ""){           
             setAddLists([...addLists , inputChange]) ;
             setInputChange(" ");
            }        
    }

    const DeleteListItem = (index) => {
        setAddLists(addLists.filter((item, i) =>  i !== index ))
    };
    
  return (      
      <div>
      <div className="bg_white">
          <input type="text"  
              value={inputChange}
              onChange={OnChangeHandler} />
          <button type="button" 
              onClick={AddInputList}
             
              >Add</button>
      </div>  

      <div>
       <ul>
      {addLists?.map((items, index) => (
          
              <li key={index}>
                  {items}
                  <button 
                      style={{ marginLeft: "12px" }} 
                      type="button" 
                      onClick={() => DeleteListItem(index)}>Delete</button>
              </li>
          
          
      ))}
           </ul>
         
      </div>
   </div>
  );
}
export default App;
