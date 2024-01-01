let arr = [20,30,40,50,60,70]

function binaryRec(val,start,end){
    let middle = Math.floor((start+end) /2)

    if(arr[middle] === val){
        return [true,middle]
    }else if(val > arr[middle]){
       return binaryRec(val,middle+1,end)
    }else if(val < arr[middle]){
      return  binaryRec(val,start,middle-1)
    }
}

console.log(binaryRec(70,0,arr.length-1));