var capitals = function (word) {
    // Write your code here
    let arr = word.split("");
    let numArr = [];
    for (let i = 0; i <arr.length ; i++) {
        if (arr[i]===arr[i].toUpperCase()){
            numArr.push(i)
        }
    }
    return numArr


};

console.log(capitals("CodEWaRs"));