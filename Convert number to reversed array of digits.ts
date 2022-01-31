function digitize  (num) {
  // TODO
return num.toString(10).split('').map(int => parseInt(int, 10)).reverse();


}
digitize(465)
