function sortArray(array) {
  // Return a sorted array.
  let odd_arr = [];
  for (let i = 0; i<array.length; i ++) {
    if (array[i] %2 !==0) {
      odd_arr.push(array[i]);
      array[i]="*";
      }
  }
 let sort_odd_arr = odd_arr.sort((a,b)=>a-b);
    let x=0;
   for (let i = 0; i<array.length; i ++) {
     
    if (array[i] ==="*") {
      array[i]=sort_odd_arr[x];
      x++;
      }
  }
 // console.log(array);
  return array;
}
