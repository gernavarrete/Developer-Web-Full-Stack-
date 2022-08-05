'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  /*if (typeof num === 'string') {
  let sum = 0;
  for(let i = 0; i < num.length ; i++) {
    sum = sum + (num[i] * (2 **(num.length - 1 - i)));
  }
  return sum;
  }
  else {
  return 'No es String'
  }*/
  return num.split("").reduce((a,v,i,arr) => a += 2 ** (arr.length - 1 - i) * v,0 );
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = '';
  while (num >= 1) {
    bin = (num % 2) + bin;
    num = Math.floor(num / 2);
  }
  return bin;
}
//hola

  //"start": "nodemon homework.js" cambios en vivo del codigo instalar nodemon tmb

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}