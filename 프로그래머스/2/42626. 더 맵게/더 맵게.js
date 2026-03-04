function solution(scoville, K) {
    scoville.sort((a, b) => a - b);
    const mixed = [];
    let scovillePointer = 0;
    let mixedPointer = 0;
    let count = 0;
    
    const pickMin = () => {
        let scovilleMin = scovillePointer < scoville.length ? scoville[scovillePointer] : Infinity;
        let mixedMin = mixedPointer < mixed.length ? mixed[mixedPointer] : Infinity;
        
        if(scovilleMin <= mixedMin){
            scovillePointer++
            return scovilleMin;
        }
        else{
            mixedPointer++;
            return mixedMin;
        }
    }
    
    const peekMin = () => {
        const scovilleMin = scovillePointer < scoville.length ? scoville[scovillePointer] : Infinity;
        const mixedMin = mixedPointer < mixed.length ? mixed[mixedPointer] : Infinity;
    
        
        return scovilleMin <= mixedMin ? scovilleMin : mixedMin;
    }
    
    const remaining = () => scoville.length - scovillePointer + mixed.length - mixedPointer;
    
    while(true){
        if(peekMin() >= K) return count;
        if(remaining() < 2) return -1;
        
        const firstMin = pickMin();
        const secondMin = pickMin();
        const mixedValue = firstMin + secondMin * 2;
        mixed.push(mixedValue);
        count += 1;
    }
}