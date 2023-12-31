
const sumOf = (vect)=>{
    return vect.reduce((acc, val)=>{
        return val%2==0?val+acc:acc;
    }, 0)
}


console.log(sumOf([1, 2, 3, 4, 5, 6]));