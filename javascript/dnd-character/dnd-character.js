//
// This is only a SKELETON file for the 'DnD Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (score) => {
  if(score < 3){
    throw new Error('Ability scores must be at least 3');
  }else if(score > 18){
    throw new Error('Ability scores can be at most 18');
  }else{
    return Math.floor((score - 10) / 2);
  }
};

export class Character { 
  constructor(){
    this.characterStrength = Character.rollAbility();
    this.characterDexterity = Character.rollAbility();
    this.characterConstitution = Character.rollAbility();
    this.characterIntelligence = Character.rollAbility();
    this.characterWisdom = Character.rollAbility();
    this.characterCharisma = Character.rollAbility();
  }

  static rollAbility() {
    let max = 6;
    let min = 1;

    let roll = [
      Math.floor(Math.random() * (max - min) + min),
      Math.floor(Math.random() * (max - min) + min),
      Math.floor(Math.random() * (max - min) + min),
      Math.floor(Math.random() * (max - min) + min)
    ];

    roll.splice(roll.indexOf(Math.min(...roll)), 1);

    return roll.reduce(function(a, b){
        return a + b;
      }, 0);
  }

  get strength() {
    return this.characterStrength;
  }

  get dexterity() {
    return this.characterDexterity;
  }

  get constitution() {
    return this.characterConstitution;
  }

  get intelligence() {
    return this.characterIntelligence;
  }

  get wisdom() {
    return this.characterWisdom;
  }

  get charisma() {
    return this.characterCharisma;
  }

  get hitpoints() {
    return (10 + abilityModifier(this.constitution)); 
  }
}
