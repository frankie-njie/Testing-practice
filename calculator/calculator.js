function calculator (a, b){
  let add = a + b;
  let subtract = a - b;
  let multiply = a * b;
  let divide = a / b;

  //console.log({add, subtract, multiply, divide});
  return {add, subtract, multiply, divide}
}

module.exports = calculator
