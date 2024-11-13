function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function printPrimeStatus(num) {
    if (num > 1000) {
      console.log("Данные неверны");
    } else if (num === 0 || num === 1) {
      console.log("Число не является простым");
    } else if (isPrime(num)) {
      console.log("Простое число");
    } else {
      console.log("Число не является простым");
    }
  }
  
  // Вызов функции с тестовыми значениям
  printPrimeStatus(0);