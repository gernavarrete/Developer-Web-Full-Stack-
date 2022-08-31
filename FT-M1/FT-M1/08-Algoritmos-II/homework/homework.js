'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) { //[5, 1, 4, 2, 8]
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let leftArray = [];
  let index = Math.floor(Math.random() * array.length);
  let pivot = [array[index]]
  let rightArray = [];
  if(array.length <= 1) return array;
  for(let i = 0; i < array.length; i++) {
    if (i === index) continue;
    if ((array[i] === pivot[0]) && (i !== index)) pivot.push(array[i]); 
    if (array[i] < pivot[0])  leftArray.push(array[i]);
    if (array[i] > pivot[0])  rightArray.push(array[i]);
  }
  return quickSort(leftArray).concat(pivot).concat(quickSort(rightArray));
}
//console.log(quickSort([5, 1, 4, 4, 2, 8]))

function mergeSort(array) { //
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;
  let dividir = split(array);
  let left = dividir[0]
  let right = dividir[1]

  return unir(mergeSort(left),mergeSort(right));
}
function split(array) { 
  let middle = Math.floor(array.length/2); 
  let leftArray = array.slice(0,middle); 
  let rightArray = array.slice(middle); 
  return [leftArray,rightArray];
}

function unir(left,right) { // ([5],[1])
  let newarray = []           
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length) { // 0 < 1 && 1 < 1
    if (left[indexLeft] < right[indexRight]) { // 5 < 1 no!
    newarray.push(left[indexLeft]);
    indexLeft++;
    }
    else {
    newarray.push(right[indexRight]); // [1]
    indexRight++; //ir = 1
    }
  }
  return newarray.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
