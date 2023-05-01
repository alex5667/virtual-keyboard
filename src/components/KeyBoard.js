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
  }

  init() {
  }
}


