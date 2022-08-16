'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  return (n < 3) ? n :  n * nFactorial(n - 1);
}

function nFibonacci(n) {
  return (n < 0) ? 'Error' : (n === 0) ? 0 : (n === 1) ? 1 : nFibonacci(n - 1) + nFibonacci(n - 2);
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que 
ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
function Queue() {
  this.array = [];    // funcion constructora....o tipo clase
} 


 Queue.prototype.enqueue = function(array){
   return this.array.push(array);            // encola elementos al principio de la cola,
 }
 Queue.prototype.dequeue= function(array){
   return this.array.shift(array);
 }

 Queue.prototype.size= function(array){
  return this.array.length;
 }

/* function Queue() {
  this.top = null,
  this.length = 0
} */
/* function Node(value) {
  this.value = value,
  this.next = null
}

Queue.prototype.enqueue = function(value){
  let node = new Node(value);
  if (this.top === null) {
    this.top = node;
  } else {
    let current = this.top.next;
    console.log('este es el ',current);
    while (current === null) {
      current = this.next;
      console.log(current);
    }
    //let aux = this.top.next;
    current = node;
    console.log(current);
  }
  this.length += 1;
}
Queue.prototype.dequeue = function() {
  if (this.top === null) {
    return undefined;
  }else {
    let aux = this.
  }
}
Queue.prototype.size = function() {
  return this.length;
} */


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
