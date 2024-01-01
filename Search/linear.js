let arr=[20,3,43,2,23,90,87]

function linearSearch(val){
    for(let i=0;i<arr.length;i++){
        if(arr[i] == val){
            return [true,i];
        }
    }

    return false;
}

console.log(linearSearch(2));