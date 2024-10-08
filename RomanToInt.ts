function romanToInt(s: string): number {
    const symbol = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;
    for(let i=0; i < s.length; i++){
        let current = symbol[s[i]];
        if(current > symbol[s[i-1]]){
            current -= symbol[s[i-1]] * 2
        }
       num += current
    }
    return num
};