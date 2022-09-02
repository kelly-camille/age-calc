export class Planet {
  constructor(name, planetYear, personAge) {
    this.name = name
    this.planetYear = planetYear;
    this.personAge = personAge;
  }
  calculatePlanetAge() {
  this.planetAge = this.planetYear * this.personAge;
  return this.planetAge;
  }
}