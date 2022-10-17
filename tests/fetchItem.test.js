require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('Testes da função fetchItem', () => {
  expect.assertions(1);
  it('Teste se fetchItem é uma função', async () => {
    await expect(typeof fetchItem).toBe('function');
  });

  it('Testa se ao chamar fetchItem com o argumento MLB1615760527 o fetch foi chamado', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');

    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se, ao chamar a função fetchItem com o argumento do item \'MLB1615760527\', a função fetch utiliza o endpoint', async () => {
    expect.assertions(1);
    await fetchItem('MLB1615760527');
    const item = 'MLB1615760527';
    const url = `https://api.mercadolibre.com/items/MLB1615760527";"https://api.mercadolibre.com/items/${item}`;

    expect(fetch).toHaveBeenCalled()
  });

  it('Testa se o retorno da função fetchItem com o argumento do item \'MLB1615760527\' é uma estrutura de dados igual ao objeto item que já está importado no arquivo', async () => {
    expect.assertions(1)
    await fetchItem('MLB1615760527');
    // const computerItem = 'MLB1615760527';
    // const url = `https://api.mercadolibre.com/items/MLB1615760527${computerItem}`;
    
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })

  it('Testa se, ao chamar a função fetchItem sem argumento, retorna \'You must provide an url\'.', async() => {
    expect.assertions(1)
    expect(await fetchItem()).toBe('You must provide an url');
  });
});
