// with plane javascript HOC function 

function greet(name) {
    console.log(`Hello, ${name}!`);
}

function withLogging(fn) {
    return function(...args) {
        console.log("Calling function with arguments:", args);
        fn(...args);
        console.log("Function call completed.");
    };
}

const loggedGreet = withLogging(greet);

loggedGreet("Alice");