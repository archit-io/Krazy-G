/* eslint-disable import/extensions */
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import { hideLoading, parseRequestUrl, showLoading } from './utils.js';
import Error404Screen from './screens/Error404Screen.js';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen.js';
import Header from './components/Header.js';

const routes = {
  '/': HomeScreen,
  '/product/:id': ProductScreen,
  '/cart/:id': CartScreen, // Added while implementing 13-Add-To-Cart-Action
  '/cart': CartScreen,
  '/signin': SigninScreen,
};
const router = async () => { // async added since data is now being fetched from the backend
  showLoading();
  const request = parseRequestUrl();
  const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
  const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;

  const header = document.getElementById('header-container');
  header.innerHTML = await Header.render();
  await Header.after_render();

  const main = document.getElementById('main-container');
  main.innerHTML = await screen.render();
  await screen.after_render(); // added for 12-Product-Screen-Action
  hideLoading();
};
window.addEventListener('load', router);
window.addEventListener('hashchange', router);