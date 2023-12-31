let binarySearch = (vect, target) => {
    let left = 0;
    let right = vect.length - 1;

    while(left <= right){
        let middle = Math.floor((right+left)/2);
        if(vect[middle] == target) return middle;
        if(vect[middle] < target){
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch([0,2,34,100],100));