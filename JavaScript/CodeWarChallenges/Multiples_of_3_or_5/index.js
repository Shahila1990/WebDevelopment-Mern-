function solution(number) {

    if (number < 0) return 0

    let numbers = []
    for (let i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            numbers.push(i)
        }
    }
    console.log(numbers)
    let sum = numbers.reduce((acc, cur) => acc + cur, 0)
    return sum




}

console.log(solution(10))