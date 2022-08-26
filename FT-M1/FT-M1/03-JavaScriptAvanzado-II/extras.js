String.prototype.repeatify = function(x) {
    var repeat = '';
    if (x < 0) {
        return 'Error';
    }
    else if (x === 0) {
        return '';
    }
    else {
        for (let i = 1; i <= x; i++) {
            repeat = repeat + this;
        }
        return repeat;
    }
}

function Shape() {
    this.type = this,
    this.getType = function() {
        return this.type;
    }
}
var shape = new Shape();
    
function Triangle(a,b,c) {
        this.a = a,
        this.b = b,
        this.c = c,
        this.type = 'Triangle'
    }
Triangle.prototype = Object.create(shape);
Triangle.prototype.constructor = Triangle;
Shape.prototype.getPerimeter = function() {
    return this.a + this.b + this.c;
}
  
var t = new Triangle(1, 2, 3);
console.log(t);
console.log(t instanceof Triangle);

console.log(Shape.prototype.isPrototypeOf(t));

console.log(t.getPerimeter());

console.log(t.getType());




function Circle(a) {
        this.a = a * 2 * (Math.PI / 3),
        this.b = a * 2 * (Math.PI / 3),
        this.c = a * 2 * (Math.PI / 3),
        this.type = 'Circle'
    }
Circle.prototype = Object.create(shape);
Circle.prototype.constructor = Circle;




var c = new Circle(2);
console.log(c);
console.log(c instanceof Circle);

console.log(Shape.prototype.isPrototypeOf(c));

console.log(c.getPerimeter());

console.log(c.getType());


function Square(l) {
    this.a = l,
    this.b = this.a,
    this.c = this.a,
    this.d = this.a,
    this.type = 'Square'
}
Square.prototype = Object.create(shape);
Square.prototype.constructor = Square;

Shape.prototype.getArea() = function() {
    //return 
}

var c = new Square(4);
console.log(c);
console.log(c instanceof Square);

console.log(Shape.prototype.isPrototypeOf(c));

console.log(c.getPerimeter());

console.log(c.getType());
