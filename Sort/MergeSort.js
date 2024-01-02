let arr=[90,76,45,3,43,23,10,1]

function mergeSort(arr){
  if(arr.length <2){
    return arr;
  }

  let mid = Math.floor(arr.length/2)
  let left =arr.slice(0,mid)
  let right = arr.slice(mid)

  return merg(mergeSort(left),mergeSort(right))
}

function merg(arr1,arr2){
    let result =[]
    let i=0;
    let j=0;

    while(i<arr1.length && j< arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++;
        }else{
            result.push(arr2[j])
            j++;
        }
    }

    while(i<arr1.length){
        result.push(arr1[i])
        i++;
    }

    while(j<arr2.length){
        result.push(arr2[j])
        j++;
    }

    return result;
}

console.log(`Merge Sort ${mergeSort(arr)}`);