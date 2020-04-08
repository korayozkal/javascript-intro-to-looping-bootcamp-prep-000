function forLoop(array) {
    for (let i = 1; i <= 25; i++) {
        array.push(`I am ${i} strange ${i == 0 ? 'loop' : 'loops'}.`)
    }
    return array;
}

const result = forLoop([]);
console.log(result);