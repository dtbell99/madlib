const assert = require('assert');
const types = require('../types.json');

describe('types', () => {
  it('should return correct adjective array', () => {
    const expectedArray = [
      'happy', 'sad', 'fat', 'skinny', 'tall', 'short'
    ];
    const actualArray = types.adjective;
    assert.deepStrictEqual(actualArray, expectedArray);
  });

  it('should return correct nationality array', () => {
    const expectedArray = [
      'American', 'Australian', 'Belgian', 'Canadian', 'Chinese', 'French', 'German', 'Italian', 'Mexican', 'Swedish'
    ];
    const actualArray = types.nationality;
    assert.deepStrictEqual(actualArray, expectedArray);
  });

  it('should return correct person array', () => {
    const expectedArray = [
      'David Bell', 'Bob Smith'
    ];
    const actualArray = types.person;
    assert.deepStrictEqual(actualArray, expectedArray);
  });

  it('should return correct noun array', () => {
    const expectedArray = [
      'ball', 'toilet', 'bike'
    ];
    const actualArray = types.noun;
    assert.deepStrictEqual(actualArray, expectedArray);
  });

  it('should return correct pluralnoun array', () => {
    const expectedArray = [
      'french fries', 'soccer balls', 'shoes', 'dogs'
    ];
    const actualArray = types.pluralnoun;
    assert.deepStrictEqual(actualArray, expectedArray);
  });

  it('should return correct number array', () => {
    const expectedArray = [
      '1', '10', '25', '100'
    ];
    const actualArray = types.number;
    assert.deepStrictEqual(actualArray, expectedArray);
  });

  it('should return correct shapes array', () => {
    const expectedArray = [
      'squares', 'triangles', 'circles'
    ];
    const actualArray = types.shapes;
    assert.deepStrictEqual(actualArray, expectedArray);
  });

  it('should return correct food array', () => {
    const expectedArray = [
      'turkey', 'chicken', 'oatmeal'
    ];
    const actualArray = types.food;
    assert.deepStrictEqual(actualArray, expectedArray);
  });
});
