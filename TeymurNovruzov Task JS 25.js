// 25) Tələbələrin məlumatlarını özündə saxlayan obyekt yaradın. İmtahandan keçməyən tələbələri obyektdən silin.
function TelebeYaratmaqTN(ad, bal) {
  return {
    ad: ad,
    bal: bal
  };
}
function kecibMi(bal) {
  return bal >= 51;
}
function kecmeyenleriSil(data) {
  for (var i = data.length - 1; i >= 0; i--) {
    if (!kecibMi(data[i].bal)) {
      data.splice(i, 1);
    }
  }
}
var tələbəSayı = parseInt(prompt("Tələbələrin sayını daxil edin:"));
var tələbələr = [];
for (var i = 0; i < tələbəSayı; i++) {
  var ad = prompt((i + 1) + "-ci tələbənin adını daxil edin:");
  var bal = parseInt(prompt((i + 1) + "-ci tələbənin balını daxil edin:"));
  var tələbə = TelebeYaratmaqTN(ad, bal);
  tələbələr.push(tələbə);
}
console.log("Silinməzdən əvvəl tələbələrin məlumatları:");
console.log(tələbələr);
kecmeyenleriSil(tələbələr);
console.log("Silindikdən sonra tələbələrin məlumatları:");
console.log(tələbələr);
