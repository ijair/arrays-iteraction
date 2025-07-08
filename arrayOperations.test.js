const {
  unionAll,
  intersection,
  differenceAminusB,
  differenceBminusA,
  arrayMatch
} = require('./arrayOperations');

test('unionAll une dos arrays permitiendo duplicados', () => {
  expect(unionAll([1,2,3], [3,4,5])).toEqual([1,2,3,3,4,5]);
});

test('intersection devuelve los elementos comunes considerando duplicados mínimos', () => {
  expect(intersection([1,2,2,3], [2,2,4])).toEqual([2,2]);
  expect(intersection([1,2,3], [4,5,6])).toEqual([]);
});

test('differenceAminusB devuelve los elementos de A que no están en B', () => {
  expect(differenceAminusB([1,2,2,3], [2,4])).toEqual([1,2,3]);
  expect(differenceAminusB([1,2,3], [1,2,3])).toEqual([]);
});

test('differenceBminusA devuelve los elementos de B que no están en A', () => {
  expect(differenceBminusA([1,2,2,3], [2,2,4])).toEqual([4]);
  expect(differenceBminusA([1,2,3], [1,2,3])).toEqual([]);
});

test('arrayMatch compara si dos arrays son exactamente iguales', () => {
  expect(arrayMatch([1,2,3], [1,2,3])).toBe(true);
  expect(arrayMatch([1,2,3], [3,2,1])).toBe(false);
  expect(arrayMatch([1,2,3], [1,2,3,4])).toBe(false);
  expect(arrayMatch([], [])).toBe(true);
}); 