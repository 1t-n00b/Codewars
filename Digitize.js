function digitize(n) {
    // n = n.toString().split("");
    // for (let i = 0; i < n.length ; i++) {
    //     n[i] = parseInt(n[i]);
    // }
    // return n;
    return n.toString().split("").map(Number);
}
console.log(digitize(6849));