 function findNeedle(haystack ) {
    let n= 0;
    //  for (let i = 0; i < haystack.length ; i++) {
    //      if (haystack[i]=="needle") n = i;
    //  }
    // return "found the needle at position "+ n.toString();
     for (const haystackElement of haystack) {
          n = haystack.indexOf("needle")
     }
     console.log(n)
     return "found the needle at position "+ n.toString();
}

findNeedle(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]); // 'found the needle at position 3')

