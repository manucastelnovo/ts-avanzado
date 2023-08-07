export class Animal{
  constructor(public name:string){}

  move(){
    console.log('Moving alogn!');
  };

  greeting(){
    return `Hello, I'm ${this.name}`
  };
}


const fifi= new Animal ('fifi');

fifi.move();

export class Dog extends Animal{

  constructor(
    name:string
  ){
    super(`El perro ${name}`)
  }

  woof (times:number):void{

    for (let index = 0; index < times; index++) {
      console.log('WOOF!!')

    }
  }
}


const perro = new Dog('pepe');

console.log(perro.name)
perro.move();
perro.woof(5);
