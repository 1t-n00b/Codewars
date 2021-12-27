function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    // let arr = dna.split("");
    // let str = "";
    // for (let i = 0; i <arr.length ; i++) {
    //     if (arr[i]==="T"){
    //         arr[i] ="U";
    //     }
    //     str = str+ arr[i];
    // }
    return dna.replace(/T/g, 'U');
}

console.log(DNAtoRNA("GCAT"));