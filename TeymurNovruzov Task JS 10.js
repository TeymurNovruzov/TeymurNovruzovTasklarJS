// 10) Array elementlərinin içində təkrarlanan elementləri silin
var ElementlerinSayiTN = parseInt(prompt("Elementlerin sayini daxil edin :  "));

var ElementlerTN = [];

for (var i = 0; i < ElementlerinSayiTN; i++) {
  var ElementTN = prompt((i + 1) + " nomreli elementi daxil edin :  ");
  ElementlerTN.push(ElementTN);
}

var newArray = Array.from(new Set(ElementlerTN));

console.log("Tekrarlanan elementler silinenden sonra :  ", newArray);
