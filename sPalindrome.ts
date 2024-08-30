function isPalindrome(x: number): boolean {
    if(x < 0) return false
    let y = x
    let z = 0
    while(y > 0){
        z = (z * 10) + (y % 10) 
        y = Math.floor( y / 10)
    }
    return z === x
};