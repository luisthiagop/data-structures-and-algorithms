const is_palindrome = (str) => {
    let new_str = str.toLowerCase().replaceAll(" ","");
    
    return new_str == new_str.split("").reverse().join('');

}

console.log(is_palindrome("aaaa"));
console.log(is_palindrome("abc"));
console.log(is_palindrome("A man a plan a canal Panama"));