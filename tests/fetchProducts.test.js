require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se fetchProducts é uma função', async () => {
    expect.assertions()
    expect(typeof fetchProducts).toBe('function')
  });

  it('Verifica se a fetch foi chamada ao executar a função  com o argumento "computador"', async () => {
    expect.assertions(1)
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('testa se,ao chamar a função fetchProducts com o argumento \'computador\' a função fetch utiliza o endpoint especificado.', async () => {
    expect.assertions(1)
    await fetchProducts('computador');
    const item = 'computador'
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('Testa se ao chamar a função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    expect.assertions(1)
    const dataFunction = await fetchProducts('computador'); 
    expect(dataFunction).toEqual(computadorSearch);
  })

  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    expect.assertions(1)
    const fnNoParam = await fetchProducts()
    expect(fnNoParam).toBe(error);
  })
});

// global.fetch = jest.fn(fetchProducts);f