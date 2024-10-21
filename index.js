"Use strict";

// function skirtumas(a, b) {
//     let rezultatas = a - b;
//     console.log("Skirtumas:", rezultatas);
//     return rezultatas;
// }

//  Funkcijos iškvietimas pavyzdys
// skirtumas(10, 4);

// function gautiSezona(menesis) {
//     let sezonas;

//     if (menesis >= 3 && menesis <= 5) {
//         sezonas = "Pavasaris";
//     } else if (menesis >= 6 && menesis <= 8) {
//         sezonas = "Vasara";
//     } else if (menesis >= 9 && menesis <= 11) {
//         sezonas = "Ruduo";
//     } else if (menesis === 12 || menesis === 1 || menesis === 2) {
//         sezonas = "Žiema";
//     } else {
//         sezonas = "Neteisingas mėnuo";
//     }

//     console.log("Sezonas:", sezonas);
//     return sezonas;
// }

// Funkcijos iškvietimas pavyzdys
// gautiSezona(4); // Konsolėje atspausdins "Sezonas: Pavasaris"

function patikrintiAmziu() {
    let amzius = prompt("Įveskite savo amžių:");

    if (amzius >= 18) {
        alert("Jūs esate suaugęs.");
    } else if (amzius > 0) {
        alert("Jūs esate nepilnametis.");
    } else {
        alert("Įvestas neteisingas amžius.");
    }
}

// Funkcijos iškvietimas
patikrintiAmziu();

