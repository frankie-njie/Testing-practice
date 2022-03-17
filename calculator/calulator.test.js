const calculator = require('./calculator');

test('test calculator and return',()=>{
  console.log(calculator);
  //expect(data).toEqual({one: 1, two: 2});
  expect(calculator(1,2)).toEqual({add: 3, subtract: -1, multiply: 2, divide: 0.5})
})

test('test calculator and return',()=>{
  console.log(calculator);
  //expect(data).toEqual({one: 1, two: 2});
  expect(calculator(10,10)).toEqual({add: 20, subtract: 0, multiply: 100, divide: 1})
})

