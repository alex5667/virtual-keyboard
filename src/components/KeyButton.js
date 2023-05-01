import { render } from "../js/utils/render.js";

export default class KeyButton {
  constructor({
    code, shift, small, keycode,
  }) {
    this.code = code;
    this.shift = shift;
    this.small = small;
    this.keycode = keycode;
    if (shift && shift.match(/^[^!@#$%^&*(),.?":{}|<>]/g)) {
      this.at = render('div', 'at');
    } else {
      this.at = render('div', 'at', this.shift);
    }
    this.symbol = render('div', 'symbol', small);
    this.keyPadBtn = render('div', `keyPad__btn ${this.code}`, this.at ? [this.at, this.symbol] : this.symbol);
    if (small === 'Ctrl' || code.indexOf(small.slice(1) || false) + 1) {
      this.keyPadBtn.classList.add('fn');
    } 
  }
}

