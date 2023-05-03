import { render } from "../js/utils/render.js";

export const Header = () => {
  const title = render('h1', 'header__title', 'RSS Virtual Keyboard');
  const note = render('p', 'header__note', 'Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to change language.');
  const link = render('p', 'header__link', 'Link to the pool-request: <a  class ="header__link" href="https://github.com/alex5667/virtual-keyboard/pull/1">https://github.com/alex5667/virtual-keyboard/pull/1</a>');
  const header = render('header', 'header__container', [title, note, link]);
  document.body.appendChild(header)
  return header;
}

