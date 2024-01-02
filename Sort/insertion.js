let arr = [4,3,34,1,2,12,14,-9]

for(let i=1;i<arr.length;i++){
    let j=i-1;
    let current = arr[i]

    while(arr[j] > current){
        arr[j+1] = arr[j]
        j--;
    }

    arr[j+1] = current;
}


console.log('insertion Sort');
console.log(arr);



// for(let i=1;i<arr.length;i++){
//     let j=i-1
//     let current = arr[i]
//     while(arr[j] > current){
//         arr[j+1] = arr[j]
//         j--;
//     }

//     arr[j+1] = current
// }