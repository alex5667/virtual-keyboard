import { rowsKey } from "../db/rowsKey.js";
import { render } from "../js/utils/render.js";
import { TextArea } from "./TextArea.js";
import KeyPad from "./KeyPad.js";

export default class Keyboard {
  constructor() {
    this.main = render('main', 'main__container');
    document.body.appendChild(this.main);
    this.textarea = TextArea();
    this.keyPad = new KeyPad('en');
    this.keyButtons = this.keyPad.keyButtons;
    this.addEventListeners();
  }

  init() {
  }

  addEventListeners() {
    document.addEventListener('keydown', (e) => this.handleKeyDownEvent(e))
    document.addEventListener('keyup', (e) => this.handleKeyUpEvent(e))

  }

  handleKeyDownEvent(event) {
    const { code, ctrlKey, shiftKey } = event;
    const btn = this.keyButtons.find((key) => key.code === code);
    btn.keyPadBtn.classList.add('active');


    console.log(btn)
    console.log(shiftKey)
    this.textarea.focus();
  }

  handleKeyUpEvent(event){
    const { code, ctrlKey, shiftKey } = event;
    const btn = this.keyButtons.find((key) => key.code === code);
    btn.keyPadBtn.classList.remove('active');
  }
}


