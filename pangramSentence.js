//A pangram is a sentence that contains all the letters of the English alphabet 
//at least once, like “The quick brown fox jumps over the lazy dog.”

//Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str){
    let regex = /([a-z])(?!.*\1)/gi;
    return (str.match(regex) || []).length === 26;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog')); //true
console.log(isPangram('I like cats, but not mice')); //false

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False