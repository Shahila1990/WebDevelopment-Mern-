function alphabetPosition1(text) {
    return text
        .toLowerCase()
        .split('')
        .filter(char => char >= 'a' && char <= 'z') // Keep only letters
        .map(char => char.charCodeAt(0) - 96) // Convert to position
        .join(' '); // Join with single spaces
}




function alphabetPosition2(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z]/g, '') // Remove all non-letter characters
        .split('')
        .map(char => char.charCodeAt(0) - 96) // Convert letters to positions
        .join(' '); // Join numbers with a space
}

console.log(alphabetPosition1('hello how are you 143'));
console.log(alphabetPosition2('hello how are you 143'))
