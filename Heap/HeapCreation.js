class MinHeap{
    constructor(){
        this.values=[]
    }

    insert(val){
        this.values.push(val)
        this.bubbleUp()
    }

    swap(i,j){
        let temp = this.values[i]
        this.values[i] = this.values[j]
        this.values[j] = temp;
    }

    bubbleUp(){
        let idx = this.values.length-1;
        let element = this.values[idx]

        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2)
            let parent = this.values[parentIdx]

            if(parent < element) return;

            this.swap(idx,parentIdx)
            idx = parentIdx
        }
    }
    
}

var heap = new MinHeap()

heap.insert(25)
heap.insert(22)
heap.insert(12)
heap.insert(30)
heap.insert(10)
heap.insert(5)
heap.insert(3)




console.log(heap.values);