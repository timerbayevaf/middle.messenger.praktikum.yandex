function checkTypicalNode(c: never) {
  return typeof c === 'string' || typeof c === 'number';
}

const keys = Object.keys as <T>(
  obj: T
) => (keyof T extends infer U
  ? U extends string
    ? U
    : U extends number
    ? `${U}`
    : never
  : never)[];
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

const escapeHtml = (str: string) =>
  String(str).replace(/[&<>"'\/\\]/g, (s) => `&${entityMap[s]};`);

// To keep some consistency with React DOM, lets use a mapper
// https://reactjs.org/docs/dom-elements.html
const PropsMapper = (
  name: string
): 'tabindex' | 'class' | 'readonly' | typeof name =>
  ({
    tabIndex: 'tabindex',
    className: 'class',
    readOnly: 'readonly',
  }[name] || name);

const isEvent = (
  name: keyof JSX.AllHTMLAttributes
): name is keyof JSX.DOMAttributes => name.startsWith('on');

const isAttribute = (name: keyof JSX.HTMLProps): name is keyof JSX.Attributes =>
  !name.startsWith('on') && name !== 'children';

function getSourceAsDOM(content: string): Document {
  const parser = new DOMParser();
  return parser.parseFromString(content, 'image/svg+xml');
}

function isInstance(instance: JSX.Instance | null): instance is JSX.Instance {
  return instance !== null;
}

export {
  keys,
  checkTypicalNode,
  getSourceAsDOM,
  isAttribute,
  isEvent,
  PropsMapper,
  escapeHtml,
  isInstance,
};
