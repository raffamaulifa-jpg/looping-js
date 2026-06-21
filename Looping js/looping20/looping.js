const prompt = require("prompt-sync")();

let n = Number(prompt("Masukkan Jumlah Perkalian: "));

console.log("*\t");

for (let i = 1; i <= n; i++) {
    process.stdout.write(i + "\t");
}

console.log();

for (let i = 1; i <= n; i++) {
    process.stdout.write(i + "\t");

    for (let j = 1; j <= n; j++) {
        process.stdout.write((i * j) + "\t");
    }

    console.log();
}