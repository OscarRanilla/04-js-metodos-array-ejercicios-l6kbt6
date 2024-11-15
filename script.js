// 1 Crea un array de números con 10 elementos tipo número

const numeros = [4, 9, 67, 56, 45, 32, 89, 66, 564, 36];
console.log(numeros.length);

// 2 Filtrar números pares con el método filter
//hacemos una variable con numeros pares

const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

//Duplicar todos los números con el método map

numeros.map((numeros) => numeros);
console.log(numeros.map((numeros) => numeros));
console.log(numeros.map((numeros) => '|' + numeros + '|'));
console.log(numeros);

//Sumar todos los números con el método reduce
console.log(
  numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
  })
);

//Ordenar los números de menor a mayor

numeros.sort(function (a, b) {
  return a - b;
});
console.log(numeros);

//Ordenar los números de mayor a menor

numeros.sort(function (a, b) {
  return b - a;
});
console.log(numeros);

//Comprobar si todos los números son mayores que 0 con el método every

const mayoresQuecero = (currentValue) => currentValue > 0;
console.log(numeros.every(mayoresQuecero));

//Comprueba si al menos un elemento del array es mayor de 100 con el método some

const mayor = (numeros) => numeros > 100;
console.log(numeros.some(mayor));

//Comprueba si todos los elementos del array cumplen con la condición de ser menores de 50 con every.

const menoresQuecincuenta = (currentValue) => currentValue < 50;
console.log(numeros.every(menoresQuecincuenta));

//Encontrar el primer número mayor o igual a 5 con el método find

const encontrar = numeros.find((element) => (element) => 5);
console.log(encontrar);

//Encuentra el índice de un elemento en el array o el último índice si hay duplicados con indexOf y lastIndexOf

const numeros2 = [4, 9, 67, 56, 45, 32, 89, 66, 564, 36, 8, 56];

const primerIndice = numeros2.indexOf(9);
console.log(`el primer indice de 9 es: ${primerIndice}`);

const ultimoIndice = numeros2.lastIndexOf(45);
console.log(`el ultimo indice de 45 es: ${ultimoIndice}`);

const numerosDuplicados = numeros2.lastIndexOf(56);
console.log(`el ultimo indice de 56 es: ${numerosDuplicados}`);

//Crear un nuevo array con los números impares con filter

const numerosImpares = numeros2.filter((numero) => numero % 2 !== 0);
console.log(numerosImpares);

//EN ESTE ARRAY APLICAMOS LA CONDICION % 2 !== O PARA VERIFICAR SI EL NUMERO ES IMPAR SI SE APLICA SE AGREGA AL NUEVO ARRAY NUMEROSIMPARES Y TENEMOS ESTE NUEVO ARRAY IMPAR
// [9, 67, 45, 89]

//Crea otro array de números y concatenalo con el primer array

const sumaNumeros = numeros.concat(numeros2);
console.log(sumaNumeros);
console.log(sumaNumeros.length);

//USAMOS EL METODO CONCAT PARA CONCATENAR LOS DOS ARRAYS
