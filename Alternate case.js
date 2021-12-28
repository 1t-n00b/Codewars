function alternateCase(s) {
    let str = "";
    let arr = s.split("");
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i].toLowerCase()===arr[i]) {
            arr[i]=arr[i].toUpperCase();
        }
        else arr[i]=arr[i].toLowerCase();
        str = str + arr[i];
    }
    return str;


}

console.log(alternateCase("Hello World"));