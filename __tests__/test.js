// Create an function for each planet
import{Planet} from './../src/age-calc';

 
describe('Planet', () => {
  let murcury;
  beforeEach(() => {
   murcury = new Planet("Murcury", .24, 30,)
  });

test('should make a planet class with x planet name x planet year and y earth age', () => {
  expect(murcury.name).toEqual("Murcury");
  expect(murcury.planetYear).toEqual(.24);
  expect(murcury.personAge).toEqual(30);
});
});


describe('Planet', () => {
  let murcury;
  beforeEach(() => {
   murcury = new Planet("Murcury", .24, 30,)
  });
test('should multiply planet-Year and person-age to calculate planet-age ', () => {
  expect(murcury.calculatePlanetAge()).toEqual(7.2);
});
});