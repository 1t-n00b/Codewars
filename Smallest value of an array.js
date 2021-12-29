function min(arr, toReturn) {
    // TODO
    // switch (toReturn) {
    //     case "value":
    //         return arr.sort((a,b)=>a-b)[0];
    //     case "index":
    //         let clon = arr.slice();
    //         return clon.indexOf(arr.sort((a, b) => a - b)[0]);
    // }
    if (toReturn==='value') return Math.min(...arr)
    return arr.indexOf(Math.min(...arr))
}

console.log(min([1,2,3,4,5], "index"));