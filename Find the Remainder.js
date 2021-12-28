function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    if (a !==0  && b!==0) {
        if (a>b) return a%b;
        else   return b%a;
    }
    else return "Divide by zero should return NaN"
}

console.log(remainder(17,0));