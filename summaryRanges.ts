function summaryRanges(nums: number[]): string[] {
    let collect: string = '';
    for(let i = 0; i < nums.length;  i++){
        if(nums[i]+1 === nums[i+1]){
            if(nums[i]-1 !== nums[i-1])
                collect += nums[i] + "->"
         }
        else{
                collect += nums[i] + " " 
        }
    }
    const arr: string[] = collect.split(" ")
    arr.pop()
    return arr
};