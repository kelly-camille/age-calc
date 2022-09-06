export class Planet {
  constructor(name, planetYear, personAge, endOfLife ) {
    this.name = name;
    this.planetYear = planetYear;
    this.personAge = personAge;
    this.endOfLife = endOfLife;
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