// Task 5 (Print numbers from 1 to 5 using do-while loop)

let number = 1;

do {
    console.log(number);
    number++;
} while (number<=5);

// task 6 (Calculate the  factorial number using do while loop)


function factorial(n) {
    let result = 1;
    let i = 1;
  
    do {
      result *= i;
      i++;
    } while (i <= n);
  
    return result;
  }
  
  console.log(factorial(5)); // Output: 120