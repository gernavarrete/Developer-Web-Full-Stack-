// bash.js
const commands = require('./commands');


// Output un prompt
// process.stdout.write('prompt > ');
// //El evento stdin 'data' se dispara cuando el user escribe una línea
// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remueve la nueva línea
//   if(cmd === 'date') {
//     process.stdout.write(Date());
//   }
//   if(cmd === 'pwd') {
//     process.stdout.write(process.cwd());
//   }
//   process.stdout.write('\nprompt > ');
// });


//Echo
// Output un prompt
process.stdout.write('prompt > ');
//El evento stdin 'data' se dispara cuando el user escribe una línea
process.stdin.on('data', function (data) {
  var [cmd,...rest] = data.toString().trim().split(' ');
 commands[cmd] ? commands[cmd](rest) : commands.inexistente(cmd);
 commands.dft();
});

