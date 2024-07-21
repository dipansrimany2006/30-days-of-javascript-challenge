// Task 11

let var1 = 8, var2 = 5;

function andOperatorCheckor(a,b){
    if(a == 8 && b == 5){
        console.log('Both contidions are correct');
    }else{
        console.log('Any one condition is correct or none are correct');
    }
}

andOperatorCheckor(var1,var2);

var1 = 5, var2 = 3;

andOperatorCheckor(var1,var2);

//Task 12  (Or operator)

function orOperator(a,b){
if(a==5||b==7){
    console.log('Any one is correct or Both conditions are correct');
}else{
    console.log('None are correct');
}
}

orOperator(8,6);
orOperator(5,9);