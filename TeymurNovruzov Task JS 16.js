// 16) Verilmiş ədədin tam ədəd olub olmadığını yoxlayan proqram yazın
const NomreTN = parseFloat(prompt("Eded daxil edin :  "));

const isInteger = Number.isInteger(NomreTN);

if (isInteger) {
  console.log("Tam ededdir.");
} else {
  console.log("Tam eded deyil.");
}

// Meselen. Tam eded : 10, Tam olmayan eded : 10.5
