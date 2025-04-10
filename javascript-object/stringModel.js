const nameString = "ajjddjhdhdjhlkdshj"

function compression(nameString) {
    const objectOfString = {};

    for (let i = 0; i < nameString.length; i++) {

        const element = nameString[i];
        // console.log(element);
        if(element[i] === element[i + 1]){
            element[i]++          
        }
        
    }
    console.log(objectOfString);       
    
}

compression(nameString);