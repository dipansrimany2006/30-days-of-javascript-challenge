// Task 7 (Combining Conditions, Leapyear Checking)

function lreapYearCheck(year){
if((year%4==0 && year%100!=0) || year%400==0){
console.log(`${year} is leapyear`);
}else{
    console.log(`${year} is not leapyear`);
}
}

lreapYearCheck(2013);
lreapYearCheck(1992);