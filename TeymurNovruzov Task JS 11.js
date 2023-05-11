// 11) Array elementlərində ədəd olmayan elementləri silin
var ElementlerinSayiTN = parseInt(prompt("Elementlerin sayini daxil edin :"));

var array = [];

for (var i = 0; i < ElementlerinSayiTN; i++) {
  var ElementTN = prompt((i + 1) + " nomreli elementi daxil edin :  ");
  array.push(ElementTN);
}

array = array.filter(function(ElementTN) {
  return !isNaN(parseFloat(ElementTN));
});

console.log("Yenilenmis massiv :  ", array);
