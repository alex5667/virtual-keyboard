import { render } from "../js/utils/render.js";

export const Header = () => {
  const title = render('h1', 'header__title', 'RSS Virtual Keyboard');
  const note = render('p', 'header__note', 'Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to change language.');
  const header = render('header', 'header__container', [title, note]);
  document.body.appendChild(header)
  return header;
}

