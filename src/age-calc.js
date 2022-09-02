export class Planet {
  constructor(name, planetYear, personAge,) {
    this.name = name
    this.planetYear = planetYear;
    this.personAge = personAge;
    // this.earthLifeExpectancy = earthLifeExpectancy;
  }
  ageConversion() {
  this.planetAge = this.planetYear * this.personAge;
  return this.planetAge;
  }



}
