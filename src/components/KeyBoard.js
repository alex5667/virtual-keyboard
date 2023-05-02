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
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));
    document.addEventListener('keyup', (e) => this.handleKeyUp(e));
    document.addEventListener('mousedown', (e) => this.mouseEvent(e));
    document.addEventListener('mouseup', (e) => this.mouseEvent(e));
    

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

      if (event.type && btn.keycode === '17') this.ctrlKey = true;
      if (btn.keycode === '18' && this.ctrlKey) {
        if (event.type) event.preventDefault();
        this.changeLanguage();

        const regexp = /Tab|ArrowLeft|ArrowUp|ArrowDown|ArrowRight|Delete|Backspace|Enter/i;
        const isFnKeyOrCtrl = btn.isFn || ctrlKey;
        const isTabOrAlt = btn.code === 'Tab' || btn.code === 'Alt';
        const isRegExpMatch = !event.type && btn.code.match(regexp);

        if (!isFnKeyOrCtrl || isTabOrAlt || isRegExpMatch) {
          if (event.type) {
            event.preventDefault();
          }

          const isShiftKey = shiftKey || this.shiftKey;
          const isCapsAndHasInnerText = this.isCaps && btn.symbol.innerText;
          const isCapsAndShiftKey = this.isCaps && isShiftKey;
          const shouldUseShift = isCapsAndHasInnerText || isCapsAndShiftKey || (isShiftKey && !this.isCaps);

          this.handleKeyPress(btn, shouldUseShift ? btn.shift : btn.small);
        }
      }
      btn.keyPadBtn.classList.add('active');
      this.btnPressed[btn.code] = btn;
      this.textarea.focus();
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

  handleKeyPress(keyObj, symbol) {
    let cursorPos = this.output.selectionStart;
    const left = this.output.value.slice(0, cursorPos);
    const right = this.output.value.slice(cursorPos);
  
    switch (keyObj.code) {
      case 'Tab':
        this.output.value = `${left}\t${right}`;
        cursorPos++;
        break;
  
      case 'ArrowLeft':
        cursorPos = cursorPos - 1 >= 0 ? cursorPos - 1 : 0;
        break;
  
      case 'ArrowRight':
        cursorPos++;
        break;
  
      case 'ArrowUp':
        const positionFromUp = this.output.value.slice(0, cursorPos).match(/(\n).*$(?!\1)/g) || [[1]];
        cursorPos -= positionFromUp[0].length;
        break;
  
      case 'ArrowDown':
        const positionFromDown = this.output.value.slice(cursorPos).match(/^.*(\n).*(?!\1)/) || [[1]];
        cursorPos += positionFromDown[0].length + 1;
        break;
  
      case 'Enter':
        this.output.value = `${left}\n${right}`;
        cursorPos++;
        break;
  
      case 'Delete':
        this.output.value = `${left}${right.slice(1)}`;
        break;
  
      case 'Backspace':
        this.output.value = `${left.slice(0, -1)}${right}`;
        cursorPos--;
        break;
  
      case 'Space':
        this.output.value = `${left} ${right}`;
        cursorPos += 1;
        break;
  
      default:
        if (!keyObj.isFnKey) {
          cursorPos += 1;
          this.output.value = `${left}${symbol || ''}${right}`;
        }
        break;
    }
  
    this.output.setSelectionRange(cursorPos, cursorPos);
  }

  mouseEvent(event){
    event.preventDefault();
    const btnDiv = event.target.closest('.keyPad__btn');
    if (!btnDiv) return;
    const code = event.target.closest('.keyPad__btn').id;
    console.log(code);
    if (event.type === 'mouseup') {
      this.shiftKey = !!(code === 'ShiftLeft' || code === 'ShiftRight') ? true : this.shiftKey;
      this.ctrlKey = code.match(/Control/) ? false : this.ctrlKey;
      clearTimeout(this.timeOut);
      clearInterval(this.interval);
      this.handleKeyUp({ code });
    } else {
      this.shiftKey = (code === 'ShiftLeft' || code === 'ShiftRight') ? !this.shiftKey : this.shiftKey;
      this.ctrlKey = code.match(/Control/) ? false : this.ctrlKey;
      if (!code.match(/Alt|Caps|Control/)) {
        this.timeOut = setTimeout(() => {
          this.interval = setInterval(() => {
            this.handleKeyDown({ code });
          }, 35);
        }, 500);
      }
      this.handleKeyDown({ code });
    }
    this.textarea.focus();
  }
}



