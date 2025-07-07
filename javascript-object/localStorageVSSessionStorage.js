// Feature	                    Local Storage	                                                        Session Storage
// Lifespan	        Data persists even after the browser is closed.                 Data is cleared when the browser tab is closed.
// Storage Scope	Shared across all tabs/windows from the same origin.	        Only available to the tab/window that created it.
// Storage Limit	Around 5–10 MB depending on the browser.	                    Similar limit (~5 MB), but per tab/window.
// Persistence	    Data must be manually cleared via JavaScript or browser.	    Automatically cleared on tab close.
// Use Case	        Long-term data storage (e.g., user preferences, tokens).	    Temporary data (e.g., form inputs, session state).
// Access	        Accessible via window.localStorage.	                            Accessible via window.sessionStorage.
// Data Format	    Stores data as strings (use JSON to store objects).	            Same — stores strings.





// Local Storage
localStorage.setItem("name", "Ajay");
console.log(localStorage.getItem("name")); // "Ajay"

// Session Storage
sessionStorage.setItem("sessionName", "Ajay");
console.log(sessionStorage.getItem("sessionName")); // "Ajay"