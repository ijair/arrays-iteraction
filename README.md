# Arrays Iteraction

Este proyecto implementa operaciones básicas sobre arrays de números enteros en JavaScript:

- **Unión (union all):** Une dos arrays, permitiendo duplicados.
- **Intersección:** Devuelve los elementos comunes entre dos arrays, considerando la cantidad mínima de duplicados.
- **Diferencia A - B:** Elementos que están en A pero no en B (considerando duplicados).
- **Diferencia B - A:** Elementos que están en B pero no en A (considerando duplicados).
- **Array Match:** Verifica si dos arrays tienen exactamente los mismos elementos en el mismo orden.

## Estructura de archivos

- `arrayOperations.js`: Funciones de operaciones sobre arrays.
- `arrayOperations.test.js`: Pruebas automáticas de las funciones.
- `main.js`: Script principal para generar dos arrays aleatorios y mostrar los resultados de las operaciones.

## Requisitos

- Node.js >= 14

## Instalación

No requiere dependencias externas. Para correr los tests, se recomienda usar [Jest](https://jestjs.io/):

```bash
npm install --save-dev jest
```

## Cómo correr los tests

Ejecuta:

```bash
npx jest arrayOperations.test.js
```

O si tienes Jest instalado globalmente:

```bash
jest arrayOperations.test.js
```

## Cómo probar el main

Ejecuta:

```bash
node main.js
```

Esto generará dos arrays de 20 números enteros aleatorios y mostrará los resultados de las operaciones en consola.

## Función Array Match

La función `arrayMatch(arr1, arr2)` retorna `true` si ambos arrays tienen exactamente los mismos elementos en el mismo orden, y `false` en caso contrario.

**Ejemplo de uso:**

```js
arrayMatch([1,2,3], [1,2,3]); // true
arrayMatch([1,2,3], [3,2,1]); // false
arrayMatch([1,2,3], [1,2,3,4]); // false
arrayMatch([], []); // true
``` 