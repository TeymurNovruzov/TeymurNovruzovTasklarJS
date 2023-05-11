// 18) Verilmiş cümlədə artıq boşluq simvollarını silin

var CumleTN = prompt("Cumleni daxil edin :  ");

var AlinanCumleTN = CumleTN.replace(/\s+/g, ' ');

console.log("Alinan cumle :  " + AlinanCumleTN);
