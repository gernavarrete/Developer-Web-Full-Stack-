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
        if(this._handlerGroups !== []){
            this._handlerGroups.forEach(e => { if(e.successCb) this._callHandlers(e.successCb)});
            this._handlerGroups.shift();
        }
    }
},
    this._internalReject = (value) => {
    if(this._state === 'pending') {
        this._state = 'rejected';
        this._value = value;
        if(this._handlerGroups !== []) {
            this._handlerGroups.forEach(e => { if(e.errorCb) this._callHandlers(e.errorCb)});
            this._handlerGroups.shift();
        }
    }
})
this.then = function(sH,eH){
    if(typeof sH !== 'function' && typeof eH !== 'function') 
        this._handlerGroups.push({successCb : false, errorCb : false});
    else if(typeof sH !== 'function') 
        this._handlerGroups.push({successCb : false, errorCb : eH});
    else if(typeof eH !== 'function') 
        this._handlerGroups.push({successCb : sH, errorCb : false});
    else {
        this._handlerGroups.push({successCb: sH, errorCb : eH})
    }
    if(this._state === 'fulfilled' && sH) this._callHandlers(sH);
    else if(this._state === 'rejected' && eH) this._callHandlers(eH);
}
this._callHandlers = function(handler){
    return handler(this._value);
}
this.catch = (eH) => this.then(null, eH);
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
