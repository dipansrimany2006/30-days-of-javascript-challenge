// Task 7 (Pattern Printing)
function pattern(n){
    for (let i = 1; i <= n; i++) {
        let str =" ";
        for (let y = 1; y <= i; y++) {
            str += "*";
        }
        console.log(str);
    }
}

pattern(10);