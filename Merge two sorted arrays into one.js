function mergeArrays(arr1, arr2) {
    let arr = ((arr1.concat(arr2)).sort(((a, b) => a-b)))
    return arr.filter((a,b)=> arr.indexOf(a)===b)
}

console.log(mergeArrays([1,2,3,4], [5,5,5,5,6,7,8]));