var http = require('http');
var fs   = require('fs');
const beatle = require('./beatle');
const replacervar = require('./repalcevariables')

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]


http.createServer( function(req, res){
  let name = req.url.split('/').filter(e => /\w%20\w/.test(e))
  if(req.url === '/'){
    res.writeHead(200, { 'Content-Type':'text/html' });
    var html = fs.readFileSync(__dirname +'/index.html');
    res.end(html);
  }else if(req.url === `/${name}`) {
    res.writeHead(200, { 'Content-Type':'text/html' });
    var html = fs.readFileSync(__dirname +'/beatle.html', 'utf8')
    let objbeatle = beatle.beatleObj(name, beatles);
    html = replacervar.replaceVar(objbeatle,html);
    res.end(html);
  }else if( req.url === `/api/${name}`){
   res.writeHead(200, { 'Content-Type':'application/json' })
   let objbeatle = beatle.beatleObj(name, beatles);
   res.end(JSON.stringify(objbeatle))
  }else if(req.url === '/api'){
   res.writeHead(200, { 'Content-Type':'application/json' })
   res.end(JSON.stringify(beatles));
  }else{
   res.writeHead(404); //Ponemos el status del response a 404: Not Found
   res.end('La página no se encontro'); //No devolvemos nada más que el estado.
  }
  
 }).listen(1337, '127.0.0.1');