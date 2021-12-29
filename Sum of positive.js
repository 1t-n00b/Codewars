function positiveSum(arr) {
    let x=0;
    for (let i = 0; i <arr.length ; i++) {
        if (arr[i]>0) x=x+arr[i]
    }
    return x
}
console.log(positiveSum([5,-1,-2,3,-1,5]));