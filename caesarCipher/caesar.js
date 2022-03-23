//create a function caesar
// test wrapping from z to a.
// test for the same case.
// test punctuation!

const dictionary = ["a","b","c",'d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function caesar(string, key) {
  //split the string into an array 
  let str = string.split(''); 
  // for each value of string array add the given key
  let strShifted = str.map(element => {
    //console.log(element);
    let position 
    if (element === ' ' ){
      return position = ' ';
    }

    position = dictionary.findIndex((val) => val === element)
    position += key;
    return dictionary[position]
  }).join('')
  

  console.log(strShifted);

}

module.exports = caesar("hello boys", 2)