const {
  union,
  unionAll,
  intersection,
  differenceAminusB,
  differenceBminusA
} = require('./arrayOperations');

function randomIntArray(length, min = 1, max = 50) {
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

const arrA = randomIntArray(20);
const arrB = randomIntArray(20);

console.log('Array A:', arrA);
console.log('Array B:', arrB);
console.log('\nUnion:', union(arrA, arrB));
console.log('\nUnion All:', unionAll(arrA, arrB));
console.log('Intersección:', intersection(arrA, arrB));
console.log('Diferencia A - B:', differenceAminusB(arrA, arrB));
console.log('Diferencia B - A:', differenceBminusA(arrA, arrB)); 