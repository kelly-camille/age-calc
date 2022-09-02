// Create an function for each planet
import{Planet} from './../src/age-calc';

describe('Planet', () => {
  let murcury;
  beforeEach(() => {
   murcury = new Planet("Murcury", .24, 1)
  });

test('should make a planet class with x planet year and y earth years', () => {
  expect(murcury.name).toEqual("Murcury")
  expect(murcury.planetYear).toEqual(.24);
  expect(murcury.earthYear).toEqual(1);
});
});