// Apply string methods and display results
function applyStringMethods() {
  const input = document.getElementById("stringInput").value;
  const result = `
    Uppercase: ${input.toUpperCase()}<br>
    Lowercase: ${input.toLowerCase()}<br>
    Length: ${input.length}<br>
    Substring(0, 5): ${input.substring(0, 5)}
  `;
  document.getElementById("stringOutput").innerHTML = result;
}

// Apply array methods and display results
function applyArrayMethods() {
  const input = document.getElementById("arrayInput").value.split(",");
  const result = `
    Original Array: [${input}]<br>
    Sorted: [${input.sort()}]<br>
    Reversed: [${input.reverse()}]<br>
    Length: ${input.length}
  `;
  document.getElementById("arrayOutput").innerHTML = result;
}

// Perform arithmetic operations and display results
function applyOperators() {
  const num1 = parseFloat(document.getElementById("operatorInput1").value);
  const num2 = parseFloat(document.getElementById("operatorInput2").value);
  const result = `
    Addition: ${num1 + num2}<br>
    Subtraction: ${num1 - num2}<br>
    Multiplication: ${num1 * num2}<br>
    Division: ${num2 !== 0 ? num1 / num2 : "Cannot divide by zero"}
  `;
  document.getElementById("operatorOutput").innerHTML = result;
}

// Apply a function to calculate the square of a number
function applyFunctions() {
  const input = parseInt(document.getElementById("functionInput").value);

  // Check if input is valid
  if (isNaN(input)) {
    document.getElementById("functionOutput").innerHTML = "Please enter a valid number.";
    return;
  }

  const square = (num) => num * num;
  const cube = (num) => num * num * num;
  const factorial = function (num) {
    if (num === 0 || num === 1) 
      return 1;
    return num * factorial(num - 1);
  };

  const result = `
    Square of ${input}: ${square(input)}<br>
    Cube of ${input}: ${cube(input)}<br>
    Factorial of ${input}: ${factorial(input)}<br>
  `;
  document.getElementById("functionOutput").innerHTML = result;
}

// Display details of a JavaScript object
function showObjectDetails() {
  const car = {
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    getDetails() {
      return `${this.brand} ${this.model} (${this.year})`;
    }
  };

  const result = `
    Brand: ${car.brand}<br>
    Model: ${car.model}<br>
    Year: ${car.year}<br>
    Details: ${car.getDetails()}
  `;
  document.getElementById("objectOutput").innerHTML = result;
}
