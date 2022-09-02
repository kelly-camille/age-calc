// Create an function for each planet
import{Planet} from './../src/age-calc';

 
describe('Planet', () => {
  let murcury;
  beforeEach(() => {
   murcury = new Planet("Murcury", .24, 25, 80)
  });

test('should make a planet class with x planet name x planet year and y earth age', () => {
  expect(murcury.name).toEqual("Murcury");
  expect(murcury.planetYear).toEqual(0.24);
  expect(murcury.personAge).toEqual(25);
});


test('should multiply planet-Year and person-age to calculate planet-age ', () => {
  expect(murcury.ageConversion()).toEqual(6);
});

test('should return the life expectancy in murcury years', () => {
  expect(murcury.lifeConversion()).toEqual(19.2)
});
});