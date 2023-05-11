// 28) İşçilərin 1 saatlıq əmək haqqı və həftəlik iş saatları verildikdə, aylıq əmək haqqınn hesablanması üçün
function AyliqMaasiHesablaTN(SaatliqMaasTN, HeftelikSaatlarTN) {
  const AylıqSaatlarTN = HeftelikSaatlarTN * 4; // Ayda 4 həftə olduğu nəzərə alınaraq

  const AyliqMaasTN = SaatliqMaasTN * AylıqSaatlarTN;

  return AyliqMaasTN;
}

const SaatliqMaasTN = parseFloat(prompt("Saatlıq maşış daxil edin:"));
const HeftelikSaatlarTN = parseFloat(prompt("Həftəlik iş saatlarını daxil edin:"));

const AyliqMaasTN = AyliqMaasiHesablaTN(SaatliqMaasTN, HeftelikSaatlarTN);

console.log("Aylıq maaş: $" + AyliqMaasTN.toFixed(2));
