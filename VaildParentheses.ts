function isValid(s: string): boolean {
    const braces = { ')' : '(', ']' : '[', '}' : '{' }
    let store: string[] = []
    for(let i of s){
    if(i in braces){
    const top =  store.pop() || '#';
        if(braces[i] !== top)
           return false
         }    
        else
         store.push(i)
     
        }
    return store.length === 0
};