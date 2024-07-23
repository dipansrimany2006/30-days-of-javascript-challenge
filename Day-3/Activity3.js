// //Task 4 ( Determine the days name using Switch Case, user will give only the number of the day)

// function dayShower(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//       console.log(`Day ${dayNumber} is Monday`);
//       break;
//     case 2:
//       console.log(`Day ${dayNumber} is Tuesday`);
//       break;
//     case 3:
//       console.log(`Day ${dayNumber} is Wednesday`);
//       break;
//     case 4:
//       console.log(`Day ${dayNumber} is Thrusday`);
//       break;
//     case 5:
//       console.log(`Day ${dayNumber} is Friday`);
//       break;
//     case 6:
//       console.log(`Day ${dayNumber} is Saturday`);
//       break;
//     case 7:
//       console.log(`Day ${dayNumber} is Sunday`);
//       break;
//     default:
//       console.log("Your enter Day number is Wrong, It must be in between 1-7");
//       break;
//   }
// }

// dayShower(4);
// dayShower(7);
// dayShower(52);

//Task 5 (Grade shower using switch case)

const gradeShower = (numberPercent) => {
  switch (true) {
    case numberPercent >= 0 && numberPercent <= 35:
      console.log(`You get ${numberPercent}% so Your Grade is F`);
      break;
    case numberPercent > 35 && numberPercent <= 60:
      console.log(`You get ${numberPercent}% so Your Grade is C`);
      break;
    case numberPercent > 60 && numberPercent <= 65:
      console.log(`You get ${numberPercent}% so Your Grade is C+`);
      break;
    case numberPercent > 65 && numberPercent <= 70:
      console.log(`You get ${numberPercent}% so Your Grade is B`);
      break;
    case numberPercent > 70 && numberPercent <= 80:
      console.log(`You get ${numberPercent}% so Your Grade is B+`);
      break;
    case numberPercent > 80 && numberPercent <= 85:
      console.log(`You get ${numberPercent}% so Your Grade is A`);
      break;
    case numberPercent > 85 && numberPercent <= 90:
      console.log(`You get ${numberPercent}% so Your Grade is A+`);
      break;
    case numberPercent > 90 && numberPercent <= 100:
      console.log(`You get ${numberPercent}% so Your Grade is AA`);
      break;
    default:
      console.log(
        `Your entered number percentage ${numberPercent} is invalid, Please enter valid number percentage`
      );
      break;
  }
};

gradeShower(25);
gradeShower(40);
gradeShower(89);