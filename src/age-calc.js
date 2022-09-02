export class Planet {
  constructor(name, planetYear, personAge) {
    this.name = name
    this.planetYear = planetYear;
    this.personAge = personAge;
  }
  ageConversion() {
  this.planetAge = this.planetYear * this.personAge.toFixed(2);
  return this.planetAge;
  }

}