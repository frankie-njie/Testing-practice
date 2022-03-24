
 const caesar = require('./caesar');


  test(' reversing number base on key 2', () => {
    expect(caesar("hello",5)).toBe("jgnnq");
  });

  test(' test wraping from z-a with key 5', () => {
    expect(caesar("xampo boyz",5)).toBe("cfrut gtde");
  });
