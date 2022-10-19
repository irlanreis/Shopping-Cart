const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('Testa se, ao executar saveCartItems com um cartItem como argumento, o método localStorage.setItem é chamado', () => {

    expect.assertions( 1 );
    saveCartItems('item aqui');
    expect(localStorage.setItem).toHaveBeenCalled();

  })
  it('Testa se, o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro a chave \'cartItems\' e o segundo sendo o valor passado como argumento para saveCartItems.', () => {
    
    expect.assertions( 1 );
    saveCartItems( 'item aqui' );
    const key = 'cartItems';
    const value = 'item aqui'

    expect( localStorage.setItem ).toHaveBeenLastCalledWith( key, value )

  })
  it('testa se a função saveCartItems existe', () => {

    expect.assertions( 1 );
    expect( typeof saveCartItems ).toBe( 'function' );

  })
  it('testa se um erro é lançado quando o parâmetro está vazio ou sem argumento', () => {

    expect.assertions( 2 );
    expect( () => saveCartItems() ).toThrow( 'Passe algum parâmetro' );
    expect( () => saveCartItems() ).toThrow( Error );

  })

});
