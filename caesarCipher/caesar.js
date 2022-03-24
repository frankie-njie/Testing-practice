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
    let position 
    //check for empty space in string
    if (element === ' ' ){
      return position = ' ';
    }
    //check for wrapping
    position = dictionary.findIndex((val) => val === element)
    if((position + key) > dictionary.length){
      let result = (position + key)-dictionary.length
     return dictionary[result]
    } else{
      return dictionary[position + key]
    }

    //check for upper case
    
    //position + key > dictionary.length ? console.log( dictionary[(position + key)-dictionary.length]): console.log( dictionary[position + key])
    // position += key;
    // return dictionary[position]
  }).join('')
  
  console.log(strShifted);

}

module.exports = caesar("xampo boyz", 5)
