const fs = require('fs');
const request = require('request');

const dft = () => {
  process.stdout.write("\nprompt > ");
}

const pwd = () => {
  process.stdout.write(process.cwd());
}
const date = () => {
  process.stdout.write(Date());
}

const echo = (rest) => {
  process.stdout.write(rest.join(' '))
}
const inexistente = (cmd) => {
  process.stdout.write(`No se Encuentra el comando ${cmd}`)
}

const cat = (rest) => {
  fs.readFile(rest[0], 'utf-8', (err, data) => {
    if (err) throw err;
    process.stdout.write(data);
    dft();
  });
}

const head = (rest) => {
  fs.readFile(rest[0], 'utf-8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\n');
    process.stdout.write(lines.slice(0,(rest[1] ? parseInt(rest[1]) : 10)).join('\n'));
    dft();
  });
}

const tail = (rest) => {
  fs.readFile(rest[0], 'utf-8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\n');
    process.stdout.write(lines.slice((rest[1] ? parseInt(rest[1]) : 10) * -1).join('\n'));
    dft();
  });
}

const clear = () => {
  process.stdout.write('\033c');
}

const curl = (rest) => {
  request(`http://${rest[0]}`, function (error, response, body) {
  if(error) throw error
  process.stdout.write(body);
  dft();
});
}

// commands/index.js
function ls(){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      })
      process.stdout.write("prompt > ");
    });
}




// commands/index.js

module.exports = {
    pwd,
    date,
    echo,
    ls,
    inexistente,
    dft,
    cat,
    head,
    tail,
    clear,
    curl
}