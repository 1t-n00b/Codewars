function drawStairs(n) {
    // your code here
    // let str ="";
    // for (let i = 1; i <=n ; i++) {
    //         if (i!==n) {
    //             str +="I"+"\n" + "\u00A0".repeat(i);
    //         }
    //         else str += "I" ;
    // }
    //      // console.log(str);}
    // return str;
    let step = "I"
    for(let i=1; i<n;  i++) {
        step +="\n" + " ".repeat(i) + 'I' ;
    }return step
}

console.log(drawStairs(5));