const fetchProducts = async (item) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

    const response = await fetch(url);
    const objectJson = await response.json();

    return objectJson;
  } catch (error) {
    return 'error';
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
