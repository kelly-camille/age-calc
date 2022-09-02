export class Planet {
  constructor(name, planetYear, personAge, lifeExpect) {
    this.name = name
    this.planetYear = planetYear;
    this.personAge = personAge;
    this.lifeExpect = lifeExpect;
    // this.earthLifeExpectancy = earthLifeExpectancy;
  }
  ageConversion() {
  this.planetAge = this.planetYear * this.personAge;
  return this.planetAge;
  }

  lifeConversion(){
    this.lifeExpectM = this.lifeExpect * this.planetYear
    return this.lifeExpectM
  }

  yearsP(){
    yearsPassedM = planetAge - lifeExpectM;
    return yearsPassedM;
  }
}
