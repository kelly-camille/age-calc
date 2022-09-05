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
  yearsCalc() {
    let earthYearsLeft = this.endOfLife - this.personAge;
    let mercuryYearsLeft = earthYearsLeft * this.planetYear;
    let yearsPassed = this.personAge - this.endOfLife;
    let mercuryYearsPassed = yearsPassed * this.planetYear;
    if (this.personAge > this.endOfLife) {
    return mercuryYearsPassed;
    } else {
    return mercuryYearsLeft;
  }
  }
}
  // yearsPassed() {
  //   let yearsPassed = this.personAge - this.endOfLife;
  //   let mercuryYearsPassed = yearsPassed * this.planetYear;
  //   return mercuryYearsPassed;
  // }



  
  // yearsLeft() {
  //   let earthYearsLeft = this.endOfLife - this.personAge;
  //   let mercuryYearsLeft = earthYearsLeft * this.planetYear;
  //   return mercuryYearsLeft;
  // }

  // yearsPassed() {
  //   let yearsPassed = this.personAge - this.endOfLife;
  //   let mercuryYearsPassed = yearsPassed * this.planetYear;
  //   return mercuryYearsPassed;
  // }


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
// 