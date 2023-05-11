// 22) 2 tarix arasındakı intervalı tapın
var BirinciTarixiDaxilEdinTN = prompt('Birinci tarixi daxil edin (gg-aa-iiii):');
var GununHissesiTN = BirinciTarixiDaxilEdinTN.split('-');
var BaslangicTarixTN = new Date(GununHissesiTN[2], GununHissesiTN[1] - 1, GununHissesiTN[0]);

var IkinciTarixiDaxilEdinTN = prompt('Ikinci tarixi daxil edin (gg-aa-iiii):');
var GununSonHissesiTN = IkinciTarixiDaxilEdinTN.split('-');
var BitmeTarixiTN = new Date(GununSonHissesiTN[2], GununSonHissesiTN[1] - 1, GununSonHissesiTN[0]);

var interval = BitmeTarixiTN - BaslangicTarixTN;

var SaniyeTN = Math.floor(interval / 1000);
var DeqiqeTN = Math.floor(SaniyeTN / 60);
var SaatTN = Math.floor(DeqiqeTN / 60);
var GunTN = Math.floor(SaatTN / 24);

console.log('Interval = ' + GunTN + ' gun ');
