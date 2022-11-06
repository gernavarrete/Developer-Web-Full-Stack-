var Promise = require("bluebird");
var fs = require('fs')
exerciseUtils = require('./utils');
var readFile = exerciseUtils.readFile,
    promisifiedReadFile = exerciseUtils.promisifiedReadFile,
    blue = exerciseUtils.blue,
    magenta = exerciseUtils.magenta;
    var filenames = [1, 2, 3, 4, 5, 6, 7, 8].map(function (n) {
        return 'poem-two/' + 'stanza-0' + n + '.txt';
      });
    // console.log(filenames)
/* Promise.all([promisifiedReadFile('poem-two/stanza-01.txt'), promisifiedReadFile('poem-two/stanza-02.txt')])
.then(result => result.forEach((e) => blue(e)))
.finally(() => console.log('-- A. callback version done --')) */

//Promise.map(filenames, (filename) =>  promisifiedReadFile(filename) )
//.then(result => console.log(result))
//.then(result => result.forEach(e => blue(e)))
//.finally(() => console.log('-- B. callback version done --')) 

Promise.map(filenames, (filename) =>  promisifiedReadFile(filename))
//.then(result => console.log(result))
.then(result => result.forEach(e => blue(e)))
.finally(() => console.log('-- B. callback version done --')) 