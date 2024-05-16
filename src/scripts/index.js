import 'regenerator-runtime';
import './views/components/hero-bar';
import './views/components/highlight-bar';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/skip-link.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
