const url = 'http://mylogger.io/log'

function logMessage(message) {
  // Send an HTTP request
  console.log(message);
}

function addNumber(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}
// exporting the function within an object, making it available

module.exports.logMsg = logMessage;
module.exports.add = addNumber;


// you can also rename it by:

// module.exports.banana = logMsg;
