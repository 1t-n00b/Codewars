var maxRedigit = function(num) {
    // Do yor magic :)
    return num < 100 || num > 999 ? null: parseInt(num.toString().split('').sort((a,b)=>b-a).join(''));


}
console.log(maxRedigit(-1));