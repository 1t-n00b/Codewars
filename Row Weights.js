function rowWeights(array){
    //your code here
    const arr = [0, 0];
    for (let i = 0; i < array.length; i++) {
        i % 2 === 0 ? arr[0] += array[i] : arr[1] += array[i];
    }
    return arr;
}

console.log(rowWeights([12,3,12]));