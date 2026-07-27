function sum(...numbers) {

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log(sum(10, 20, 30));
console.log(sum(20, 70, 80));
console.log(sum(30, 60, 90));
console.log(sum(40, 50, 20));