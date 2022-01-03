function multiTable(number) {
    // good luck
    let str = ""
    for (let i = 1; i <=10 ; i++) {
       str +=  i+" * " + number +" = " + i*number + "\n"
    }
    return str.substring(0,str.length-1)
}

console.log(multiTable(5))