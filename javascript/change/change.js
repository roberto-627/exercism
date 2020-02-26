//
// This is only a SKELETON file for the 'Change' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Change {
  calculate(coinArray, target) {
    if(target < 0 ){
      throw new Error("Negative totals are not allowed.");
    }

    if(target < Math.min(...coinArray) && target !== 0){
      throw new Error('The total ' + target + ' cannot be represented in the given currency.');
    }

    let change = [];
    if(target === 0){
      return change;
    }

    if(coinArray.includes(target)){
      change.push(target);
      return change;
    }

    return change;
  }
}
