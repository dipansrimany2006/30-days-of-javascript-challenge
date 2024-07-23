// Task 3 (Get out the largest number among the 3 numbers using nested If Else Statement)

function largestNumberChecker(a,b,c){
    if(a>b){
        a>c?console.log(`${a} is the greatest number`):console.log(`${c} is the greatest number`);
    }else if(b>c){
        b>a?console.log(`${b} is the greatest number`):console.log(`${a} is the greatest number`);
    }else if(c>a){
        c>b?console.log(`${c} is the greatest number`):console.log(`${b} is the greatest number`);
    }
}

largestNumberChecker(45,25,89);
largestNumberChecker(12,123,58);
largestNumberChecker(458,45,256);