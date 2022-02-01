function digPow(n, p){
    // ...
    let sum = 0;
    let arr = n.toString(10).replace(/\D/g, '0').split('').map(Number);
    for (let i = 0; i <arr.length ; i++) {
        sum += Math.pow(arr[i], p)
        p++
    }
    if (Number.isInteger(sum/n)) return sum/n
   else return -1

}

console.log(digPow(46288,3))
