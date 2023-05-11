// 20) 2 arrayın eyniliyini yoxlayın
function MuqayiseEtTN(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
const ElementlerTN1 = parseInt(prompt("Birinci massivin elementlerinin sayini daxil edin :  "));
const array1 = [];
for (let i = 0; i < ElementlerTN1; i++) {
  const element = parseInt(prompt(`* ${i + 1} nomreli elementi daxil edin :  `));
  array1.push(element);
}
const ElementlerTN2 = parseInt(prompt("İkinci massivin elementlerinin sayini daxil edin :  "));
const array2 = [];
for (let i = 0; i < ElementlerTN2; i++) {
  const element = parseInt(prompt(`* ${i + 1} nomreli elementi daxil edin :  `));
  array2.push(element);
}
const areArraysSame = MuqayiseEtTN(array1, array2);
if (areArraysSame) {
  console.log("Massivler eynidir.");
} else {
  console.log("Massivler ferqlidir.");
}
