import { instantiate, updateDomProperties } from './instantiate';
import { isInstance } from './utils';

function reconcile(
  parentDom: Node,
  instance: JSX.Instance | null,
  element: JSX.Element
): JSX.Instance | null {
  if (instance == null) {
    // Добавление элемента
    const newInstance = instantiate(element);
    parentDom.appendChild(newInstance.dom);
    return newInstance;
  } else if (element == null) {
    // Удаление элемента
    parentDom.removeChild(instance.dom);
    return null;
  } else if (instance.element.type === element.type) {
    // Обновление элемента
    updateDomProperties(instance.dom, instance.element.props, element.props);
    instance.childInstances = reconcileChildren(instance, element);
    instance.element = element;
    return instance;
  } else {
    // Замена элемента
    const newInstance = instantiate(element);
    parentDom.replaceChild(newInstance.dom, instance.dom);
    return newInstance;
  }
}

function reconcileChildren(
  instance: JSX.Instance,
  element: JSX.Element
): JSX.Instance[] {
  const dom = instance.dom;
  const childInstances = instance.childInstances;
  const nextChildElements = element.props.children || [];
  const newChildInstances: Array<JSX.Instance | null> = [];
  const length = Math.max(childInstances.length, nextChildElements.length);
  let index = 0;

  while (index < length) {
    const childInstance = childInstances[index];
    const childElement = nextChildElements[index];
    const newChildInstance = reconcile(dom, childInstance, childElement);
    newChildInstances.push(newChildInstance);
    index++;
  }

  return newChildInstances.filter(isInstance);
}

export { reconcile };
