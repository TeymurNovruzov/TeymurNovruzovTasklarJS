// 26) Verilmiş mətndə təkrarlana sözlərin sayını tapın
function TekrarlanmisSozlerinSayiniTapTN() {
  var cumle = prompt("Bir cumle daxil edin:");
  
  var TemizlenmisCumleTN = cumle.replace(/[^\w\s]|_/g, "").toLowerCase();
  
  var sozler = TemizlenmisCumleTN.split(" ");
  var SozSayiTN = {};
  
  for (var i = 0; i < sozler.length; i++) {
    if (SozSayiTN.hasOwnProperty(sozler[i])) {
      SozSayiTN[sozler[i]]++;
    } else {
      SozSayiTN[sozler[i]] = 1;
    }
  }
  
  var TekrarlananSozlerinSayiTN = 0;
  
  for (var soz in SozSayiTN) {
    if (SozSayiTN.hasOwnProperty(soz) && SozSayiTN[soz] > 1) {
      TekrarlananSozlerinSayiTN++;
    }
  }
  
  console.log("Təkrarlanan sözlərin sayı: " + TekrarlananSozlerinSayiTN);
}

TekrarlanmisSozlerinSayiniTapTN();
