const reverse = require('./reverse');

test('takes World and return dlrow', ()=>{
  expect(reverse('world')).toBe('dlrow');
})