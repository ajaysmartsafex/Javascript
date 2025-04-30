
import React,  {useState} from "react";

const App = ()  => {
const [addLists, setAddLists] = useState([]);
const [editIndex, setEditIndex] = useState(null);
const[inputChange, setInputChange] = useState("")

    const OnChangeHandler = (e) => {
        setInputChange(e.target.value);
    }

    const AddInputList = (e) => {
          e.preventDefault();
        const trimmedInput = inputChange.trim();
        if (trimmedInput === "") return;
        if(editIndex !== null){  
            const updatedList = [...addLists];
             updatedList[editIndex] = trimmedInput;
             setAddLists(updatedList);
             setEditIndex(null);
            } else {
    // Add mode
    setAddLists([...addLists, trimmedInput]);
  } 
         setInputChange("");
    }

    const EditListItem = (index) => {
       setInputChange(addLists[index]);
        setEditIndex(index)
    }

    const DeleteListItem = (index) => {
        setAddLists(addLists.filter((item, i) =>  i !== index ))
    };
    
  return (      
      <>
      <div className="bg_white">
          <input type="text"  
              value={inputChange}
              onChange={OnChangeHandler} />
        <button type="submit" 
              onClick={AddInputList}>
            {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>  

      <div>
       <ul>
        {addLists?.map((items, index) => (          
              <li key={index}>
                  {items}
                  <button 
                      style={{ marginLeft: "12px" }} 
                      type="button" 
                      onClick={() => DeleteListItem(index)}>Delete
                  </button>
                  <button 
                      style={{ marginLeft: "12px" }} 
                      type="submit" 
                      onClick={() => EditListItem(index)}>Edit
                  </button>
              </li>          
        ))}
           </ul>         
      </div>
   </>
  );
}
export default App;
