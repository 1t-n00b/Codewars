function isIsogram(str) {
    //...
    let x = 0;
    let arr = str.toLowerCase().split("").sort();
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) x++;
    }
    return x === 0;
}

console.log(isIsogram("zxcvbnghkg"))