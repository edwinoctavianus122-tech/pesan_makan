function hitungTotal(items) {
  const subtotal = items.reduce((total, item) => total + item.harga * item.qty, 0);
  const diskon = subtotal >= 50000 ? subtotal * 0.1 : 0;
  return subtotal - diskon;
  const pajak = subtotal * 0.11;
  return subtotal + pajak;
}

module.exports = { hitungTotal };
