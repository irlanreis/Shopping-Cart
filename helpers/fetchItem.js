const fetchItem = async (itemID) => {
  try {
    const url = `https://api.mercadolibre.com/items/${itemID}`;

    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    return 'You must provide an url';
  }
};
// retorna o objeto do item passado como parâmetro!

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
// fetchItem('MLB1341706310');