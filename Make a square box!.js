function box(n) {
    //your code here
    let arr = [];
    arr.push("-".repeat(n));
    for (let i = 0; i < n - 2; i++) {
        arr.push(("-".concat(" ".repeat(n - 2))).concat("-"));
    }
    arr.push("-".repeat(n));
    return arr
}

console.log(box(2))

//  (box(5), ["-----", "-   -", "-   -", "-   -", "-----"]);