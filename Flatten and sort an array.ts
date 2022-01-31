 function flattenAndSort(inputArray) {
  // Good luck, brave code warrior!
     let newArr = [];
     for (let i = 0; i <inputArray.length ; i++) {
         for (let j = 0; j <inputArray[i].length ; j++) {
             newArr.push(inputArray[i][j])
         }
     }

     console.log(newArr.sort(function(a, b) {
  return a - b;
}))
}
flattenAndSort([[3, 2, 1], [7,100, 9, 8], [6, 4, 5]]);