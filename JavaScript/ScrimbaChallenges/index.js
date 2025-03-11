function panic(sentence){
    let upperCase = sentence.toUpperCase()

    let words =  upperCase.split(" ")

    let panicked = words.length > 1 ? words.join(" 😱 ") : words[0]

    return panicked + "!"
}

console.log(panic("I'm almost out of coffee"));
