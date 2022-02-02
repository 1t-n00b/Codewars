function wave(str) {
    let arr = []
    let word = ""
    for (let i = 0; i < str.length; i++) {
        let symbol = str[i].toUpperCase()
        if (str[i] === ' ') continue;
        word = str.slice(0, i) + symbol + str.slice(i + 1)
        arr.push(word)

    }
    return arr


}

console.log(wave("two words"))

