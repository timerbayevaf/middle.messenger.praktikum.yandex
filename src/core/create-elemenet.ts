import { appendChild } from './append-child';
import { IProps } from './types';

interface entityMapData {
  [key: string]: string;
}
const entityMap: entityMapData = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  "'": '#39',
  '/': '#x2F',
};

const escapeHtml = (str: object[] | string) =>
  String(str).replace(/[&<>"'\/\\]/g, (s) => `&${entityMap[s]};`);

// To keep some consistency with React DOM, lets use a mapper
// https://reactjs.org/docs/dom-elements.html
const AttributeMapper = (val: string) =>
  ({
    tabIndex: 'tabindex',
    className: 'class',
    readOnly: 'readonly',
  }[val] || val);

function AIcreateElement(
  tag: Function | string,
  attrs?: IProps,
  ...children: (HTMLElement | string)[]
): HTMLElement {
  attrs = attrs || {};
  const stack: any[] = [...children];

  // Support for components(ish)
  if (typeof tag === 'function') {
    attrs.children = stack;
    return tag(attrs);
  }

  let elm = document.createElement(tag);

  if (tag === 'icon') {
    elm = document.createElement('span');
    const children = getSourceAsDOM(attrs['icon']);

    elm.appendChild(children.documentElement);
  }

  // Add attributes
  for (let [name, val] of Object.entries(attrs)) {
    name = escapeHtml(AttributeMapper(name));
    if (name.startsWith('on') && name.toLowerCase() in window) {
      elm.addEventListener(name.toLowerCase().substr(2), val);
    } else if (name === 'ref') {
      val(elm);
    } else if (name === 'style') {
      Object.assign(elm.style, val);
    } else if (val === true) {
      elm.setAttribute(name, name);
    } else if (val !== false && val != null) {
      val = name !== 'src' ? escapeHtml(val) : val;
      elm.setAttribute(name, val);
    } else if (val === false) {
      elm.removeAttribute(name);
    }

    if (name === 'icon' || name === '__source') {
      elm.removeAttribute(name);
    }
  }

  // Append children
  while (stack.length) {
    const child = stack.shift();

    // Is child a leaf?
    if (!Array.isArray(child)) {
      appendChild(elm, child);
    } else {
      stack.push(...child);
    }
  }

  return elm;
}

function getSourceAsDOM(content: string): Document {
  const parser = new DOMParser();
  return parser.parseFromString(content, 'image/svg+xml');
}

export { AIcreateElement };
