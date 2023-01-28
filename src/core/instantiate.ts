import { AiElementTypes } from './constant';
import {
  keys,
  isEvent,
  isAttribute,
  escapeHtml,
  PropsMapper,
  getSourceAsDOM,
} from './utils';

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

// создание экземпляра дома
const instantiate = (element: JSX.Element): JSX.Instance => {
  const { type, props = {} } = element;

  // Создание дом элемента
  // так как пока нет реализации добавления createDocumentFragment, используется `span`
  const isTextElement = type === AiElementTypes.TEXT;
  let dom = isTextElement
    ? document.createTextNode('')
    : document.createElement(type === AiElementTypes.FRAGMENT ? 'span' : type);

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
