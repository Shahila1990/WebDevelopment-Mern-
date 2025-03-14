// Loop Greedy Method
const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
]

export const toRoman = (num) => {
    if (num < 1 || num > 3999) {

        throw new Error('Number must be between 1 and 3999');
    }

    let romanStr = ''

    for (const { value, symbol } of romanMap) {
        while (num >= value) {
            romanStr += symbol
            num -= value
        }

    }
    return romanStr
};


// Recursive Method

export const toRomanRecursive = (num) => {
    if (num > 3999) { 
        throw new Error('Number must be between 1 and 3999');
    }

    if (num === 0) return ""; 

    for (const { value, symbol } of romanMap) {
        if (num >= value) {
            return symbol + toRomanRecursive(num - value);
        }
    }
};
console.log(toRoman(1987));
console.log(toRomanRecursive(1987))



