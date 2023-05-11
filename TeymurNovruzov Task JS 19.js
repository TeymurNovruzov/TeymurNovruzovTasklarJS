// 19) Verilmiş mətndə cümlənin ilk sözündə olan baş hərfin böyük yazılmasını təmin edən proqram yazın

var CumleTN = prompt("Cumleni daxil edin :  ");

var AlinanCumleTN = CumleTN.charAt(0).toUpperCase() + CumleTN.slice(1);

console.log("Alinan cumle :  " + AlinanCumleTN);
