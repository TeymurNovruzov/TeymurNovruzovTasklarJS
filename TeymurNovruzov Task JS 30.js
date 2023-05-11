// 30) 3 rəqəmli ədədin rəqəmləri cəmini tapı
const say = prompt("3 rəqəmli bir ədəd  daxil edin:");

const EdedTN = parseInt(say);

const BirinciReqemTN = Math.floor(EdedTN / 100); 
const IkinciReqemTN = Math.floor((EdedTN % 100) / 10); 
const UcuncuReqemTN = EdedTN % 10; 
const CemTN = BirinciReqemTN + IkinciReqemTN + UcuncuReqemTN;

console.log("Rəqəmlərin cəmi:", CemTN);
