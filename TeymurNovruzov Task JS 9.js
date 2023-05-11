// 9) Array elementlərinin cəmini / hasilini tapın
var ElementSayiTN = parseInt(prompt("Elementlerin sayi:"));
var arr = [];
for (var i = 0; i < ElementSayiTN; i++) {
  var DeyerTN = parseInt(prompt((i + 1) + " nomreli element :"));
  arr.push(DeyerTN);
}
var CemTN = arr.reduce(function(a, b) {
  return a + b;
}, 0);
var HasilTN = arr.reduce(function(a, b) {
  return a * b;
}, 1);
console.log("Elementlerin cemi: " + CemTN);
console.log("Elementlerin hasili: " + HasilTN);
