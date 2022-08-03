'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for(let i = 0; i < num.length ; i++) {
    sum = sum + (num[i] * (2 **(num.length - 1 - i)));
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let bin = '';
  while (num >= 1) {
    let u = num % 2;
    num = Math.floor(num / 2);
    bin = u + bin;
  }
  return bin;
}
//hola

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}