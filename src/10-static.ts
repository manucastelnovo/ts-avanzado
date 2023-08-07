console.log(Math.PI);

class MyMath{
  static readonly PI = 3.14;

  static max (number:string){
    console.log(number)
  }
};

console.log('pepe',MyMath.PI);

MyMath.max('3');
