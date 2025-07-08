# Arrays Iteraction

Este proyecto implementa operaciones básicas sobre arrays de números enteros en JavaScript:
- **Unión (union):** Devuelve un nuevo array con todos los elementos únicos presentes en ambos arrays (sin duplicados, como un conjunto).  
  **Ejemplo:**  
  ```js
  union([1, 2, 3], [3, 4, 5]); // Resultado: [1, 2, 3, 4, 5]
  ```
  Esta función combina los dos arrays y elimina los duplicados, devolviendo solo los valores únicos.

- **Unión (union all):** Une dos arrays, permitiendo duplicados.
- **Intersección:** Devuelve los elementos comunes entre dos arrays, considerando la cantidad mínima de duplicados.
- **Diferencia A - B:** Elementos que están en A pero no en B (considerando duplicados).
- **Diferencia B - A:** Elementos que están en B pero no en A (considerando duplicados).

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