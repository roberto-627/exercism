//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  let value = '';
  colors = colors.slice(0, 2);

  colors.forEach(color => {
    switch (color.toLowerCase()) {
      case "black":
        value += '0';
        break;
      case "brown":
        value += '1';
        break;
      case "red":
        value += '2';
        break;
      case "orange":
        value += '3';
        break;
      case "yellow":
        value += '4';
        break;
      case "green":
        value += '5';
        break;
      case "blue":
        value += '6';
        break;
      case "violet":
        value += '7';
        break;
      case "grey":
        value += '8';
        break;
      case "white":
        value += '9';
        break;
    }
  });

  return parseInt(value);
};
