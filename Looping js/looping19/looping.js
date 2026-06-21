const prompt = require('prompt-sync')();

let jumlah = 0;
for (let i = 1; i <= 5; i++) {
    let nilai = Number(prompt('Masukan nilai ke-' + i + ': '));
    jumlah += nilai;
}

let rataRata = jumlah / 5;

console.log("Jumlah\t\t: " + jumlah);
console.log("Rata-rata\t: " + rataRata);