function divisibleBy(numbers, divisor){
    return numbers.filter(function( index) {
        return index % divisor === 0});
}