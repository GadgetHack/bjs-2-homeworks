function getArrayParams(...arr) {
  let min = Infinity; 
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i];
    } 
    
    if (arr[i] < min) {
      min = arr[i];
    }

    sum += arr[i];
  }

  const avg = sum / arr.length;
  const roundedAvg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: roundedAvg };
}

console.log(getArrayParams(-99, 99, 10)) // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5));


/*У мясорубки есть несколько насадок-преобразователей:

насадка суммирования элементов; summElementsWorker
насадка вычисления разницы максимального и минимального элементов; differenceMaxMinWorker
насадка вычисления разницы сумм чётных и нечётных элементов; differenceEvenOddWorker; 
насадка вычисления среднего значения чётных элементов. averageEvenElementsWorker
*/


function summElementsWorker(...arr) {
  let sum = arr.reduce((acc, current) => acc + current, 0);
  return sum;
}
console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Infinity; 
  let max = -Infinity;

  for (let i = 0; i < arr.length; ++i){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    } 
  }
    return max - min; 
}
console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 20 - 10 => 10


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else {

      sumOddElement += arr[i];
     }
    }
   
    return sumEvenElement - sumOddElement;

  }
  console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 266 - 213 => 53
  console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 114 - 383 => -269

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement +=1;
    } 
  }
  
  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // [2, 4, 6, 8] => 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // [64, 10, 40] => 38


function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);

  for (const data of arrOfArr){
    const result = func(...data);
    if (result > maxWorkerResult){
      maxWorkerResult = result;

    }
  }
  return maxWorkerResult;

}

const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];
console.log(makeWork(arr, summElementsWorker)); // максимум из 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // максимум из 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // максимум из 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // максимум из 12.5, 33.333, 72, 62.666 => 72
