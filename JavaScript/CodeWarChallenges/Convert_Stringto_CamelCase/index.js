function toCamelCase(str) {

    if (!str) return "";

    let words = str.split(/[-_,\s]+/);
    console.log(words);

    let camelCaseStr = words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")
    return camelCaseStr

}

console.log(toCamelCase("the-stealth-warrior"))