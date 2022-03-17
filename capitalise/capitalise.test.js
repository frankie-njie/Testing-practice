  //capitalise function takes a string and returns a it with first 
  // 1. prompt user to input a string
  // 2. get input from user and store in variable
  // 3. check if the first index of the variable is a capital letter

  const capitalise = require('./capitalise');

  test('takes hello and returns Hello', ()=> {
    expect(capitalise('hello')).toMatch(/H/);
  })