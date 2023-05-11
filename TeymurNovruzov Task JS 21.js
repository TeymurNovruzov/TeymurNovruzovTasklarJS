// 21) Array elementlərini sort metodundan istifadə etmədən artma / azalma istiqamətinə görə sıralayın
function ArtmaSirasiylaDuzTN(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function AzalmaSirasiylaDuzTN(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const ElementlerinSayiTN = parseInt(prompt("Elementlerin sayini daxil edin :  "));
const elements = [];
for (let i = 0; i < ElementlerinSayiTN; i++) {
  const element = parseInt(prompt(`* ${i + 1} nomreli elementi daxil edin :  `));
  elements.push(element);
}
const SiraylaDuzulmusArtimTN = ArtmaSirasiylaDuzTN(elements.slice());
const SiraylaDuzulmusAzalmaTN = AzalmaSirasiylaDuzTN(elements.slice());
console.log("Artma sirasiyla :  ", SiraylaDuzulmusArtimTN);
console.log("Azalma sirasiyla :  ", SiraylaDuzulmusAzalmaTN);
