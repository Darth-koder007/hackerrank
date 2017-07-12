import { expect } from 'chai';
import { ArrayRotation } from '../../2 Data Structures/3 Rotation Array/script';

describe('Perform Array Rotation towards', () => {
  const testArr = [1,2,3,4,5];
  const testArr2 = [111,222,333,444,555];
  const testArr3 = [1,2,3,4,5,6,7,8,9];

  describe('left', () => {

    it('should rotate to left by 3 index', () => {
      const arrayRotation = new ArrayRotation(testArr);
      const expectedArray = [4,5,1,2,3];

      expect(arrayRotation.rotate('3', 'left')).to.be.an('array').to.deep.equal(expectedArray);
    });

    it('should rotate to left by 31 index', () => {
      const arrayRotation = new ArrayRotation(testArr2);
      const expectedArray = [222,333,444,555,111];

      expect(arrayRotation.rotate('31', 'left')).to.be.an('array').to.deep.equal(expectedArray);
    });

    it('should not rotate at all', () => {
      const arrayRotation = new ArrayRotation(testArr);
      const expectedArray = testArr;

      expect(arrayRotation.rotate('0', 'left')).to.be.an('array').to.deep.equal(expectedArray);
    });
  });

  describe('right', () => {

    it('should rotate to right by 3 index', () => {
      const arrayRotation = new ArrayRotation(testArr);
      const expectedArray = [3,4,5,1,2];

      expect(arrayRotation.rotate('3', 'right')).to.be.an('array').to.deep.equal(expectedArray);
    });

    it('should rotate to right by 30 index', () => {
      const arrayRotation = new ArrayRotation(testArr2);
      const expectedArray = [555,111,222,333,444];

      expect(arrayRotation.rotate('31', 'right')).to.be.an('array').to.deep.equal(expectedArray);
    });

    it('should not rotate at all', () => {
      const arrayRotation = new ArrayRotation(testArr);
      const expectedArray = testArr;

      expect(arrayRotation.rotate('0', 'right')).to.be.an('array').to.deep.equal(expectedArray);
    });
  });
});
