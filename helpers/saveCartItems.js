const saveCartItems = (items) => {
  if (!items) {
    throw new Error('Passe algum parâmetro');
  }
  localStorage.setItem('cartItems', items);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
