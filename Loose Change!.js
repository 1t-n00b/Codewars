// Remember you have a CHANGE dictionary to work with ;)

function changeCount( change ){
    let map = new Map();
    map.set("penny", 0.01);
    map.set("nickel", 0.05);
    map.set("dime", 0.10);
    map.set("quarter", 0.25);
    map.set("dollar", 1.00);
    let sum= 0;
    let arr = change.split(" ");
    for (let i = 0; i <arr.length ; i++) {
        sum+=map.get(arr[i]);
    }
    return sum.toFixed(2)
}

console.log(changeCount('quarter quarter'));