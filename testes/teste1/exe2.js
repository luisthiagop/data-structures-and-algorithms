// Write a function that takes a string as input and returns a new string with each word reversed.

const reverseString = (str) => {
    let newStr = "";
    for(var i = (str.length-1) ; i >=0 ; i--){
        newStr = newStr + str[i];
    }

    return newStr;
}


console.log(reverseString("abc"));
console.log(reverseString("a"));
console.log(reverseString(""));
console.log(reverseString("a0a0a0a0"));



