// 29) İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək haqqınn hesablanması üçün
let CumleTN = prompt("Bir cumle daxil edin:");

let YeniCumleTN = CumleTN.replace(/ADNA/gi, "ADNSU");

console.log("Duzgun cumle: " + YeniCumleTN);
