const fibonacci = function(n) {
    if(Number(n) < 0) return "OOPS";
    if(Number(n) <= 1) return Number(n);
    
    let prev = 0;
    let curr = 1;
    
    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
