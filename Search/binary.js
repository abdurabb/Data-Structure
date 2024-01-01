let arr=[3,4,5,6,7,8,9,10,11,12,13]


function binarySearch(val){
    let start = 0;
    let end = arr.length-1;

    while(start <= end){
        let mid = Math.floor((start+end)/2)

        if(arr[mid] == val){
            return [true,mid]
        }else if(val > arr[mid]){
            start = mid+1
        }else if(val < arr[mid]){
            end=mid-1;
        }
    }

    return false
}

console.log(binarySearch(5));