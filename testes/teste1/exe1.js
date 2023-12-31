// Write a function that takes a list of integers as input and returns the sum of all even numbers 
// in the list multiplied by the maximum odd number. If there are no odd numbers, return -1.

const returnSumOfNumbers = (list, maxOdd) => {
    if(!maxOdd) return -1;

    let sum = list.reduce((acumulator, number)=>{
        return acumulator + (number * maxOdd);
    }, 0);

    return sum
}

const findMaxOdd = (list) => {
    let maxOdd = -10000000001;
    for(var i = 0; i < list.length ;i++){
        if(list[i] % 2 == 1 && list[i] > maxOdd){
            maxOdd = list[i];
        }
    }
    return maxOdd;
}

const list1 = [1,2,3,4, 5,6] 
let maxOdd = findMaxOdd(list1);
let sum1 = returnSumOfNumbers(list1, maxOdd);
console.log("esperava 105, o resultado é: ", sum1);