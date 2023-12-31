// Write a function that takes a 2D array of integers and returns a dictionary where keys
// are the row indices and values are the sums of the corresponding rows.

const toDictionary = (matrix) => {
    const dictionary = new Map();

    matrix.forEach(row => {
        let acumulator = 0;
        if(row.length > 0) {
            row.forEach((value, i )=>{
                if(i != 0){
                    acumulator+=value; 
                }
            });
            let thereIs = dictionary.get(row[0]);
            if(thereIs){
                dictionary.set(row[0], acumulator+thereIs);
            }else{
                dictionary.set(row[0], acumulator);
            }
        }   
    });

    return dictionary;
};


console.log(toDictionary([[1,2,3,4,5], [2,3,45,6,7]]));

console.log(toDictionary([[1,2,3,4,5], [1,2]]));



