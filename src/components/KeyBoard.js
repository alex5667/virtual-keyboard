import { render } from "../js/utils/render.js";
import { TextArea } from "./TextArea.js";
import KeyPad from "./KeyPad.js";
import { langBase } from "../db/langBase.js";

export default class Keyboard {
  constructor() {
    this.main = render('main', 'main__container');
    document.body.appendChild(this.main);
    this.textarea = TextArea();
    this.lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
    this.shiftKey = false;
    this.isCaps = false;
    this.keyPad = new KeyPad(this.lang, this.shiftKey);
    this.addEventListeners();
    this.btnPressed = {};
    this.ctrlKey = false;
  }

  init() {
  }

  addEventListeners() {
    document.addEventListener('keydown', (e) => this.handleKeyDown(e))
    document.addEventListener('keyup', (e) => this.handleKeyUp(e))

  }

  handleKeyDown(event) {
    const { code } = event;
    const btn = this.keyPad.keyButtons.find((key) => key.code === code);
    if (btn) {
      if ((!event.type || event.type) && btn.keycode === '16') this.shiftKey = true;
      if (btn.keycode === '16') this.changeToUpperCase(true);
      if (btn.keycode === '0' && !this.isCaps) {
        this.isCaps = true;
        this.changeToUpperCase(true);
      } else if (btn.keycode === '0' && this.isCaps && !event.repeat) {
        this.isCaps = false;
        this.changeToUpperCase(false);
      }
      btn.keyPadBtn.classList.add('active');
      this.btnPressed[btn.code] = btn;
      this.textarea.focus();
    }
    if (event.type && btn.keycode === '17') this.ctrlKey = true;
    if (btn.keycode === '18' && this.ctrlKey) {
      if (event.type) event.preventDefault();
      this.changeLanguage();
    }

  }

  handleKeyUp(event) {
    const { code } = event;
    const btn = this.btnPressed[code];
    delete this.btnPressed[code];
    if (btn) {
      if (!btn.keycode == '0' || (btn.keycode == '0' && !this.isCaps)) {
        btn.keyPadBtn.classList.remove('active');
      }
      if (btn.keycode === '16' && !this.isCaps) {
        this.changeToUpperCase(false);
      } else if (btn.keycode === '16' && this.isCaps) {
        this.shiftKey = false;
        this.changeToUpperCase(true);
      }
    }
  }

  changeToUpperCase(isShift) {
    if (isShift) {
      if (!this.isCaps) this.shiftKey = true;
      document.querySelector('.keyPad').remove();
      this.keyPad = new KeyPad(this.lang, true);
    } else {
      this.shiftKey = false;
      document.querySelector('.keyPad').remove();
      this.keyPad = new KeyPad(this.lang, false);
    }
    const caps = document.querySelector('.CapsLock');
    if (this.isCaps) {
      caps.classList.add('active');
    }
  }

  changeLanguage() {
    const arrLangKeys = Object.keys(langBase);
    const idx = arrLangKeys.indexOf(this.lang);
    const index = (idx + 1) % arrLangKeys.length;
    this.lang = arrLangKeys[index];
    localStorage.setItem('lang', this.lang);
    document.querySelector('.keyPad').remove();
    if (this.isCaps) {
      this.keyPad = new KeyPad(this.lang, true);
      const caps = document.querySelector('.CapsLock');
      caps.classList.add('active');
    }
    else {
      this.keyPad = new KeyPad(this.lang, false);
    }
  }
}


