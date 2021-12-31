function array(arr){
//Good luck
    let str=""
    let array = arr.split(",");
    if (array.length<3) return null
    else {
        for (let i = 1; i <array.length-1 ; i++) {
            str+=array[i]+" "
        }
    }
    return str.substring(0,str.length-1)
}

console.log(array(""))
