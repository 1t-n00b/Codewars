function toCsvText(array) {
    // good luck
    // let str = "";
    // for (let i = 0; i <array.length ; i++) {
    //     str+=array[i].toString() + "\n"
    // }
    // return str.substring(0,str.length-1)
    return array.join("\n")
}
console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
] ))