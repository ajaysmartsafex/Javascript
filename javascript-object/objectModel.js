async function fetchApiData () {


    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        return data;
        // console.log(data);
    } catch (error) {
        console.log("error not get the data");
        
    }
    
}

// fetchApiData()

fetchApiData().then((data) => {
    console.log(data);
    
}).catch((error) => {
    console.log(`data not got yet now ${error}`);
})


