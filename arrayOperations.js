// Funciones para operaciones sobre arrays de enteros

// Unión (union all, permite duplicados)
function unionAll(arr1, arr2) {
  return arr1.concat(arr2);
}

// Intersección (elementos que están en ambos arrays, considerando duplicados mínimos)
function intersection(arr1, arr2) {
  const arr2Copy = [...arr2];
  return arr1.filter(num => {
    const idx = arr2Copy.indexOf(num);
    if (idx !== -1) {
      arr2Copy.splice(idx, 1);
      return true;
    }
    return false;
  });
}

// Diferencia A - B (elementos en A que no están en B, considerando duplicados)
function differenceAminusB(arr1, arr2) {
  const arr2Copy = [...arr2];
  return arr1.filter(num => {
    const idx = arr2Copy.indexOf(num);
    if (idx !== -1) {
      arr2Copy.splice(idx, 1);
      return false;
    }
    return true;
  });
}

// Diferencia B - A (elementos en B que no están en A, considerando duplicados)
function differenceBminusA(arr1, arr2) {
  return differenceAminusB(arr2, arr1);
}

// Array Match: verifica si dos arrays tienen los mismos elementos en el mismo orden
function arrayMatch(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

module.exports = {
  unionAll,
  intersection,
  differenceAminusB,
  differenceBminusA,
  arrayMatch
}; 