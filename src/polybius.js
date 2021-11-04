// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // I don't really need anything here

  function polybius(input, encode = true) {

    const square = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];

    // encode mode
    if (encode) {
      let characters = input.split("");
      let fixedArray = characters.map((string) => {
        let lowCase = string.toLowerCase();
        if(lowCase === "i" || lowCase === "j") {
          return "(i/j)";
        }
        return lowCase;
      });

      //time to find coordinates on the polybius square
      let xCoor = [];
      let yCoor = fixedArray.map((letter) => {
        for (let i = 0; i < square.length; i++) {
          const row = square[i];
          if (row.find((alpha) => alpha === letter)) {
            xCoor.push(i + 1);
            return row.indexOf(letter) + 1;
          }
        }
      });

      //adds x-coordinates and y-coordinates together so X/X pairs are in sequence
      result = xCoor.reduce((acc, xValue, index) => {
        let pair = `${yCoor[index]}${xValue}`;
        if(pair === "65") {
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
    }

    //decode mode for the win!!!
    if (!encode) {
      let spaces = input.replace(" ", 65);
      if (spaces.length % 2 !== 0) return false;
      let coordinates = spaces.match(/..?/g);
      result = coordinates.map((yx) => {
        let rowIndex = yx.split("")[1] - 1;
        let columnIndex = yx.split("")[0] - 1;
        return square[rowIndex][columnIndex];
      });
    }
    // final result, SURVEY SAYS!!!
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };