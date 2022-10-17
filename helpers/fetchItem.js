const fetchItem = async (computerItem) => {
  try {
  const url = `https://api.mercadolibre.com/items/${computerItem}`;

  const response = await fetch(url);
  const json = await response.json();
  return json;    
  } catch (error) {
    return 'You must provide an url';
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
fetchItem('');