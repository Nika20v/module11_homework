function countEvenAndOddElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null) {
        zeroCount++;
      } else if (Number.isInteger(arr[i]) && arr[i] % 2 === 0) {
        evenCount++;
      } else if (Number.isInteger(arr[i]) && arr[i] % 2 !== 0) {
        oddCount++;
      }
    }
  
    console.log(`Количество четных элементов: ${evenCount}`);
    console.log(`Количество нечетных элементов: ${oddCount}`);
    console.log(`Количество нулевых элементов: ${zeroCount}`);
  }
  
  // Вызов функции с тестовым массивом
  const testArray = [1, 2, 3, 4, null, 6, 7, 8, 9, 0];
  countEvenAndOddElements(testArray);