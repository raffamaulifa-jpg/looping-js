let tinggi = 5;

for (let i = 1; i <= (2 * tinggi - 1); i++) {
  let baris = i <= tinggi ? i : (2 * tinggi - i);
  let spasi = "";
  let bintang = "";

  for (let j = baris; j < tinggi; j++) {
    spasi += " ";
  }

  for (let k = 1; k <= baris; k++) {
    bintang += "* ";
  }

  console.log(spasi + bintang);
}