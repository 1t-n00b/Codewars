var ownedCatAndDog = function(catYears, dogYears) {
    // Your code here!
    let result = [catYears, dogYears];

    result.forEach(function (v, i) {
        if (v < 15) {
            result[i] = 0;
        } else if (v === 15 || v < 24) {
            result[i] = 1;
        } else {
            if ((v - 15) <= 9) {
                result[i] = 2;
            } else {
                result[i] = parseInt(((v - 24) / (i > 0 ? 5 : 4)) + 2);
            }
        }
    })
    return result
}
console.log(ownedCatAndDog(15,15));
