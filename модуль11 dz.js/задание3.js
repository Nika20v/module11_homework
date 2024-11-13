function createSumFunction(num) {
    return function(anotherNum) {
    return num + anotherNum;
    };
   }
   
   const sumFunction = createSumFunction(9);
   console.log(sumFunction(3));