const pegarLocal = () => JSON.parse(localStorage.getItem('cartItems'));

const saveCartItems = (obj) => {
  const local = pegarLocal();

  if (!local) {
    const novoLocal = [obj];
    localStorage.setItem('cartItems', JSON.stringify(novoLocal));
  } else {
    const novoLocal = [...local, obj];
    localStorage.setItem('cartItems', JSON.stringify(novoLocal));
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
