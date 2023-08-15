import { Animal, Dog } from './09-protected';

const animal = new Animal('elite');

animal.greeting();

abstract class Boludo{
  abstract boludear():void;
  abstract pelotudear():void;
  abstract drogarse(name:string):boolean;
  abstract conectarseALaBaseDeDatos(db:string):void;
};

class LosPerrosDelLab implements Boludo{

  conectarseALaBaseDeDatos(db: string): void {
    console.log('me conecte a la base de datos ');
    console.log(db);
  }
  boludear(): void {
    console.log('hola soy del lab')
  }
  pelotudear(): void {
    console.log('hola soy del lab')
  }
  drogarse(name: string): boolean {
    console.log('hola soy del lab')
    return true;
  }

};

class UnRusoCualquiera implements Boludo{

  conectarseALaBaseDeDatos(db: string): void {
    console.log('me conecte a la base de datos ');
    console.log(db);
  }

  boludear(): void {
    console.log('hola soy del lab')
  }
  pelotudear(): void {
    console.log('hola soy del lab')
  }
  drogarse(name: string): boolean {
    console.log('hola soy del lab')
    return true;
  }
}



