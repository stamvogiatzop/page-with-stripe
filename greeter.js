function greet(name) {
  // Send an HTTP request
  console.log(`hello ${name}`);
}

// exporting just the function

module.exports = greet;
