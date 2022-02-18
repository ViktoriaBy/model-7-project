//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(arr){
    let lgWord = 0
    for(i = 0; i < arr.length; i++){
        strArray = arr[i].trim().split('')
        if(strArray.length > lgWord){
            lgWord = strArray.length
        }
    }
    return lgWord
}
console.log(findLongestWord(["hi", "hello"]))





findLongestWord(["hi", "hello"]);
// -> 5

//SPACE COMPLEXITY O(n)