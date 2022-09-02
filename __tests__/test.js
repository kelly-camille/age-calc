// Create an function for each planet
import{Planet} from './../src/age-calc';

describe('Planet', () => {
  let murcury;
  beforeEach(() => {
  murcury = new Planet(.24)
  });
test('should make a planet class with x year is y earth years', () => {
expect(murcury.year).toEqual(.24)
});
});