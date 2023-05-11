// 6) 3 rəqəmli ədədlərdən 7 və 8-ə bölünən ilk ədədi tapın
for (let i = 100; i <= 999; i++) {
  if (i % 7 === 0 && i % 8 === 0) {
    console.log(i);
    break;
  }
}
