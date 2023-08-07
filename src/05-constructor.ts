export class MyDate{



  constructor(public year:number = 10,
    public month:number= 11,
    private day:number=12)
    {}

  printFormat():string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
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
      this.day+= amount;
    }
    if(type === 'months'){
      this.month+= amount;
    }
    if(type === 'years'){
      this.year+= amount;
    }

  }





}
const myDate = new MyDate(1993,7,10);

console.log(myDate.printFormat());

