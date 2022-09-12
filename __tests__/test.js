import{Planet} from './../src/planet';

 
describe('Planet', () => {
  let mercury;
  beforeEach(() => {
   mercury = new Planet("Test", .24, 40, 80);
  });

test('should make a planet class with x planet name x planet year and y earth age', () => {
  expect(mercury.name).toEqual("Test");
  expect(mercury.planetYear).toEqual(0.24);
  expect(mercury.personAge).toEqual(40);
  expect(mercury.endOfLife).toEqual(80);
});

test('should multiply planet-Year and person-age to calculate planet-age ', () => {
  expect(mercury.ageConversion()).toEqual(9.6);
});

test('should return the life expectancy in murcury years', () => {
  expect(mercury.lifeConversion()).toEqual(19.2);
});

test('should calculate how many years you have left on any planet', () => {
  expect(mercury.yearsCalc()).toEqual(9.6);
});

test('should calculate how many years you have passed in Mercury years', () => {
  mercury = new Planet("Mercury", .24, 100, 80);
  expect(mercury.deathCalc()).toEqual(4.8);
});
});