
import { render } from "../js/utils/render.js";

export const TextArea = () => {
  const area = render('textarea', 'textarea');
  area.setAttribute('placeholder', 'Type something...');
  area.setAttribute('rows', 7);
  area.setAttribute('cols', 70);
  area.setAttribute('spellcheck', false);
  area.setAttribute('autocorrect', 'off');
  document.querySelector('main').appendChild(area);
  return area;
}