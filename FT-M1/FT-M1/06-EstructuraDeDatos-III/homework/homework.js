"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, 
  según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún 
  parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del 
  directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function() {
  let size = 0;
  if (this.value) {
    console.log('Entre');
    size = 1 + this.right.size() + this.left.size();
    return size;
  }
  else {
    return size;
  }
}
BinarySearchTree.prototype.insert = function(value) {

  if (value > this.value) {
    if (this.right !== null) {
      this.right.insert(value);
    };
    if (this.right === null) {
      this.right = new BinarySearchTree(value);
    };
  }
  if (value < this.value) {
    if (this.left !== null) {
      this.left.insert(value);
    }
    if (this.left === null) {
      this.left = new BinarySearchTree(value);
    }
  }
}
BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  }
  if(value > this.value) {
    if(this.right === null) return false;
    else return this.right.contains(value);
  }
  if (value <  this.value) {
    if(this.left === null) return false;
    else return this.left.contains(value);
  }
}
BinarySearchTree.prototype.depthFirstForEach = function(f,str) {

  if (str === 'pre-order') { //riz
    f(this.value);
    if (this.left !== null) this.left.depthFirstForEach(f,str);
    if (this.right !== null) this.right.depthFirstForEach(f,str);
  }
  else if (str === 'post-order') {
    if (this.left !== null) this.left.depthFirstForEach(f,str);
    if (this.right !== null) this.right.depthFirstForEach(f,str);
    f(this.value);
  }
  else {
    if (this.left !== null) this.left.depthFirstForEach(f,str);
    f(this.value);
    if (this.right !== null) this.right.depthFirstForEach(f,str);
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function(f, arr=[]) {
  if (this.left !== null) arr.push(this.left);
  if (this.right !== null) arr.push(this.right);
  f(this.value);
  if (arr.length > 0) {
    arr.shift().breadthFirstForEach(f, arr);
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
