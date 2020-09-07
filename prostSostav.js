
function newFunction(number) {
    let n = number;
    nextPrime: for (let i = 2; i <= n; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) { console.log(`${i} составное`); continue nextPrime; }
        } console.log(`${i} простое`);
    }
}
newFunction(100);