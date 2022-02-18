//Write a function that takes in an array of numbers. 
//The function should return True if any two numberss in list sum to 0, and false otherwise.


function addToZero(arr){

    for(let n = 0; n < arr.length; n++){

        let tempN = arr[n]

        for(let i = 0; i < arr.length; i++)
        {
            if(i + tempN == 0){
                console.log("returning true")
                return true
            }
        }
    }
    
    console.log("returning false")
    return false
}



addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

//SPACE COMPLEXITY O(n^2)