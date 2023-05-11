// 14) Cümləni tərsinə çevirən funksiya
function EdedSozeCevirmeTN(num) {
  const TeklerTN = [
    "", "bir", "iki", "üç", "dörd", "beş", "altı", "yeddi", "səkkiz", "doqquz"
  ];
  const OnluqlarTN = [
    "", "on", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"
  ];
  const YuzluklerTN = [
    "", "yüz", "iki yüz", "üç yüz", "dörd yüz", "beş yüz", "altı yüz", "yeddi yüz", "səkkiz yüz", "doqquz yüz"
  ];
  if (num === 0) {
    return "sıfır";
  }
  let result = "";
  if (num < 0) {
    result += "mənfi ";
    num = Math.abs(num);
  }
  if (num >= 1000000000) {
    const billions = Math.floor(num / 1000000000);
    num %= 1000000000;
    result += EdedSozeCevirmeTN(billions) + " milyard ";
  }
  if (num >= 1000000) {
    const millions = Math.floor(num / 1000000);
    num %= 1000000;
    result += EdedSozeCevirmeTN(millions) + " milyon ";
  }
  if (num >= 1000) {
    const thousands = Math.floor(num / 1000);
    num %= 1000;
    result += EdedSozeCevirmeTN(thousands) + " min ";
  }
  if (num >= 100) {
    const numYuzluklerTN = Math.floor(num / 100);
    num %= 100;
    result += YuzluklerTN[numYuzluklerTN] + " ";
  }
  if (num >= 10) {
    const numOnluqlarTN = Math.floor(num / 10);
    num %= 10;
    result += OnluqlarTN[numOnluqlarTN] + " ";
  }
  if (num > 0) {
    result += TeklerTN[num] + " ";
  }
  return result.trim();
}
const userInput = prompt("Eded daxil edin :  ");
const number = parseInt(userInput);
if (isNaN(number)) {
  console.log("Sehv eded daxil edilib.");
} else {
  const SozlerTN = EdedSozeCevirmeTN(number);
  console.log(`Sozlerle ifadede :  ${SozlerTN}`);
}
