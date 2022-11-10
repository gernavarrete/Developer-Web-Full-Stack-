'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor){
if(typeof executor !== 'function') throw new TypeError('executor not function')
this._state = 'pending';
this._handlerGroups = [];
executor(
    this._internalResolve = (value) => {
    if(this._state === 'pending') {
        this._state = 'fulfilled';
        this._value = value;
        this._handlerGroups.forEach(e => this._callHandlers(e.successCb))
    }
},
    this._internalReject = (value) => {
    if(this._state === 'pending') {
        this._state = 'rejected';
        this._value = value;
    }
})
this.then = function(sH,eH){
    if(typeof sH !== 'function' && typeof eH !== 'function') {
        this._handlerGroups.push({successCb : false, errorCb : false});
    }
    else if(typeof sH !== 'function') {
        this._handlerGroups.push({successCb : false, errorCb : eH});
    }
    else if(typeof eH !== 'function') this._handlerGroups.push({successCb : sH, errorCb : false});
    else {
        this._handlerGroups.push({successCb: sH, errorCb : eH})
    }
    if(this._state === 'fulfilled') this._callHandlers(sH);
    else if(this._state === 'rejected') this._callHandlers(eH);
}
this._callHandlers = function(handler){
    return handler(this._value);
}
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
