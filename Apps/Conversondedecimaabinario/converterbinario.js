function converterbin(bin) {
  var dec = 0;
  var exp = bin.length - 1;
  for (let i = 0; i < bin.length; i++) {
    dec += (bin[i]*(2**exp));
    exp--;
  }
return dec;
}

function deBinaDec(b) {
  var deci = 0;
  for (let i = 0; i < b.length; i++) {
    if (b[i] === '1') {
      deci += 2**((b.length-1)-i); 
    }
  }
 return deci; 
}