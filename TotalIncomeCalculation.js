// 1. An office need to store information like age, BASIC, DA, TA and year of experiences 
// and designation of each of its employee. DA will be 60% of basic and TA will be 10% of basic. 
// If an employee has more than 5 years of experience then organization will give Rs. 1200/- extra. 
// Model the system in OOP technology so that it can display each record of all employees with total income. 
// Also display amount of cost incurred by the office to pay salary to each employee. 
// Assume there are 3 employees.


// Test case:
// Input:
// Enter following information of the employee:- Age: 38
// Basic: 12000
// Year_Exp: 8
// Age: 41
// Basic: 14000
// Year_Exp: 4

// Age: 38
// Basic: 8000
// Year_Exp: 9

// Output: Employee-1 Age: 38
// Basic: 12000

// Year_Exp: 8
// Total salary:21600

// Employee-2 Age: 41
// Basic: 14000
// Year_Exp: 4
// Total salary: 23800

// Employee-3 Age: 38
// Basic: 8000
// Year_Exp: 9
// Total salary: 14800

// Now the solution is here ->

function TotalIncomeCalculation(basicSalary,yearEXP){
console.log(daCalculation(basicSalary) + taCalculation(basicSalary) + extraAdded(yearEXP,basicSalary));
}

function daCalculation(basicSalary){
    let da;
da= basicSalary*(60.00/100);
return da;
}

function taCalculation(basicSalary){
    let ta;
    ta = basicSalary*(10.00/100);
    return ta;
}

function extraAdded(yearEXP,basicSalary){
    if(yearEXP>5){
        basicSalary= basicSalary+1200;
        return basicSalary;
    }else{
        return basicSalary;
    }
}

TotalIncomeCalculation(12000,8);
TotalIncomeCalculation(14000,4);
TotalIncomeCalculation(8000,9);