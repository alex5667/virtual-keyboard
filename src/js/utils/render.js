

const render = (el, classNames = '', child, parent) => {
  const element = null ? null : document.createElement(el);;
  if (classNames) { element.classList.add(...classNames.split(' ')); }

  if (child && Array.isArray(child)) {
    child.forEach((childElement) => childElement && element.appendChild(childElement));
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (typeof child === 'string') {
    element.innerHTML = child;
  }
  if (parent) {
    parent.appendChild(element);
  }


  return element;
}

export { render };
