export class MyService {

  static instance: MyService | null = null;
  private constructor(private name:string){
  }

  getName(){
    return this.name;
  }

  static create (name:string){
    if(MyService.instance === null){
      console.log('deberia entrar una vez')
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
};

const myService1 = MyService.create('servicio 1 ')
const myService2 = MyService.create('servicio 2 ')

console.log(myService1 === myService2)
