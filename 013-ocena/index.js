// | punkty | ocena |
// | ------ | ----- |
// | 95-100 | 6     |
// | 85-94  | 5     |
// | 60-84  | 4     |
// | 40-59  | 3     |
// | 0 - 39 | 2     |

function calculateGrade(score) {
  if (score > 94) {
    return 6;
  }

  if (score > 84) {
    return 5;
  }

  if (score > 59) {
    return 4;
  }

  if (score > 39) {
    return 3;
  }

  return 2;
}

console.log(calculateGrade(100));
console.log(calculateGrade(85));
console.log(calculateGrade(84));
console.log(calculateGrade(59));
console.log(calculateGrade(39));
console.log(calculateGrade(20));
