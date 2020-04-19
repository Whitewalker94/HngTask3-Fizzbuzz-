function divisibleNum(num) {
    var allNumber = [];
    for ( i = 1; i <= num; i++) {
        if(i % 2 === 0) {
            allNumber.push("yu")
        } else if (i % 3 === 0) {
            allNumber.push("gi")
        } else if (i % 5 === 0) {
            allNumber.push("oh")
        } else if (i % 2 === 0 && i % 3 === 0) {
            allNumber.push(`yu-gi`)
        } else if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
            allNumber.push(`yu-gi-oh`) 
        } else {
            allNumber.push(i)
        }       
    }
    
    return allNumber
}
console.log(divisibleNum(100));
console.log(divisibleNum(20));
    