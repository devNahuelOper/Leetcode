function findKthLargest(nums, k) {
  let heap = new MaxHeap();
  nums.forEach((num) => heap.insert(num));

  let array = heap.array;
  let targetLength = array.length - (k - 1);

  while (array.length > targetLength) {
    heap.deleteMax();
  }

  return heap.array[1];
}

class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);

    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [this.array[idx], this.array[parentIdx]];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
     if (this.array.length === 2) return this.array.pop();
     if (this.array.length === 1) return null;

     let max = this.array[1];
     this.array[1] = this.array.pop();
     this.siftDown(1);
     return max;
  }

  siftDown(idx) {
   let ary = this.array;

   let leftIdx = this.getLeftChild(idx);
   let rightIdx = this.getRightChild(idx);
   
   let leftVal = ary[leftIdx];
   let rightVal = ary[rightIdx];

   if (!leftVal) leftVal = -Infinity;
   if (!rightVal) rightVal = -Infinity;

   if (ary[idx] > leftVal && ary[idx] > rightVal) return;

   let swapIdx = leftVal < rightVal ? rightIdx : leftIdx;
   [ary[idx], ary[swapIdx]] = [ary[swapIdx], ary[idx]];
   
   this.siftDown(swapIdx);
  }
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));