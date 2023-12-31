export class MyDate{



  constructor(public year:number = 10,
    private _month:number= 11,
    private _day:number=12)
    {}

  printFormat():string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this._month);
    const year = this.addPadding(this.year);
    return `${day}/${month}/${year}`;
  }

  private addPadding(value:number){
    if(value<10){
      return `0${value}`;
    }
    return `${value}`
  }
  add(amount:number, type: 'days'| 'months' | 'years'){
    if(type === 'days'){
      this._day+= amount;
    }
    if(type === 'months'){
      this._month+= amount;
    }
    if(type === 'years'){
      this.year+= amount;
    }

  }


  get day():number{
    return this._day
  };

  get isLeasYear():boolean {
    if(this.year % 400 === 0 ) return true;
    if(this.year % 100 === 0) return true;
    return this.year % 4 === 0
  }

  get month (){
    return this._month;
  }

  set month(newValue:number){
    if(newValue >= 1 && newValue <= 12){
      this._month = newValue;
    }
  };
}
const myDate = new MyDate(1993,7,10);

console.log(myDate.printFormat());

console.log(myDate.day);
