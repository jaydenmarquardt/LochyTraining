// Lesson 12: Conditionals

console.log("=== Lesson 12: Conditionals ===\n");

// TODO: Implement age checker using if/else DONE
// TODO: Implement grade calculator using if/else if
// TODO: Implement day type checker using switch statement
// TODO: Try using ternary operator

// Example if statement:
const temperature = 25;
if (temperature > 30) {
  console.log("It's hot!");
} else {
  console.log("It's nice!");
}

// Your code here:

//AGE CHECKER ONLY ALLOWING FUNNY AGES
const ageInput = document.getElementById('ageInput');
const checkAge = document.getElementById('checkAge');
const outputArea = document.getElementById('ageResult');

checkAge.addEventListener('click', function(){
  const inputAge = ageInput.value;

  if (inputAge == 21 ||inputAge == 67 ||inputAge == 69 ||inputAge == 420) {
    outputArea.textContent = 'Funny Confirmed';
  } else {
    outputArea.textContent = 'Not Funny. Didnt Laugh.';
  }
})

//Grade Calculator
const scoreInput = document.getElementById('scoreInput');
const calculateGrade = document.getElementById('calculateGrade');
const outputArea2 = document.getElementById('gradeResult');

calculateGrade.addEventListener('click', function(){
  const inputScore = scoreInput.value;

  if (inputScore >= 0 && inputScore <= 10) {
    outputArea2.textContent = 'You have scored an F';
  } else if (inputScore >= 11 && inputScore <= 49) {
    outputArea2.textContent = 'You have scored a D';
  } else if (inputScore >= 50 && inputScore <= 69) {
    outputArea2.textContent = 'You have scored a C';
  } else if (inputScore >= 70 && inputScore <= 84) {
    outputArea2.textContent = 'You have scored a B';
  } else if (inputScore >= 84 && inputScore <= 94) {
    outputArea2.textContent = 'You have scored an A';
  } else if (inputScore >= 94 && inputScore <= 100) {
    outputArea2.textContent = 'You have scored a S';
  } else {
    outputArea2.textContent = 'Enter a valid number out of 100';
  }
})

//Day Type Checker
const daySelected = document.getElementById('daySelect');
const dayCheck = document.getElementById('checkDay');
const outputArea3 = document.getElementById('dayResult');

dayCheck.addEventListener('click', function(){
  const day = daySelected.value;

  switch (day) {
    case 1:
      outputArea3.textContent = 'This is hated by the orange cat.';
      break;
    case 2:
      outputArea3.textContent = 'This is a weekday.';
      break;
    case 3:
      outputArea3.textContent = 'This is halfway through the week.';
      break;
    case 4:
      outputArea3.textContent = 'Nerd Day.';
      break;
    case 5:
      outputArea3.textContent = 'TGIF Friday Moment.';
      break;
    case 6:
      outputArea3.textContent = 'The greatest day of the week.';
      break;
    case 7:
      outputArea3.textContent = 'Despair.';
      break;
  }
})