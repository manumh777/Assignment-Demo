//FIZZBUZZ

let arr = [];

function fizzbuzz(ARRAY) {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      arr.push("fizz");
    } else if (i % 5 === 0) {
      arr.push("buzz");
    } else if (i % 5 === 0 && i % 3 === 0) {
      arr.push("fizzbuzz");
    } else {
      arr.push(i);
    }
  }
}

fizzbuzz(arr);
console.log(arr);
