
function add(num1, num2){
    console.log(num1+num2);
}

function sub(num1, num2){
    // if(num1>num2){
    // console.log(num1-num2);
    // } else{
    //     console.log(num2-num1);
    // }

    //using ternery operator
    num1>num1?console.log(num1-num2):console.log(num2-num1);
}

function mul(num1, num2){
    console.log(num1*num2);
}

function div(num1, num2){
    console.log(`Result: ${num1/num2}`);
    console.log(`Reminder: ${num1%num2}`);
}


add(45, 89);
sub(56, 96);
mul(89, 25);
div(125,5);
