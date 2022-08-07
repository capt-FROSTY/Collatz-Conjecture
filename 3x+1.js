let num = prompt("Enter the number: ");
if (num < 1) {
  throw new Error("Only positive numbers are allowed");
}
let count = 0;

console.log("Sequence starts");
console.log(num);

while (num > 1) {
  num = num % 2 === 0 ? num / 2 : 3 * num + 1;

  console.log(num);

  count++;
}

console.log("Sequence ends");
console.log("Count", count);

