const {
  union,
  unionAll,
  intersection,
  differenceAminusB,
  differenceBminusA
} = require('./arrayOperations');

test('union devuelve los elementos únicos de ambos arrays', () => {
  expect(union([1,2,3], [3,4,5])).toEqual([1,2,3,4,5]);
  expect(union([1,2,3], [1,2,3])).toEqual([1,2,3]);
});

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