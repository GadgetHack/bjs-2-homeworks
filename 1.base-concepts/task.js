"use strict"
function solveEquation(a, b, c) {
  const discriminant = b ** 2 - 4 * a * c;
  let arr = [];
  
  if (discriminant === 0){
    let root = -b / (2 *a);
    arr.push(root);
  } else if (discriminant > 0){
    let root1 = (-b + Math.sqrt(discriminant)) / ( 2 * a );
    let root2 = (-b - Math.sqrt(discriminant)) / ( 2 * a );
    arr.push(root1, root2);
  }

  return arr;
  
}

function testCase(){
  const a = solveEquation(2, 4, 6);
  console.log(a);
};

// S — тело кредита, 
// P — 1/12 процентной ставки (от 0 до 1), 
// n — количество месяцев, ^ — возведение в степень. 
// Для возведения в степень используйте оператор — ** или функцию Math.pow.

// percent - процентная ставка 
// contribution - сумма первоначального взноса 
// amount - сумма кредита
// countMonths - срок в месяцах

function calcMontlyPayment (S, P, n) {
  return S * (P + (P / (((1 + P)**n) - 1)));
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const numberPercent = Number(percent);
  const numberContribution = Number(contribution);
  const numberAmount = Number(amount);
  const numberCountMonths = Number(countMonths);

  if (
    isNaN(numberPercent) || 
    isNaN(numberContribution) || 
    isNaN(numberAmount) || 
    isNaN(numberCountMonths)
    ) {
    return false;
  }

  const percentMontly = numberPercent / 100 / 12; 
  const amountBody = numberAmount - numberContribution;
  const monthlyPayment = calcMontlyPayment(amountBody, percentMontly, numberCountMonths);
  const totalPayment = monthlyPayment * numberCountMonths;
  const roundedTotalPayment = Number(totalPayment.toFixed(2));

  return roundedTotalPayment;
}
