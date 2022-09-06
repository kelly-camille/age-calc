// Create an function for each planet
import{Planet} from './../src/age-calc';

 
describe('Planet', () => {
  let mercury;
  beforeEach(() => {
   mercury = new Planet("Murcury", .24, 40, 80);
  });

test('should make a planet class with x planet name x planet year and y earth age', () => {
  expect(mercury.name).toEqual("Murcury");
  expect(mercury.planetYear).toEqual(0.24);
  expect(mercury.personAge).toEqual(40);
  expect(mercury.endOfLife).toEqual(80);
});

// planetAge
test('should multiply planet-Year and person-age to calculate planet-age ', () => {
  expect(mercury.ageConversion()).toEqual(9.6);
});
// lifeExpectM
test('should return the life expectancy in murcury years', () => {
  expect(mercury.lifeConversion()).toEqual(19.2);
});
// if age is less than life expectancy
test('should calculate how many years you have left on any planet', () => {
  expect(mercury.yearsCalc()).toEqual(9.6);
});
});

describe('Planet', () => {
  let mercury;
  beforeEach(() => {
   mercury = new Planet("Murcury", .24, 100, 80);
  });

test('should make a planet class with x planet name x planet year and y earth age', () => {
  expect(mercury.name).toEqual("Murcury");
  expect(mercury.planetYear).toEqual(0.24);
  expect(mercury.personAge).toEqual(100);
  expect(mercury.endOfLife).toEqual(80);
});

// planetAge
test('should multiply planet-Year and person-age to calculate planet-age ', () => {
  expect(mercury.ageConversion()).toEqual(24);
});
// lifeExpectM
test('should return the life expectancy in murcury years', () => {
  expect(mercury.lifeConversion()).toEqual(19.2);
});
// if age is greater than life expectancy
test('should calculate how many years you have passed', () => {
  expect(mercury.yearsCalc()).toEqual(4.8);
});
});