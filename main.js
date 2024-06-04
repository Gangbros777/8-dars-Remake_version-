let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
let Juft = [];
let Toq = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    Juft.push(numbers[i]);
  } else {
    Toq.push(numbers[i]);
  }
}

console.log("Juft sonlar: ", Juft);
console.log("Toq sonlar: ", Toq);