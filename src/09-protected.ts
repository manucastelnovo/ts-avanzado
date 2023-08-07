export class Animal{
  constructor(public name:string){}

  move(){
    console.log('Moving alogn!');
  };

  greeting(){
    return `Hello, I'm ${this.name}`
  };

  protected doSomething(){
    console.log('dooooo');
  };
};


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
    this.doSomething()
  }

};

const perro = new Dog('pepe');

// perro.doSomething()
