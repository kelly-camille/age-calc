export class Planet {
  constructor(name, planetYear, personAge, endOfLife ) {
    this.name = name;
    this.planetYear = planetYear;
    this.personAge = personAge;
    this.endOfLife = endOfLife;
    

    // this.earthLifeExpectancy = earthLifeExpectancy;
  }
  ageConversion() {
    let planetAge = this.planetYear * this.personAge;
    return planetAge;
  }

  lifeConversion() {
    let lifeExpectM = this.endOfLife * this.planetYear;
    return lifeExpectM;
  }

  yearsLeft() {
    let earthYearsLeft = this.endOfLife - this.personAge;
    let mercuryYearsLeft = earthYearsLeft * this.planetYear;
    return mercuryYearsLeft;
  }


}
  // yearsP() {
  //   this.yearsPassed = this.planetAge - this.lifeExpectM;
  //   return this.yearsPassed
  // }

// attackRoll() {
//   let damage = rollDice()
//   let finalDamage = damage + this.attack;
//   return finalDamage
// }
// defend(attackDamage) {
//   let finalDamage = attackDamage - this.defense;
//   return finalDamage
// }
// hpLoss(finalDamage) {
//   this.hp -= finalDamage
//   return this.hp;
// }