function last(x){
    return x.split(' ').sort((a, b) => a.slice(-1).localeCompare(b.slice(-1)))

}


console.log(last('what time are we climbing up the volcano'));
//['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])