const pegarLocal = () => JSON.parse(localStorage.getItem('cartItems'));

const saveCartItems = (id) => {
  let local = pegarLocal();

  if (!local) {
    localStorage.setItem('cartItems', JSON.stringify([]));
    local = localStorage.getItem('cartItems');
  }

  const novoLocal = [...local, id];

  localStorage.setItem('cartItems', JSON.stringify(novoLocal));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
