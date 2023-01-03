interface entityMapData {
  [key: string]: string;
}
export const entityMap: entityMapData = {
  '&': 'amp',
  '<': 'lt',
  '>': 'gt',
  '"': 'quot',
  "'": '#39',
  '/': '#x2F',
};

export const escapeHtml = (str: object[] | string) =>
  String(str).replace(/[&<>"'\/\\]/g, (s) => `&${entityMap[s]};`);

// To keep some consistency with React DOM, lets use a mapper
// https://reactjs.org/docs/dom-elements.html
export const AttributeMapper = (val: string) =>
  ({
    tabIndex: 'tabindex',
    className: 'class',
    readOnly: 'readonly',
  }[val] || val);

// tslint:disable-next-line:no-default-export
export function AIcreateElement(
  tag: Function | string,
  attrs?: { [key: string]: any },
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
      if (child !== null && child !== undefined) {
        elm.appendChild(
          (child as HTMLElement).nodeType == null
            ? document.createTextNode(child.toString())
            : child
        );
      }
    } else {
      stack.push(...child);
    }
  }

  return elm;
}

export const AIcreateFragment = (
  attrs?: { [key: string]: any },
  ...children: HTMLElement[]
): DocumentFragment => {
  const fragment = document.createDocumentFragment();
  attrs?.children?.forEach((child: any) => {
    if (Array.isArray(child)) {
      child.forEach((el) => {
        fragment.appendChild(el);
      });
    } else {
      fragment.appendChild(child);
    }
  });

  return fragment;
};

function getSourceAsDOM(content: string): Document {
  const parser = new DOMParser();
  return parser.parseFromString(content, 'image/svg+xml');
}
