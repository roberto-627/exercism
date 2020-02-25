//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  let ef = 1;
  switch(planet.toLowerCase()){
    case 'mercury':
      ef = 0.2408467;
      return (Math.round((seconds / ((365.25 * ef) * 24 * 60 * 60)) * 100) / 100); 
    case 'venus':
      ef = 0.61519726;
      return (Math.round((seconds / ((365.25 * ef) * 24 * 60 * 60)) * 100) / 100); 
    case 'earth':
      ef = 1.0;
      return (Math.round((seconds / ((365.25 * ef) * 24 * 60 * 60)) * 100) / 100); 
    case 'mars':
      ef = 1.8808158;
      return (Math.round((seconds / ((365.25 * ef) * 24 * 60 * 60)) * 100) / 100); 
    case 'jupiter':
      ef = 11.862615;
      return (Math.round((seconds / ((365.25 * ef) * 24 * 60 * 60)) * 100) / 100); 
    case 'saturn':
      ef = 29.447498;
      return (Math.round((seconds / ((365.25 * ef) * 24 * 60 * 60)) * 100) / 100); 
    case 'uranus':
      ef = 84.016846;
      return (Math.round((seconds / ((365.25 * ef) * 24 * 60 * 60)) * 100) / 100); 
    case 'neptune':
      ef = 164.79132;
      return (Math.round((seconds / ((365.25 * ef) * 24 * 60 * 60)) * 100) / 100); 
    default:
      break;
  }
};
