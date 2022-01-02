function defineSuit(card) {
    // good luck
    switch (card[1]) {
        case "♣" : return   "clubs"
        case "♠" : return   "spades"
        case "♦" : return   "diamonds"
        case "♥" : return   "hearts"
    }
}
console.log(defineSuit('3♣'));