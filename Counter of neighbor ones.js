function onesCounter(input) {
  let arr = [];
  let x = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] != 0) {
      x++;
    }
     else  {
       if (x!=0) {
          arr.push(x);
          x=0;
       }
      }
    
  }
  if (input[input.length-1] !=0 && input.length>0) {
    arr.push(x);
  }
  return arr;
}
console.log(onesCounter([]));
