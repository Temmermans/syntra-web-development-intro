function computeFactorialLoop(num) {
  var result = 1;

  for (var i = 2; i <= num; i++) {
    console.log(`result = ${result} * ${i} (${result * i})`);
    result *= i;
  }

  return result;
}

computeFactorialLoop(5);

function computeFactorialRecursion(num) {
  if (num === 1) {
    console.log("hitting the base case");
    return 1;
  } else {
    console.log(`returning ${num} * computeFactorial(${num - 1})`);
    return num * computeFactorial(num - 1);
  }
}

computeFactorialRecursion(5);
