// 8) Verilmiş 3 ədəddən ən böyük və ən kiçiyini tapın
function BoyukEdediTapTN(ededlerTN) {
  let BoyukEdedTN = ededlerTN[0];
  
  for (let i = 1; i < ededlerTN.length; i++) {
    if (ededlerTN[i] > BoyukEdedTN) {
      BoyukEdedTN = ededlerTN[i];
    }
  }
    return BoyukEdedTN;
}
function KicikEdediTapTN(ededlerTN) {
  let KicikEdedTN = ededlerTN[0];
    for (let i = 1; i < ededlerTN.length; i++) {
    if (ededlerTN[i] < KicikEdedTN) {
      KicikEdedTN = ededlerTN[i];
    }
  }
    return KicikEdedTN;
}
const ededTN1 = parseFloat(prompt("1. eded:"));
const ededTN2 = parseFloat(prompt("2. eded:"));
const ededTN3 = parseFloat(prompt("3. eded:"));
const ededlerTN = [ededTN1, ededTN2, ededTN3];
const EnBoyukEdedTN = BoyukEdediTapTN(ededlerTN);
const EnKicikEdedTN = KicikEdediTapTN(ededlerTN);
console.log("En boyuk eded: " + EnBoyukEdedTN);
console.log("En kicik eded: " + EnKicikEdedTN);
