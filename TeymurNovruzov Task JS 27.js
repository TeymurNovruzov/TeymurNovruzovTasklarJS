// 27) Verilmiş 2 mətnin oxşarlıq əmsalını hesablayın. ( 3 ardıcıl sözün eyniliyinə əsasən )
  // 2 eded 3 sozden ibaret cumle daxil edirik.
var cumleTN1 = prompt("Birinci cümləni daxil edin:");
var cumleTN2 = prompt("İkinci cümləni daxil edin:");

var OxsarliqEmsaliTN = OxsarliqEmsaliniHesablaTN(cumleTN1, cumleTN2);
console.log("Oxşarlıq katsayısı: " + OxsarliqEmsaliTN);
function OxsarliqEmsaliniHesablaTN(cumleTN1, cumleTN2) {
  var sozlerTN1 = cumleTN1.split(" ");
  var sozlerTN2 = cumleTN2.split(" ");
    var UygunUcluklerTN = 0;
    for (var i = 0; i < sozlerTN1.length - 2; i++) {
    var UygunSozlerTN1 = sozlerTN1[i] + " " + sozlerTN1[i + 1] + " " + sozlerTN1[i + 2];
        for (var j = 0; j < sozlerTN2.length - 2; j++) {
      var UygunSozlerTN2 = sozlerTN2[j] + " " + sozlerTN2[j + 1] + " " + sozlerTN2[j + 2];
            if (UygunSozlerTN1 === UygunSozlerTN2) {
        UygunUcluklerTN++;
        break;
      }
    }
  }
    var OxsarliqTN = UygunUcluklerTN / (sozlerTN1.length - 2);
    return OxsarliqTN;
}
