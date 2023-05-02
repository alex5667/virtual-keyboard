(()=>{"use strict";const e=(e,t="",s,l)=>{const i=document.createElement(e);return t&&i.classList.add(...t.split(" ")),s&&Array.isArray(s)?s.forEach((e=>e&&i.appendChild(e))):s&&"object"==typeof s?i.appendChild(s):"string"==typeof s&&(i.innerHTML=s),l&&l.appendChild(i),i},t=[["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Delete"],["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backspace"],["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Backslash","Enter"],["ShiftLeft","IntlBackslash","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],["ControlLeft","Win","AltLeft","Space","AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlRight"]],s={en:[{small:"`",shift:"~",code:"Backquote",keycode:"192"},{small:"1",shift:"!",code:"Digit1",keycode:"49"},{small:"2",shift:"@",code:"Digit2",keycode:"50"},{small:"3",shift:"#",code:"Digit3",keycode:"51"},{small:"4",shift:"$",code:"Digit4",keycode:"52"},{small:"5",shift:"%",code:"Digit5",keycode:"53"},{small:"6",shift:"^",code:"Digit6",keycode:"54"},{small:"7",shift:"&",code:"Digit7",keycode:"55"},{small:"8",shift:"*",code:"Digit8",keycode:"56"},{small:"9",shift:"(",code:"Digit9",keycode:"57"},{small:"0",shift:")",code:"Digit0",keycode:"48"},{small:"-",shift:"_",code:"Minus",keycode:"189"},{small:"=",shift:"+",code:"Equal",keycode:"187"},{small:"Backspace",shift:null,code:"Backspace",keycode:"8"},{small:"Delete",shift:null,code:"Delete",keycode:"46"},{small:"Tab",shift:null,code:"Tab",keycode:"9"},{small:"q",shift:"Q",code:"KeyQ",keycode:"81"},{small:"w",shift:"W",code:"KeyW",keycode:"87"},{small:"e",shift:"E",code:"KeyE",keycode:"69"},{small:"r",shift:"R",code:"KeyR",keycode:"82"},{small:"t",shift:"T",code:"KeyT",keycode:"84"},{small:"y",shift:"Y",code:"KeyY",keycode:"89"},{small:"u",shift:"U",code:"KeyU",keycode:"85"},{small:"i",shift:"I",code:"KeyI",keycode:"73"},{small:"o",shift:"O",code:"KeyO",keycode:"79"},{small:"p",shift:"P",code:"KeyP",keycode:"80"},{small:"[",shift:"{",code:"BracketLeft",keycode:"219"},{small:"]",shift:"}",code:"BracketRight",keycode:"221"},{small:"Enter",shift:null,code:"Enter",keycode:13},{small:"CapsLock",shift:null,code:"CapsLock",keycode:"0"},{small:"a",shift:"A",code:"KeyA",keycode:"65"},{small:"s",shift:"S",code:"KeyS",keycode:"83"},{small:"d",shift:"D",code:"KeyD",keycode:"68"},{small:"f",shift:"F",code:"KeyF",keycode:"70"},{small:"g",shift:"G",code:"KeyG",keycode:"71"},{small:"h",shift:"H",code:"KeyH",keycode:"72"},{small:"j",shift:"J",code:"KeyJ",keycode:"74"},{small:"k",shift:"K",code:"KeyK",keycode:"75"},{small:"l",shift:"L",code:"KeyL",keycode:"76"},{small:";",shift:":",code:"Semicolon",keycode:"186"},{small:"'",shift:'"',code:"Quote",keycode:"222"},{small:"\\",shift:"|",code:"Backslash",keycode:"220"},{small:"Shift",shift:null,code:"ShiftLeft",keycode:"16"},{small:"<",shift:">",code:"IntlBackslash",keycode:"220"},{small:"z",shift:"Z",code:"KeyZ",keycode:"90"},{small:"x",shift:"X",code:"KeyX",keycode:"88"},{small:"c",shift:"C",code:"KeyC",keycode:"67"},{small:"v",shift:"V",code:"KeyV",keycode:"86"},{small:"b",shift:"B",code:"KeyB",keycode:"66"},{small:"n",shift:"N",code:"KeyN",keycode:"78"},{small:"m",shift:"M",code:"KeyM",keycode:"77"},{small:",",shift:"<",code:"Comma",keycode:"188"},{small:".",shift:">",code:"Period",keycode:"190"},{small:"/",shift:"?",code:"Slash",keycode:"191"},{small:"Shift",shift:null,code:"ShiftRight",keycode:"16"},{small:"Ctrl",shift:null,code:"ControlLeft",keycode:"17"},{small:"Alt",shift:null,code:"AltLeft",keycode:"18"},{small:" ",shift:null,code:"Space",keycode:"32"},{small:"Alt",shift:null,code:"AltRight",keycode:"225"},{small:"Ctrl",shift:null,code:"ControlRight",keycode:"17"},{small:"&larr;",shift:null,code:"ArrowLeft",keycode:"37"},{small:"&uarr;",shift:null,code:"ArrowUp",keycode:"38"},{small:"&darr;",shift:null,code:"ArrowDown",keycode:"40"},{small:"&rarr;",shift:null,code:"ArrowRight",keycode:"39"},{small:"Win",shift:null,code:"Win",keycode:"1000"}],ru:[{small:"CapsLock",shift:null,code:"CapsLock",keycode:"0"},{small:"ё",shift:"Ё",code:"Backquote",keycode:"192"},{small:"1",shift:"!",code:"Digit1",keycode:"49"},{small:"2",shift:'"',code:"Digit2",keycode:"50"},{small:"3",shift:"№",code:"Digit3",keycode:"51"},{small:"4",shift:";",code:"Digit4",keycode:"52"},{small:"5",shift:"%",code:"Digit5",keycode:"53"},{small:"6",shift:":",code:"Digit6",keycode:"54"},{small:"7",shift:"?",code:"Digit7",keycode:"55"},{small:"8",shift:"*",code:"Digit8",keycode:"56"},{small:"9",shift:"(",code:"Digit9",keycode:"57"},{small:"0",shift:")",code:"Digit0",keycode:"48"},{small:"-",shift:"_",code:"Minus",keycode:"189"},{small:"=",shift:"+",code:"Equal",keycode:"187"},{small:"Backspace",shift:null,code:"Backspace",keycode:"8"},{small:"Delete",shift:null,code:"Delete",keycode:"46"},{small:"Tab",shift:null,code:"Tab",keycode:"9"},{small:"й",shift:"Й",code:"KeyQ",keycode:"81"},{small:"ц",shift:"Ц",code:"KeyW",keycode:"87"},{small:"у",shift:"У",code:"KeyE",keycode:"69"},{small:"к",shift:"К",code:"KeyR",keycode:"82"},{small:"е",shift:"Е",code:"KeyT",keycode:"84"},{small:"н",shift:"Н",code:"KeyY",keycode:"89"},{small:"г",shift:"Г",code:"KeyU",keycode:"85"},{small:"ш",shift:"Ш",code:"KeyI",keycode:"73"},{small:"щ",shift:"Щ",code:"KeyO",keycode:"79"},{small:"з",shift:"З",code:"KeyP",keycode:"80"},{small:"х",shift:"Х",code:"BracketLeft",keycode:"219"},{small:"ъ",shift:"Ъ",code:"BracketRight",keycode:"221"},{small:"Enter",shift:null,code:"Enter",keycode:"13"},{small:"ф",shift:"Ф",code:"KeyA",keycode:"65"},{small:"ы",shift:"Ы",code:"KeyS",keycode:"83"},{small:"в",shift:"В",code:"KeyD",keycode:"68"},{small:"а",shift:"А",code:"KeyF",keycode:"70"},{small:"п",shift:"П",code:"KeyG",keycode:"71"},{small:"р",shift:"Р",code:"KeyH",keycode:"72"},{small:"о",shift:"О",code:"KeyJ",keycode:"74"},{small:"л",shift:"Л",code:"KeyK",keycode:"75"},{small:"д",shift:"Д",code:"KeyL",keycode:"76"},{small:"ж",shift:"Ж",code:"Semicolon",keycode:"186"},{small:"э",shift:"Э",code:"Quote",keycode:"222"},{small:"\\",shift:"/",code:"Backslash",keycode:"220"},{small:"Shift",shift:null,code:"ShiftLeft",keycode:"16"},{small:"/",shift:"|",code:"IntlBackslash",keycode:"191"},{small:"я",shift:"Я",code:"KeyZ",keycode:"90"},{small:"ч",shift:"Ч",code:"KeyX",keycode:"88"},{small:"с",shift:"С",code:"KeyC",keycode:"67"},{small:"м",shift:"М",code:"KeyV",keycode:"86"},{small:"и",shift:"И",code:"KeyB",keycode:"66"},{small:"т",shift:"Т",code:"KeyN",keycode:"78"},{small:"ь",shift:"Ь",code:"KeyM",keycode:"77"},{small:"б",shift:"Б",code:"Comma",keycode:"188"},{small:"ю",shift:"Ю",code:"Period",keycode:"190"},{small:".",shift:",",code:"Slash",keycode:"191"},{small:"Shift",shift:null,code:"ShiftRight",keycode:"16"},{small:"Ctrl",shift:null,code:"ControlLeft",keycode:"17"},{small:"Alt",shift:null,code:"AltLeft",keycode:"18"},{small:" ",shift:null,code:"Space",keycode:"32"},{small:"Alt",shift:null,code:"AltRight",keycode:"225"},{small:"Ctrl",shift:null,code:"ControlRight",keycode:"17"},{small:"&larr;",shift:null,code:"ArrowLeft",keycode:"37"},{small:"&uarr;",shift:null,code:"ArrowUp",keycode:"38"},{small:"&darr;",shift:null,code:"ArrowDown",keycode:"40"},{small:"&rarr;",shift:null,code:"ArrowRight",keycode:"39"},{small:"Win",shift:null,code:"Win",keycode:"1000"}]};class l{constructor({code:t,shift:s,small:l,keycode:i},o){this.code=t,this.shift=s,this.small=l,this.keycode=i,this.isShiftKey=!(!s||!s.match(/^[^a-zA-Zа-яА-ЯёЁ0-9]/g)),this.at=e("div","at",this.isShiftKey?this.shift:""),this.symbol=e("div","symbol",o&&this.shift?this.shift:l),this.keyPadBtn=e("div",`keyPad__btn ${this.code}`,this.at?[this.at,this.symbol]:this.symbol),this.keyPadBtn.id=this.code,this.isFn=!!("Ctrl"===l||"Tab"===l||t.indexOf(l.slice(1)||!1)+1),this.isFn&&this.keyPadBtn.classList.add("fn"),o&&this.isShiftKey&&!this.isFn&&(this.at.classList.add("active"),this.symbol.classList.add("inactive"))}}class i{constructor(l,i){this.keyPad=e("div","keyPad"),document.querySelector("main").appendChild(this.keyPad),this.rowsKey=t,this.keyButtons=[],this.langBase=s[l],this.isShiftDown=i,this.render()}render(){this.rowsKey.forEach(((t,s)=>{const i=e("div","keyPad__row");i.id=`row-${s+1}`,document.querySelector(".keyPad").appendChild(i),i.style.gridTemplateColumns=`repeat(${t.length}, 1fr)`,t.forEach((e=>{const t=this.langBase.find((t=>t.code===e));if(t){const e=new l(t,this.isShiftDown);this.keyButtons.push(e),i.appendChild(e.keyPadBtn)}}))}))}}(()=>{const t=e("h1","header__title","RSS Virtual Keyboard"),s=e("p","header__note","Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to change language."),l=e("header","header__container",[t,s]);document.body.appendChild(l)})(),new class{constructor(){this.main=e("main","main__container"),document.body.appendChild(this.main),this.textarea=(()=>{const t=e("textarea","textarea");return t.setAttribute("placeholder","Type something..."),t.setAttribute("rows",7),t.setAttribute("cols",70),t.setAttribute("spellcheck",!1),t.setAttribute("autocorrect","off"),document.querySelector("main").appendChild(t),t})(),this.lang=localStorage.getItem("lang")?localStorage.getItem("lang"):"en",this.shiftKey=!1,this.isCaps=!1,this.keyPad=new i(this.lang,this.shiftKey),this.addEventListeners(),this.btnPressed={},this.ctrlKey=!1}init(){}addEventListeners(){document.addEventListener("keydown",(e=>this.handleKeyDown(e))),document.addEventListener("keyup",(e=>this.handleKeyUp(e))),document.addEventListener("mousedown",(e=>this.mouseEvent(e))),document.addEventListener("mouseup",(e=>this.mouseEvent(e)))}handleKeyDown(e){const{code:t}=e,s=this.keyPad.keyButtons.find((e=>e.code===t));if(s){if(e.type&&!e.type||"16"!==s.keycode||(this.shiftKey=!0),"16"===s.keycode&&this.changeToUpperCase(!0),"0"!==s.keycode||this.isCaps?"0"===s.keycode&&this.isCaps&&!e.repeat&&(this.isCaps=!1,this.changeToUpperCase(!1)):(this.isCaps=!0,this.changeToUpperCase(!0)),e.type&&"17"===s.keycode&&(this.ctrlKey=!0),"18"===s.keycode&&this.ctrlKey){e.type&&e.preventDefault(),this.changeLanguage();const t=/Tab|ArrowLeft|ArrowUp|ArrowDown|ArrowRight|Delete|Backspace|Enter/i,l=s.isFn||ctrlKey,i="Tab"===s.code||"Alt"===s.code,o=!e.type&&s.code.match(t);if(!l||i||o){e.type&&e.preventDefault();const t=shiftKey||this.shiftKey,l=this.isCaps&&s.symbol.innerText,i=this.isCaps&&t,o=l||i||t&&!this.isCaps;this.handleKeyPress(s,o?s.shift:s.small)}}s.keyPadBtn.classList.add("active"),this.btnPressed[s.code]=s,this.textarea.focus()}}handleKeyUp(e){const{code:t}=e,s=this.btnPressed[t];delete this.btnPressed[t],s&&(("0"==!s.keycode||"0"==s.keycode&&!this.isCaps)&&s.keyPadBtn.classList.remove("active"),"16"!==s.keycode||this.isCaps?"16"===s.keycode&&this.isCaps&&(this.shiftKey=!1,this.changeToUpperCase(!0)):this.changeToUpperCase(!1))}changeToUpperCase(e){e?(this.isCaps||(this.shiftKey=!0),document.querySelector(".keyPad").remove(),this.keyPad=new i(this.lang,!0)):(this.shiftKey=!1,document.querySelector(".keyPad").remove(),this.keyPad=new i(this.lang,!1));const t=document.querySelector(".CapsLock");this.isCaps&&t.classList.add("active")}changeLanguage(){const e=Object.keys(s),t=(e.indexOf(this.lang)+1)%e.length;if(this.lang=e[t],localStorage.setItem("lang",this.lang),document.querySelector(".keyPad").remove(),this.isCaps){this.keyPad=new i(this.lang,!0);document.querySelector(".CapsLock").classList.add("active")}else this.keyPad=new i(this.lang,!1)}handleKeyPress(e,t){let s=this.output.selectionStart;const l=this.output.value.slice(0,s),i=this.output.value.slice(s);switch(e.code){case"Tab":this.output.value=`${l}\t${i}`,s++;break;case"ArrowLeft":s=s-1>=0?s-1:0;break;case"ArrowRight":s++;break;case"ArrowUp":s-=(this.output.value.slice(0,s).match(/(\n).*$(?!\1)/g)||[[1]])[0].length;break;case"ArrowDown":s+=(this.output.value.slice(s).match(/^.*(\n).*(?!\1)/)||[[1]])[0].length+1;break;case"Enter":this.output.value=`${l}\n${i}`,s++;break;case"Delete":this.output.value=`${l}${i.slice(1)}`;break;case"Backspace":this.output.value=`${l.slice(0,-1)}${i}`,s--;break;case"Space":this.output.value=`${l} ${i}`,s+=1;break;default:e.isFnKey||(s+=1,this.output.value=`${l}${t||""}${i}`)}this.output.setSelectionRange(s,s)}mouseEvent(e){e.preventDefault();if(!e.target.closest(".keyPad__btn"))return;const t=e.target.closest(".keyPad__btn").id;console.log(t),"mouseup"===e.type?(this.shiftKey="ShiftLeft"===t||"ShiftRight"===t||this.shiftKey,this.ctrlKey=!t.match(/Control/)&&this.ctrlKey,clearTimeout(this.timeOut),clearInterval(this.interval),this.handleKeyUp({code:t})):(this.shiftKey="ShiftLeft"===t||"ShiftRight"===t?!this.shiftKey:this.shiftKey,this.ctrlKey=!t.match(/Control/)&&this.ctrlKey,t.match(/Alt|Caps|Control/)||(this.timeOut=setTimeout((()=>{this.interval=setInterval((()=>{this.handleKeyDown({code:t})}),35)}),500)),this.handleKeyDown({code:t})),this.textarea.focus()}}})();