//Task 1

function positivenegativeChecker(a){
    if (a>0) {
        console.log(`${a} is a positive number`);
    } else if(a==0){
        console.log(`${a} is equal as 0`);
    } else{
        console.log(`${a} is a negative number`);
    }
}

positivenegativeChecker(4);
positivenegativeChecker(0);
positivenegativeChecker(-85);

//Task 2 (Age checker)

const ageChecker=(age)=>{
if(age>18){
console.log("Your age is greater than 18");
}else if(age==18){
    console.log("Your age is equal to 18");
}else{
    console.log("Your age is less than 18");
}
}

ageChecker(78);
ageChecker(18);
ageChecker(5);
