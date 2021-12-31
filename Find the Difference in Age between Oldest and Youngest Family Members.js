function differenceInAges(ages){
    return [Math.min.apply(null,ages),Math.max.apply(null,ages),Math.max.apply(null,ages)-Math.min.apply(null,ages)]

}
console.log(differenceInAges([1,2,6,4984,5]))