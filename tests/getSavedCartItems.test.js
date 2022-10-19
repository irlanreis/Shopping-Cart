const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator( 'getItem' );

describe( '4 - Teste a função getSavedCartItems', () => {
  it( 'testa se a função getSavedCartItems existe', () => {

    expect.assertions( 1 )
    expect(typeof getSavedCartItems ).toBe( 'function' )

  }) 
  it( 'Testa se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    
    expect.assertions( 1 )
    getSavedCartItems();
    expect( localStorage.getItem ).toHaveBeenCalled()

  })  
  it( 'Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o \'cartItems\' como parâmetro.', () => {
    
    expect.assertions( 1 );
    getSavedCartItems('cartItems')
    expect( localStorage.getItem ).toHaveBeenCalledWith( 'cartItems' )

  })  
});
