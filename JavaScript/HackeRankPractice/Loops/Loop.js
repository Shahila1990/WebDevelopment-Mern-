function vowelsAndConsonants(s) {
    const vowels = `aeiouAEIOU`;
    let vowelList = "";
    let consonantList = "";

    for (let char of s ){
        if(vowels.includes(char)){
            vowelList += char + "\n";
        }
        else if (char.match(/[a-zA-Z]/)){
            consonantList += char + "\n"
        }
    }

    console.log(vowelList.trim());
    console.log(consonantList.trim());
    
    


}

vowelsAndConsonants('javascript')

