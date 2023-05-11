// 5) 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ədədlərin cəmini tapın
let cemTN = 0;
for (let i = 100; i <= 999; i++) {
  if (i % 7 === 0 && i % 8 === 0) {
    cemTN += i;
  }
}
console.log(cemTN);

