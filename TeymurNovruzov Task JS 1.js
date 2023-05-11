// 1) 1-dən 10-a qədər ədədlərin cəmini (hasilini) tapın.
var cemTN = 0;
var HasilTN = 1;

for (var i = 1; i <= 10; i++) {
  cemTN += i;
  HasilTN *= i;
}

console.log("Cem:", cemTN);
console.log("Hasil:", HasilTN);
