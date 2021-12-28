function arrayPlusArray(arr1, arr2) {
    //  return arr1 + arr2; //something went wrong
    let sum1 = 0
    let sum2 = 0;

    arr1.every((x, i) => sum1 = sum1 + arr1[i]);
    arr2.every((x, i) => sum2 = sum2 + arr2[i]);
   // console.log((arr1.concat(arr2).reduce((a,b) => a+b)));
    return sum1 + sum2

}

arrayPlusArray([1, 2, 3, 4], [5, 6]);