// Create an function for each planet
import{Planet} from './../src/age-calc';

 
describe('Planet', () => {
  let murcury;
  beforeEach(() => {
   murcury = new Planet("Murcury", .24, 82, 80)
  });

test('should make a planet class with x planet name x planet year and y earth age', () => {
  expect(murcury.name).toEqual("Murcury");
  expect(murcury.planetYear).toEqual(0.24);
  expect(murcury.personAge).toEqual(82);
});


test('should multiply planet-Year and person-age to calculate planet-age ', () => {
  expect(murcury.ageConversion()).toEqual(19.68);
});

test('should return the life expectancy in murcury years', () => {
  expect(murcury.lifeConversion()).toEqual(19.2);
});
test('should subtract murcury years from life expectancy to get years passed', () => {
  expect(murcury.yearsP()).toEqual(.48);
});
});
