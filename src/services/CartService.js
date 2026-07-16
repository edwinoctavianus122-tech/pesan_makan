function hitungTotal(items) {
  return items.reduce((total, item) => total + item.harga * item.qty, 0);
}

module.exports = { hitungTotal };
