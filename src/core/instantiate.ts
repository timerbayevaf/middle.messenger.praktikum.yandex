import { AiElementTypes } from './constant';

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

const updateDomProperties = (
  dom: JSX.HTMLNodeElement,
  prevProps: JSX.HTMLProps,
  nextProps: JSX.HTMLProps
) => {
  // Remove event listeners
  keys(prevProps)!
    .filter(isEvent)
    .forEach((name) => {
      const callback = prevProps[name];
      if (callback) {
        const eventType = name.toLowerCase().substring(2);
        dom.removeEventListener(eventType, callback);
      }
    });

  // Remove attributes
  keys(prevProps)!
    .filter(isAttribute)
    .forEach((name) => {
      name = escapeHtml(PropsMapper(name)) as keyof JSX.BaseHTMLAttributes;

      if (dom.removeAttribute) {
        dom.removeAttribute(name);
      } else if (name in dom) {
        delete dom[name];
      }
    });

  // Set attributes
  keys(nextProps)!
    .filter(isAttribute)
    .forEach((name) => {
      const _name = escapeHtml(PropsMapper(name)) as keyof JSX.Attributes;
      let val = nextProps[name];

      if (name === 'style' && dom.style) {
        Object.assign(dom.style, val);
      } else if (
        val !== false &&
        val != null &&
        name !== 'value' &&
        dom.setAttribute
      ) {
        val = name !== 'src' ? escapeHtml(val) : val;
        dom.setAttribute(_name, val);
        if (name === 'disabled') {
          console.warn(name, val);
        }
      } else {
        dom[_name] = val;
      }
    });

  // Add event listeners
  keys(nextProps)!
    .filter(isEvent)
    .forEach((name) => {
      const callback = nextProps[name] as EventListener;
      if (callback) {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, callback);
      }
    });
};

const instantiate = (element: JSX.Element): JSX.Instance => {
  const { type, props = {} } = element;

  // Create DOM element
  const isTextElement = type === AiElementTypes.TEXT;
  let dom = isTextElement
    ? document.createTextNode('')
    : document.createElement(type);

  if (type === 'icon') {
    // Кастомный тег для добавление svg иконки
    dom = document.createElement('span');
    const children = getSourceAsDOM(props['icon']);

    dom.appendChild(children.documentElement);
  }

  updateDomProperties(dom as JSX.HTMLNodeElement, {}, props);

  // Instantiate and append children
  const childElements = props.children || [];
  const childInstances = childElements.map(instantiate);
  const childDoms = childInstances.map(
    (childInstance: JSX.Instance) => childInstance.dom
  );
  childDoms.forEach((childDom: Node) => dom.appendChild(childDom));

  const instance = { dom, element, childInstances };

  return instance;
};

export { instantiate, updateDomProperties };
