function converter(num) {
   var i = num
   var bin  = ''
   while (i > 0) {
        var bin = (i % 2) + bin;
        var i = Math.floor(i/2);
   }
return bin;
}