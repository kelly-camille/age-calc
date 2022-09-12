export class Planet {
  constructor(name, planetYear, personAge, endOfLife) {
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
    let lifeExpect = this.endOfLife * this.planetYear;
    return lifeExpect;
  }

  yearsCalc() {
    let yearsPassed = this.endOfLife - this.personAge;
    let planetYearsPassed = yearsPassed * this.planetYear;
    return planetYearsPassed;
  }

  deathCalc() {
    let deathYears = this.personAge - this.endOfLife;
    let planetDeathYears = deathYears * this.planetYear;
    return planetDeathYears;
  }
}

