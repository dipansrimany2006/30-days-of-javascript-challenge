//Task 4 ( Determine the days name using Switch Case, user will give only the number of the day)

function dayShower(dayNumber){
    switch (dayNumber) {
        case 1:
            console.log(`Day ${dayNumber} is Monday`);
            break;
        case 2:
            console.log(`Day ${dayNumber} is Tuesday`);
            break;
        case 3:
            console.log(`Day ${dayNumber} is Wednesday`);
            break;
        case 4:
            console.log(`Day ${dayNumber} is Thrusday`);
            break;
        case 5:
            console.log(`Day ${dayNumber} is Friday`);
            break;
        case 6:
            console.log(`Day ${dayNumber} is Saturday`);
            break;
        case 7:
            console.log(`Day ${dayNumber} is Sunday`);
            break;    
        default:
            console.log("Your enter Day number is Wrong, It must be in between 1-7");
            break;
    }
}

dayShower(4);
dayShower(7);
dayShower(52);