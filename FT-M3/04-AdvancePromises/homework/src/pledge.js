'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

function $Promise(executor){
    if(typeof executor !== 'function') throw new TypeError('executor not function')
    this._state = 'pending';
    this._handlerGroups = [];
    executor(this._internalResolve.bind(this),this._internalReject.bind(this));
}
$Promise.prototype._internalResolve = function(value){
    if(this._state === 'pending') {
        this._state = 'fulfilled';
        this._value = value;
        this._callHandlers();
    }
}
$Promise.prototype._internalReject = function(value){
    if(this._state === 'pending') {
        this._state = 'rejected';
        this._value = value;
        this._callHandlers();
    }
}
$Promise.prototype.then = function(sH,eH){
    if(typeof sH !== 'function') sH = false;
    if(typeof eH !== 'function') eH = false
    const downstreamPromise = new $Promise(function() {})
    this._handlerGroups.push(
            {successCb: sH,
            errorCb : eH,
            downstreamPromise,
        })
    if(this._state !== 'pending')  this._callHandlers()
   return downstreamPromise;
}
$Promise.prototype._callHandlers = function(){
    while(this._handlerGroups.length > 0) {
        let current = this._handlerGroups.shift();
        if(this._state === 'fulfilled') {
            if(!current.successCb){
                current.downstreamPromise._internalResolve(this._value);
            } else {
                try {
                    let result = current.successCb(this._value)
                    if(result instanceof $Promise) {
                        result.then(value => current.downstreamPromise._internalResolve(value),
                        error => current.downstreamPromise._internalReject(error)
                        )
                    }else {
                        current.downstreamPromise._internalResolve(result)
                    }
                } 
                catch(e) {
                    current.downstreamPromise._internalReject(e);
                }
            }
            //current.successCb && current.successCb(this._value)
        }else if(this._state === 'rejected') {
            if(!current.errorCb){
                current.downstreamPromise._internalReject(this._value);
            } else {
                try {
                    let result = current.errorCb(this._value)
                    if(result instanceof $Promise) {
                        result.then(value => current.downstreamPromise._internalResolve(value),
                        error => current.downstreamPromise._internalReject(error)
                        )
                    }else {
                        current.downstreamPromise._internalResolve(result)
                    }
                } 
                catch(e) {
                    current.downstreamPromise._internalReject(e);
                }
            }
        }
    }
}
$Promise.prototype.catch = function(eH){ return this.then(null, eH)};
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
