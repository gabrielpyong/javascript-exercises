function isLeapYear(year) {
  const isLeap =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  return isLeap
    ? year + " is a leap year."
    : year + " is not a leap year.";
}