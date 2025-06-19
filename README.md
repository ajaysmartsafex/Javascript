# Javascript
javascript coding


<!-- # Summary Table:
# Goal	            Method	                Example
# Characters	    split("")	          "abc" → ['a','b','c']
# Characters	    [...str]	          "abc" → ['a','b','c']
# Words by space	split(" ")	    "a b c" → ['a','b','c']
# By comma	        split(",")	          "a,b,c" → ['a','b','c']
# With regex	    split(/\s+/)	      Multiple spaces → words
# With map function	Array.from(str, f)	Custom mapped array -->



<!-- A Higher-Order Function is:

A function that takes another function as input and/or returns a function.

A Higher-Order Component (HOC) in React is:

A function that takes a component and returns a new component with enhanced behavior. -->









<!--    
What are Web Vitals (LCP, FID, CLS)? And how are they applied in the real world?

Web Vitals are standardized metrics to measure the quality of the navigation inside a website:
LCP (Largest Contentful Paint) - LCP measures the time it takes for the largest visible content element to be fully loaded and rendered. A LCP is considered good when it takes less than 2.5 seconds.
FID (First Input Delay) - FID measures the time it takes for the browser to respond to the user's first interaction. A FID is considered good when it takes less than 100 milliseconds.
CLS (Cumulative Layout Shift) - CLS measures the visual stability of a page by calculating the sum of layout shift scores for all unexpected layout shifts during the entire lifespan of the page.                                                                  
-->


<!-- 
What are the strategies we can use to optimize the performance of web applications?

CDNs, GraphQL (maybe) to reduce overfetching, improve backend performance, use SSR and/or SSG, lazy loading for loading assets only when it's needed, minimize and compress HTML, CSS and JS files, and optimize images by compressing and resizing them.


1. ✅ let and const (Block-scoped variables)
2. ✅ Arrow Functions
3. ✅ Template Literals (Backticks ``)
4. ✅ Default Parameters
5. ✅ Destructuring (Arrays & Objects)
6. ✅ Spread (...) and Rest Parameters
7. ✅ Enhanced Object Literals
Shorthand for assigning variables to object properties

javascript
Copy
Edit
const name = "Sara";
const user = {
  name,
  greet() {
    console.log("Hello");
  }
};

8. ✅ Classes
Syntactic sugar over prototype-based OOP

javascript
Copy
Edit
class Person {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
const p = new Person("Tom");
p.speak(); // Hi, I'm Tom

9. ✅ Promises
For handling asynchronous operations

javascript
Copy
Edit
const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });

fetchData().then(console.log); // "Data loaded"

10. ✅ import and export (Modules)
Used to split code into separate files

javascript
Copy
Edit
// In math.js
export const add = (a, b) => a + b;

// In main.js
import { add } from './math.js';
console.log(add(2, 3));

Feature	Description
Map, Set	New collection types
for...of loop	Easier iteration over arrays
Symbol	Unique and immutable values
Object.assign()	Copy object properties
String.includes()	Checks if string contains substring -->



<!-- Use redux libeary and connect with react App -->

<!-- https://www.youtube.com/watch?v=oqkZUD41378 -->