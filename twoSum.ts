function twoSum(nums: number[], target: number): number[] {
    let a = {}
    let i = 0
    for(let num of nums){
        if (a[target - num]){
                 return [i, a[target - num]-1]   
        }
        i++
        a[num] = i 
     }
    };