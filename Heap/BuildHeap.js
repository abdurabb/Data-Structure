class MaxHeap {
    constructor() {
        this.values = []
    }

    buildHeap(arr) {
        this.values = arr;
        for (let i = Math.floor((this.values.length / 2) - 1); i >= 0; i--) {
           this.heapfy(i)
        }
        return arr;
    }

    swap(i, j) {
        let temp = this.values[i]
        this.values[i] = this.values[j]
        this.values[j] = temp;
    }

    heapfy(curentIdx) {


        while (curentIdx < this.values.length) {
            let leftChildIdx = 2 * curentIdx + 1;
            let rightChildIdx = 2 * curentIdx + 2;

            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx < this.values.length){
                leftChild = this.values[leftChildIdx]
                if(leftChild > this.values[curentIdx]){
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < this.values.length){
                rightChild = this.values[rightChildIdx]
                if((swap === null && rightChild > this.values[curentIdx])|| (swap != null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }

            if(swap === null ) return;
            this.swap(swap,curentIdx)
            curentIdx = swap;

        }
    }
}

let arr = [89, 3, 10, 100, 34, 2, 12, 90]; // Fixed the array by adding a missing value

var maxHeap = new MaxHeap();
console.log(maxHeap.buildHeap(arr));
