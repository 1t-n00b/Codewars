function pillars(num_pill, dist, width) {
    // your code here
    if (num_pill<2) return 0;
    else if (num_pill===2) return dist*100;
    else return (num_pill-1)*dist*100 + (num_pill-1)*width-width;
}
console.log(pillars(11,15,30));