function productExceptSelf(nums: number[]): number[] {
    let i = 0, j = 0, arr: number[] = [], prod: number | null = null;
    if(nums.length === 2) return [nums[1], nums[0]] 
    while(i < nums.length){
        console.log(prod)
        if(i !== j){
            if(prod === null)
                prod = nums[j]
            else
                prod *= nums[j]
        }
        if(j === nums.length -1){
            arr.push(Math.abs(prod))
            prod = null
            j = 0
            i++ 
        }
        j++
    }
    return arr
};
