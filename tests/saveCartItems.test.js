const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Testa se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado',() => {
    
    expect(localStorage.getItem).toHaveBeenCalled()
  })
  
  it('Testa se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave \'cartItems\' e o segundo sendo o valor passado como argumento para saveCartItems.',() => {
    const cartItem = ''
    expect()
  })

  it('testa se a função saveCartItems existe',() => {
    
  })

  it('testa se o fetch é chamado na função saveCartItems',() => {
    
  })  
  
  it('',() => {
    
  })  
  
  it('',() => {
    
  })  
  
  it('',() => {
    
  })  
  
  it('',() => {
    
  })
});
