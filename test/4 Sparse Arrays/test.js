import { expect } from 'chai';
import { SparseArray } from '../../2 Data Structures/4 Sparse Arrays/script';

describe('Match array occurence:', () => {

  describe('Check for array occcurence', () => {

    it('should have 0 occurence for all', () => {
      const mainArray = ['ab','bc','cz','asdasd','asdfasd','cz','asdfasd'];
      const sparseArray = new SparseArray(mainArray);
      const matchArray = ['a','q','da','za'];
      const expectedArray = [0,0,0,0];

      expect(sparseArray.matchArray(matchArray)).to.be.an('array').to.deep.equal(expectedArray);
    });

    it('should have 2 occurence', () => {
      const mainArray = ['ab','bc','cz','asdasd','asdfasd','cz','asdfasd'];
      const sparseArray = new SparseArray(mainArray);
      const matchArray = ['ab','cz','asdasd','z'];
      const expectedArray = [1,2,1,0,];

      expect(sparseArray.matchArray(matchArray)).to.be.an('array').to.deep.equal(expectedArray);
    });

    it('should have 2 occurence for all', () => {
      const mainArray = ['ab','bc','cz','asdasd','asdfasd','cz','asdfasd','ab','asdasd','bc'];
      const sparseArray = new SparseArray(mainArray);
      const matchArray = ['ab','cz','asdasd','bc','asdfasd'];
      const expectedArray = [2,2,2,2,2];

      expect(sparseArray.matchArray(matchArray)).to.be.an('array').to.deep.equal(expectedArray);
    });

    it('should have 1 occurence for all', () => {
      const mainArray = ['ab','bc','cz','asdasd','asdfasd'];
      const sparseArray = new SparseArray(mainArray);
      const matchArray = ['ab','bc','cz','asdasd','asdfasd'];
      const expectedArray = [1,1,1,1,1];

      expect(sparseArray.matchArray(matchArray)).to.be.an('array').to.deep.equal(expectedArray);
    });
  });
});
