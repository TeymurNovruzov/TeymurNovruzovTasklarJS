// 2) 1-dən 100-ə qədər cüt ədədləri / onların cəmini / hasilini tapın
let cemTN = 0;
let HasilTN = 1;

for (let i = 2; i <= 100; i += 2) {
  cemTN += i;
  HasilTN *= i;
}

console.log("Cem :", cemTN);
console.log("Hasil:", HasilTN);
