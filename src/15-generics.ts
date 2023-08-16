// function getValue(value:number ){
//   return value;
// };

function getValues<T>(value:T) {
  return value;
}


getValues<number>(12);
getValues<string>('21');
getValues<number[]>([1,2,3])

