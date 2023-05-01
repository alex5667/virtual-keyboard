import { render } from "../js/utils/render.js";

export default class KeyButton {
  constructor({
    code, shift, small, keycode,
  }, shiftDown) {
    this.code = code;
    this.shift = shift;
    this.small = small;
    this.keycode = keycode;
    this.isShiftKey = !!(shift && shift.match(/^[^a-zA-Zа-яА-ЯёЁ0-9]/g))
    this.at = render('div', 'at', this.isShiftKey ? this.shift : '');
    this.symbol = render('div', 'symbol', shiftDown && this.shift ? this.shift : small);

    this.keyPadBtn = render('div', `keyPad__btn ${this.code}`, this.at ? [this.at, this.symbol] : this.symbol);
    this.isFn = !!(small === 'Ctrl' || small === 'Tab' || code.indexOf(small.slice(1) || false) + 1)
    if (this.isFn) {
      this.keyPadBtn.classList.add('fn');
    }
    if (shiftDown && this.isShiftKey && !this.isFn) {
      this.at.classList.add('active')
      this.symbol.classList.add('inactive')
    }
  }

}

