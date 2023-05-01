import { rowsKey } from "../db/rowsKey.js";
import { render } from "../js/utils/render.js";
import { TextArea } from "./TextArea.js";
import KeyPad from "./KeyPad.js";

export default class Keyboard {
  constructor() {
    this.main = render('main', 'main__container');
    document.body.appendChild(this.main);
    this.textarea = TextArea();
    this.shiftKey = false;
    this.isCaps = false;
    this.keyPad = new KeyPad('en', this.shiftKey);
    this.addEventListeners();
    this.btnPressed = {};

  }

  init() {
  }

  addEventListeners() {
    document.addEventListener('keydown', (e) => this.handleKeyDownEvent(e))
    document.addEventListener('keyup', (e) => this.handleKeyUpEvent(e))

  }

  handleKeyDownEvent(event) {
    const { code, ctrlKey, shiftKey } = event;
    const btn = this.keyPad.keyButtons.find((key) => key.code === code);
    if (btn) {
      if (!event.type && btn.isFn && btn.keycode === '16') this.shiftKey = true;
      if (event.type && btn.isFn && btn.keycode === '16') this.shiftKey = true;
      if (btn.keycode === '16') this.switchToUpperCase(true);
      if (btn.keycode === '0' && !this.isCaps) {
        this.isCaps = true;
        this.switchToUpperCase(true);
      } else if (btn.keycode === '0' && this.isCaps && !event.repeat) {
        this.isCaps = false;
        this.switchToUpperCase(false);
      }
      btn.keyPadBtn.classList.add('active');
      this.btnPressed[btn.code] = btn;
      this.textarea.focus();
    }

  }

  handleKeyUpEvent(event) {
    const { code } = event;
    const btn = this.btnPressed[code];


    delete this.btnPressed[code];
    if (btn) {
      if (!btn.keycode == '0' || (btn.keycode == '0' && !this.isCaps)) {
        btn.keyPadBtn.classList.remove('active');
      }
      if (btn.keycode === '16' && !this.isCaps) {
        this.switchToUpperCase(false);
      } else if (btn.keycode === '16' && this.isCaps) {
        this.shiftKey = false;
        this.switchToUpperCase(true);
      }
    }
  }

  switchToUpperCase(isShift) {
    if (isShift) {
      if (!this.isCaps) this.shiftKey = true;
      document.querySelector('.keyPad').remove();
      this.keyPad = new KeyPad('en', true);

    } else {
      this.shiftKey = false;
      document.querySelector('.keyPad').remove();
      this.keyPad = new KeyPad('en', false);
    }
    const caps = document.querySelector('.CapsLock');

    if (this.isCaps) {
      caps.classList.add('active');
    }
  }
}


