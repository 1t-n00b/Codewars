function descendingOrder(n){
    let str ="";
    let realDigits = n.toString().split('').map(int => parseInt(int, 10)).sort((a,b) => b-a);
    for (let i = 0; i < realDigits.length; i++) {
       str = str.concat(realDigits[i]);
    }
    console.log(str);
    return parseInt(str);


}

descendingOrder(12345678998877);
