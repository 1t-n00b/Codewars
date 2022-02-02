multiplicationTable = function (size) {
    // insert code here
    let arr = []
    for (let i = 1; i <= size; i++) {
        let arr2 = []
        for (let j = 1; j <= size; j++) {
            arr2.push(i * j)
        }
        arr.push(arr2)
    }
    return arr
}

console.log(multiplicationTable(3))
