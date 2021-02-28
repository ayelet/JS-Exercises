// Ex 27.1 - Ayelet Danieli - prototype

// You are given a function, Square, that takes four parameters, a, b, c, d,
// denoting the length of the square edges.
// Using prototype properties, add a method to Square named isSquare that
// prints true if a Square object has equal edges and false if they are unequal.
// Here is the Square function:

function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.isSquare= function(){ return ((a===b)&& (b===c) && (c===d));}
   }

   let sq1 = new Square(12,12,12,12);
   let sq2 = new Square(1,2,1,2);
   console.log(sq1.isSquare(), sq2.isSquare()); // true, false