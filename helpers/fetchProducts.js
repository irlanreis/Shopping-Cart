const fetchProducts = async (item) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

    const response = await fetch(url);
    const objectJson = await response.json();
    // console.log(response);
    if (item === 'computador') {
      const { results } = objectJson;
      return results;
    }
    // console.log(objectJson);
  } catch (error) {
    return 'error';
  }
};
fetchProducts('computador');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
