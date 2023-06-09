// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const buttonEmptyCart = document.querySelector('.empty-cart');
const cartList = document.querySelector('.cart__items');
/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
// const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

const cartItemRemove = (event) => {
  event.target.remove();
  const separeteByPipe = event.target.innerText.split('|');
  const itemSeparete = separeteByPipe[0].split(':');
  const separeteID = itemSeparete[1].trim();
  
  const containerLocalStorege = getSavedCartItems();
  const filtredItems = containerLocalStorege.filter((element) => element.id !== separeteID);
  saveCartItems(filtredItems);
};

const createCartItemElement = async ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemRemove);
  document.getElementsByClassName('cart__items')[0].appendChild(li);
  return li;
};

const addInCart = (id, title, price) => {
  // pegar itens de localStorage
  const items = getSavedCartItems();
  // empurrar item para o array de itens;
  const item = {
    id,
    title,
    price,
  };
  items.push(item);
  // salvar itens lo localStorage
  saveCartItems(items);
  createCartItemElement(item);
};

const loadCartItem = () => {
  const local = getSavedCartItems();
  console.log(local);
  local.forEach((item) => {
    createCartItemElement(item);
  });
};

const createProductItemElement = ({ id, title, thumbnail, price }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  const button = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  button.value = id;
  button.addEventListener('click', () => {
    addInCart(id, title, price);
  });
  section.appendChild(button);
  document.getElementsByClassName('items')[0].appendChild(section);
};

const createItem = async () => {
  const json = await fetchProducts('computador');
  json.forEach((element) => createProductItemElement(element));
};

/**
* Função que recupera o ID do produto passado como parâmetro.
* @param {Element} product - Elemento do produto.
* @returns {string} ID do produto.
*/

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const addListenerEmptyCartButton = () => {
  buttonEmptyCart.addEventListener('click', () => {
    saveCartItems([]);
    cartList.innerHTML = null;
  });
};

window.onload = async () => {
  createItem();
  loadCartItem();
  addListenerEmptyCartButton();
};
