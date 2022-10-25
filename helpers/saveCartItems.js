const saveCartItems = (obj) => {
  if (!obj) throw new Error('Passe algum parâmetro');
  localStorage.setItem('cartItems', JSON.stringify(obj));
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
