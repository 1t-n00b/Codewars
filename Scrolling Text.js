function scrollingText(text) {
    let result = [];
    result.push(text.toUpperCase());
    for (let i = 1; i < text.split("").length; i++) {
        let s = text.substr(0, 1)
        text = text.slice(1);
        text = text.concat(s);
        result.push(text.toUpperCase());
    }

    return result;

    // for( var i = 0; i < text.length; i++){
    //     result.push((text.slice(i) + text.slice(0,i)).toUpperCase())
    // }
    // return result
}

console.log(scrollingText("codewars"));