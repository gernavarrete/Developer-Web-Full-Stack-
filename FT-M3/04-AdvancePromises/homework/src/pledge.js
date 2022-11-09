'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor){
if(typeof executor !== 'function') throw new TypeError('executor not function')
this._state = 'pending';
executor(
    this._internalResolve = (value) => { 
    if(this._state === 'pending') {
        this._state = 'fulfilled';
        this._value = value;
    }
},
    this._internalReject = (value) => {
    if(this._state === 'pending') {
        this._state = 'rejected';
        this._value = value;
    }
}
)
}
module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
