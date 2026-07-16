const { hitungTotal } = require("./CartService");

describe("CartService - hitungTotal", () => {
  test("menjumlahkan total harga x qty dengan benar (baseline)", () => {
    const items = [
      { nama: "Ayam Geprek", harga: 15000, qty: 2 },
      { nama: "Es Teh Manis", harga: 5000, qty: 1 },
    ];
    expect(hitungTotal(items)).toBe(35000);
  });

  test("mengembalikan 0 untuk keranjang kosong", () => {
    expect(hitungTotal([])).toBe(0);
  });
});
