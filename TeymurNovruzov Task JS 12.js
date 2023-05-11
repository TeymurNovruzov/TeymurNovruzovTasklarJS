// 12) Sözü tərsinə çevirən funksiya yaradın
function TersSozTN() {
  const SozTN = prompt('Sozu daxil edin :  ');
  const SozTersineTN = SozTN.split('').reverse().join('');
  console.log('Soz tersine cevrilerse :  ', SozTersineTN);
}

TersSozTN();
