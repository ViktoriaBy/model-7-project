//Write a function that takes in a single word, as a string. 
//It should return True if that word contains only unique characters. Return False otherwise.
 
function hasUniqueChars(str)
{
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j])
                return false;
                return true;
}

console.log(hasUniqueChars("Monday"));

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

//SPACE COMPLEXITY O(1)