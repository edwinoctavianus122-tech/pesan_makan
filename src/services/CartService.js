function hitungTotal(items) {
  const subtotal = items.reduce((total, item) => total + item.harga * item.qty, 0);
  const pajak = subtotal * 0.11;
  return subtotal + pajak;
}

module.exports = { hitungTotal };
