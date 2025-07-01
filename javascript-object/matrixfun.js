let output = "";
for (let i = 0; i <= 10; i++) {
  output += i + " ";
  if ((i + 1) % 4 === 0) output += "\n";
}
console.log(output);



function printMatrixUpTo(n, cols) {
    let output = "";
    for (let i = 0; i <= n; i++) {
      output += i + " ";
      if ((i + 1) % cols === 0) {
        output = output.trim() + "\n"; // Trim and add newline
      }
    }
    console.log(output.trim()); // Trim final newline
  }
  
  // Example usage:
  printMatrixUpTo(10, 3);
