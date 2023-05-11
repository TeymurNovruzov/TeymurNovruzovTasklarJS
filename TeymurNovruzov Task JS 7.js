// 7) 1-dən 100-ə qədər sadə və mürəkkəb ədədləri tapın
function SadeTN(ededTN) {
  if (ededTN < 2) {
    return false;
  }
    for (let i = 2; i <= Math.sqrt(ededTN); i++) {
    if (ededTN % i === 0) {
      return false;
    }
  }
    return true;
}
function MurekkebTN(ededTN) {
  return Math.sqrt(ededTN) % 1 !== 0;
}
function findNumbers() {
  const SadeEdedlerTN = [];
  const MurekkebEdedlerTN = [];
    for (let i = 1; i <= 100; i++) {
    if (SadeTN(i)) {
      SadeEdedlerTN.push(i);
    } else if (MurekkebTN(i)) {
      MurekkebEdedlerTN.push(i);
    }
  }
    console.log('Sade ededler:', SadeEdedlerTN);
  console.log('Murekkeb ededler:', MurekkebEdedlerTN);
}
findNumbers();
