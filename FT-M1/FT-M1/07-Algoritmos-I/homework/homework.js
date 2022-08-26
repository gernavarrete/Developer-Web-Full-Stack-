'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  if ((num <= 0) || (typeof num !== 'number') || (num%1 !== 0)) throw new TypeError('Error del parametro ingresado');
  let factores = Array.of(1);
  let val = 2;
  while (val <= num) {
    if (num % val === 0) {
      factores.push(val);
      num = num / val;
    }
    else {
      val++;
    }
  }
  return factores;
}



/*while (Math.floor(num / i) === num / i) {
num = num / i;
arr.push(i);
}
  i++;*/

//console.log(factorear(180));

/* function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j + 1]) {
        [array[j],array[j + 1]] = [array[j + 1],array[j]];
      }
      if(array[j] < array[j + 1]) {
        j++;
      }
    }
  }
  return array;
} */
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let flag = true;
  while(flag === true) {
    flag = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
      [array[i],array[i + 1]] = [array[i + 1],array[i]];
      flag = true;
      }
    }
  }
  return array;
}
//console.log(bubbleSort2([5, 1, 4, 2, 8]));

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i];
    while ((j >= 0) && (aux < array[j])) {
      array[j + 1] = array[j];
      j--;
    }
    array[j+1] = aux;
  }
  return array;
}
//insertionSort([5, 1, 4, 2, 8]);

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length - 1; i++) {
    let aux = array[i];
    let index = i;
    for(let j = i + 1 ; j < array.length; j++) {
    	if (aux > array[j]) {
        aux = array[j];
        index = j;
    	}
    }
    array[index] = array[i];
    array[i] = aux;
  }
  return array;
}

/* function devuelveMayores(lista,valor) {
  return lista.reduce(function(valorAnterior,valorActual,indice){
    return (lista[indice] > valor) ? valorAnterior + 1 : valorAnterior;
  }, 0);
}

console.log(devuelveMayores([2,6,8,9,10,12,9],7)); */

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
