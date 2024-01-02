let arr = [4,3,34,1,2,12,14,90]

for(let i=0;i<arr.length;i++){
    let min =i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[j] < arr[min]){
            min = j
        }
    }

    [arr[i],arr[min]] = [arr[min],arr[i]]
}

console.log('Selection Sort');

console.log(arr);