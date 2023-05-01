import { render } from "../js/utils/render.js";
import { rowsKey } from "../db/rowsKey.js";
import { langBase } from "../db/langBase.js";
import KeyButton from "./KeyButton.js";


export default class KeyPad {
  constructor(lang) {
    this.keyPad = render('div', 'keyPad');
    this.keyPad.setAttribute('language', lang);
    document.querySelector('main').appendChild(this.keyPad);
    this.rowsKey = rowsKey;
    this.keyButtons = [];
    this.langBase = langBase[lang];
    this.render();
  }

  render() {
    this.rowsKey.forEach((row, i) => {
      const keyPadRow = render('div', 'keyPad__row');
      keyPadRow.id = `row-${i + 1}`;
      document.querySelector('.keyPad').appendChild(keyPadRow);
      keyPadRow.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;
      row.forEach((code) => {
        const btnObj = this.langBase.find((key) => key.code === code);
        if (btnObj) {
          const keyButton = new KeyButton(btnObj);
          this.keyButtons.push(keyButton);
          keyPadRow.appendChild(keyButton.keyPadBtn);
        }
      });
    });
  }

}