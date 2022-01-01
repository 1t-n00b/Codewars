function well(x){
    let goodCounter = 0;

    for (const idea of x) {
        if (idea === "good") {
            goodCounter += 1;
        }
    }

    return goodCounter === 0 ? "Fail!": goodCounter > 2 ? "I smell a series!" : "Publish!";
}