// 24) 12 ədədi hansı 2 ədədin cəmi ola bilər? ( Bütün kombinasiyaları tapın)
function ReqemKombinasiyasiTN(HedefReqemTN) {
  const KombinasiyalarTN = [];

  for (let i = 1; i <= HedefReqemTN / 2; i++) {
    const j = HedefReqemTN - i;
    KombinasiyalarTN.push([i, j]);
  }

  return KombinasiyalarTN;
}

const HedefReqemTN = 12;
const NomreKombinasiyalariTN = ReqemKombinasiyasiTN(HedefReqemTN);

console.log(NomreKombinasiyalariTN);
