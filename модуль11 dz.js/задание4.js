function printNumbers(start, end) {
    setInterval(() => {
    if (start <= end) {
    console.log(start);
    start++;
    } else {
    clearInterval(intervalId);
    }
    }, 1000);
   }
   
   // Пример использования
   const start = 5;
   const end = 8;
   const intervalId = setInterval(() => {
    console.log(start);
    start++;
    if (start > end) {
    clearInterval(intervalId);
    }
   }, 1000);