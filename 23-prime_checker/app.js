//Prime Checker

var primeCheckNumber = function(number) {
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return number > 1;
};







































