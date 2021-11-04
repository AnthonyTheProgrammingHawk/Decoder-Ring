
const caesarModule = (function () {
  // helper function
 function toUnitCode(characters) {
   return characters.map((character) => {
     const unitcode = character.toLowerCase().charCodeAt();
     return unitcode >= 97 && unitcode <= 122 ? unitcode : character;
   });
 }

  function caesar(input, shift, encode = true) {
    // constraint for shift
    if (shift < - 25 || shift > 25 || !shift) {
      return false;
    }
    // super fast and easy decoding mode
    if (encode === false) {
      shift *= -1;
    }
    
    let characters = input.split("");
    let numbers = toUnitCode(characters);

    // shifts only valid characters
    let shifted = numbers.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });

    // enables wrap around for letters that to past 'a' or 'z'
    let correctNumbers = shifted.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });

    //converst back to a string, alright alright alright!!!
    let output = correctNumbers.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return output.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
