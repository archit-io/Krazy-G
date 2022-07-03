import axios from 'axios'
const HomeScreen = {
  render: async () => { //async added
    //const { products } = data; removed since data is being fetched from the backend now
    const response = await axios({
      url: 'http://localhost:5000/api/products', //axios specific change
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response || response.statusText !== 'OK') {  //axios specific change
      return `<div>Error in getting data</div>`;
    }
    const products = response.data;  //axios specific change

    return `
    <ul class="products">
      ${products
        .map(
          (product) => `
      <li>
        <div class="product">
          <a href="/#/product/${product._id}">
            <img src="${product.image}" alt="${product.name}" />
          </a>
        <div class="product-name">
          <a href="/#/product/1">
            ${product.name}
          </a>
        </div>
        <div class="product-brand">
          ${product.brand}
        </div>
        <div class="product-price">
          $${product.price}
        </div>
        </div>
      </li>
      `
        )
        .join('\n')}
    `;
  },
};
export default HomeScreen;