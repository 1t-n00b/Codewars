function filter_list(l) {
    // Return a new array with the strings filtered out
   return   l.filter( x => typeof(x)=="number");

}
console.log(filter_list([1,2,'aasf','1','123',123]));