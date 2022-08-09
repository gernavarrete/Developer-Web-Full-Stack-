
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1; 
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // muestra 10
  console.log(a); // muestra 8
  var f = function(a, b, c) {
    b = a; 
    console.log(b); //muestra 8
    b = c;
    var x = 5;
  }
  f(a,b,c); 
  console.log(b); //muestra 9
}
c(8,9,10); // muestra 10 , muestra 8, Muestra 8, muestra 9
console.log(b); //muestra 10
console.log(x); //muestra 1
```

```javascript
console.log(bar); //muestra 1
console.log(baz); //muestra baz is not defined
foo(); no continua;
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //muestra Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); //muestra Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); //muestra Franco
   }
})();
console.log(instructor); //Muestra Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); //Muestra The Flash
    console.log(pm); //Muestra Reverse Flash
}
console.log(instructor); //Muestra The Flash
console.log(pm); //Muestra Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //return 2
"2" * "3" //return 6
4 + 5 + "px" //return '9px'
"$" + 4 + 5 //return '$45'
"4" - 2 //return 2
"4px" - 2 //NaN
7 / 0 //return Infinty
{}[0] //return undefined
parseInt("09") //return 9
5 && 2 //return 2
2 && 5 //return 5
5 || 0 //return 5
0 || 5 //return 5
[3]+[3]-[10] //return 23
3>2>1 //return false
[] == ![] //return true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();  //muestra 1 muestra 2
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); //muestra undefined por que no entra al getFood por que es false el parametro;
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); //muestra Aurelio De Rosa ingresa al metodo del objeto prop desde el objeto prop y muestra Aurelio de Rosa por que this hace referencia al objeto prop que es el que la esta invocando.

var test = obj.prop.getFullname; 

console.log(test()); //muestra Juan Perez en este caso la variable test solo guardo el metodo del objeto prop pero al objeto que esta haciendo referencia es al objeto global al ser invocada;
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing(); //muestra 1 muestra 4 muestra 3  muestra 2 por que esta usando setTimeout que envia la resolucion de la function a una api que luego de devolver el resultado entra en la pila secundaria que hasta que no se termina de ejecutar la pila principal no ejecuta las tarear que han sido enviadas al web api
```
