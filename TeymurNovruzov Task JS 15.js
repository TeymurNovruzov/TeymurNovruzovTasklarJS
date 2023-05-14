// 15) Verilmiş ədədin bölünəni olan bütün 3 rəqəmli ədədləri çıxarın

var num = parseInt(prompt("Ədəd daxil edin:"));

for (var i = 100; i < 1000; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}
