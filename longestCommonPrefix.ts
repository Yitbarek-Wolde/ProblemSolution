function longestCommonPrefix(strs: string[]): string {
    strs = strs.sort()
    let left = strs[0]
    let right = strs[strs.length-1]
    let common = ''
    for(let i = 0; i < Math.min(left.length, right.length); i++){
      if(left[i] != right[i]) return common;
      common += left[i];          
        }
    
    return common
};