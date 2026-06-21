function buatPerkalian(n) {
  for (let kolom = 1; kolom <= n; kolom++) {
    let baris = "";
    for (let row = 1; row <= 5; row++) {
      baris += kolom + " x " + row + " = " + (kolom * row) + "  ";
    }
    console.log(baris);
  }
}
buatPerkalian(2)