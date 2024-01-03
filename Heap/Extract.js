class MinHeap{
    constructor(){
        this.values = []
    }

    insert(val){
        this.values.push(val)
        this.bubbleUp()
    }

    swap(i,j){
        let temp = this.values[i]
        this.values[i] = this.values[j]
        this.values[j] =temp;
    }


    bubbleUp(){
        let idx = this.values.length-1;
        let element  = this.values[idx]

        while(idx > 0){
            let parentIdx = Math.floor(idx-1/2)
            let parentElement = this.values[parentIdx]

            if(parentElement < element) return

            this.swap(idx,parentIdx)
            idx = parentIdx
        }

    }

    extractMin(){
        let end = this.values.pop()
        if(this.values.length >0){
            this.values[0] = end;
            this.bubbleDown()
            return; 
        }
    }

    bubbleDown(){
        let idx = 0;
        let element = this.values[idx]

        while(idx < this.values.length){
            let leftChildIdx = 2*idx+1;
            let rightChildIdx = 2*idx+2;

            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < this.values.length){
                leftChild = this.values[leftChildIdx]
                if(leftChild < element){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < this.values.length){
                rightChild = this.values[rightChildIdx]

                if((swap === null && rightChild < element)|| (swap != null && rightChild < leftChild)) 
                {
                    swap = rightChildIdx;
                }
            }

            if(swap == null) return;
            this.swap(swap,idx)
            idx= swap;
        }
    }
}

var heap = new MinHeap()
heap.insert(10)
heap.insert(1)
heap.insert(-1)
heap.insert(80)
heap.insert(50)
heap.insert(100)
heap.insert(-100)
heap.insert(-2)

console.log(heap.values);
heap.extractMin()

console.log(heap.values);