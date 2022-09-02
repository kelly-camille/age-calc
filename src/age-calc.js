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

export class Earth

  // lifeExpectancyConversion() {
  //   this.planetExpectancy = this.earthLifeExpectancy * this.planetYear;
  //   return this.planetExpectancy; 
  // }
}

// if murcury.age > 19.2
//   yearsPastExpected = murcury.age - lifeExpectancy