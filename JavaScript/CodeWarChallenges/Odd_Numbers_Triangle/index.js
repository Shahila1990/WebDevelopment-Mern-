function rowSumOddNumbers(n) {
    // TODO
    const startNumber = n * n - n + 1;

    // Generate the numbers in the nth row
    const numbers = [];
    for (let i = 0; i < n; i++) {
        numbers.push(startNumber + 2 * i);
    }

    // Calculate the sum of the numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    // Format the output
    //return sum
    const numbersString = numbers.join(" + ");
    return `${n} --> ${numbersString} = ${sum}`;
    
    

}

console.log(rowSumOddNumbers(4))