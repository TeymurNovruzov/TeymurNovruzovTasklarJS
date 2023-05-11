// 13) Cümləni tərsinə çevirən funksiya
function TersCumleTN() {
  const CumleTN = prompt('Cumleni daxil edin :  ');
  const SozTN = CumleTN.split(' ');
  const TersSozlerTN = SozTN.reverse();
  const CumleninTersiTN = TersSozlerTN.join(' ');
  console.log('Ters cumle :  ', CumleninTersiTN);
}

TersCumleTN();
